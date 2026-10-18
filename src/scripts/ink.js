// Living ink: one WebGL field drawn behind the page (fixed canvas). No dependencies.
// Cheap by design: renders below screen resolution (ink is soft anyway), lowers it when
// frames run slow, pauses in hidden tabs and draws one still frame under reduced motion.
// Night palette, same values as --ink-0…5 in theme.css
const COLORS = ['#02040b', '#0b2a6e', '#0f7d88', '#2f6bff', '#f6a5d8', '#ffe14a']

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_energy;
uniform float u_drift;
uniform vec3 u_c0, u_c1, u_c2, u_c3, u_c4, u_c5;
uniform vec4 u_sphere;
uniform vec2 u_rot;
uniform float u_dim;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
vec2 i = floor(p), f = fract(p);
vec2 u = f * f * (3.0 - 2.0 * f);
return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
float v = 0.0, a = 0.5;
mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
for (int i = 0; i < 4; i++) { v += a * noise(p); p = m * p; a *= 0.5; }
return v;
}
float specks(vec2 sp, float density, float size) {
vec2 id = floor(sp), gv = fract(sp) - 0.5;
vec2 off = (vec2(hash(id + 1.3), hash(id + 7.1)) - 0.5) * 0.6;
float r = size * (0.35 + 0.65 * pow(hash(id + 2.7), 4.0));
return smoothstep(r, r * 0.55, length(gv - off)) * step(density, hash(id + 3.9));
}
vec3 ink(vec2 p, float t, float swirl) {
vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
vec2 r = vec2(fbm(p + 3.6 * q + vec2(1.7, 9.2) + 0.6 * t + swirl), fbm(p + 3.6 * q + vec2(8.3, 2.8) - 0.4 * t));
float f = fbm(p + 3.0 * r);
vec3 col = mix(u_c0, u_c1, smoothstep(0.25, 0.85, f));
col = mix(col, u_c2, smoothstep(0.45, 1.0, length(q)) * 0.85);
col = mix(col, u_c3, smoothstep(0.58, 0.95, r.x) * 0.75);
float vein = smoothstep(0.045, 0.0, abs(r.y - 0.62)) * smoothstep(0.3, 0.7, f);
col = mix(col, u_c4, vein * 0.9);
float s = specks(p * 7.0 + q * 2.0, 0.78, 0.22) * smoothstep(0.42, 0.8, length(r));
s = max(s, specks(p * 19.0 + r * 3.0, 0.86, 0.2) * smoothstep(0.5, 0.9, f + q.x * 0.3));
col = mix(col, u_c5, s);
return col;
}
void main() {
vec2 frag = gl_FragCoord.xy;
float k = 1.7 / u_res.y;
vec2 p = frag * k + vec2(0.0, u_drift);
vec2 m = u_mouse * u_res * k + vec2(0.0, u_drift);
float t = u_time * 0.035;
float swirl = exp(-dot(p - m, p - m) * 3.0) * (0.35 + u_energy);
vec3 col = ink(p, t, swirl);
vec2 uv = frag / u_res;
col *= mix(1.0, smoothstep(1.25, 0.25, length(uv - 0.5)), 0.55);
col *= u_dim;

if (u_sphere.w > 0.5) {
  vec2 d = (frag - u_sphere.xy) / u_sphere.z;
  float d2 = dot(d, d);
  float edge = 1.5 / u_sphere.z;
  if (d2 < 1.0 + edge * 2.0) {
    vec3 n = vec3(d, sqrt(max(0.0, 1.0 - d2)));
    vec2 sp = vec2(n.x + n.z * 0.55, n.y - n.z * 0.25) * 1.5 + u_rot + vec2(u_time * 0.03, 0.0);
    vec3 sc = ink(sp + 4.0, t * 1.6, 0.0);
    vec3 L = normalize(vec3(-0.5, 0.65, 0.6));
    float diff = max(dot(n, L), 0.0);
    float spec = pow(max(dot(reflect(-L, n), vec3(0, 0, 1)), 0.0), 36.0);
    float rim = pow(1.0 - n.z, 2.5);
    vec3 shaded = sc * (0.3 + 0.95 * diff) + spec * 0.55 + rim * u_c3 * 0.45;
    float a = smoothstep(1.0 + edge, 1.0 - edge, sqrt(d2));
    col = mix(col, shaded, a);
  }
}
gl_FragColor = vec4(col, 1.0);
}`

const VERT = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)

// canvas: the fixed <canvas>. setOrb(el) makes the shader fill el's box with a lit sphere (null hides it).
export function start(canvas) {
  let orb = null
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  let scale = matchMedia('(max-width: 900px)').matches ? 0.42 : 0.55
  const gl = canvas.getContext('webgl', {
    antialias: false,
    alpha: false,
    powerPreference: 'low-power',
  })
  if (!gl) return null

  const shader = (type, src) => {
    const s = gl.createShader(type)
    gl.shaderSource(s, src)
    gl.compileShader(s)
    return s
  }
  const prog = gl.createProgram()
  gl.attachShader(prog, shader(gl.VERTEX_SHADER, VERT))
  gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FRAG))
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null
  gl.useProgram(prog)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  gl.enableVertexAttribArray(0)
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
  const U = {}
  for (const n of [
    'res',
    'time',
    'mouse',
    'energy',
    'drift',
    'c0',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'sphere',
    'rot',
    'dim',
  ])
    U[n] = gl.getUniformLocation(prog, `u_${n}`)
  gl.uniform1f(U.dim, 1)

  const m = { x: 0.6, y: 0.5, tx: 0.6, ty: 0.5, energy: 0 }
  // Visible canvas size in CSS px. Not innerWidth/innerHeight: those include the scrollbar
  // (and the mobile URL bar), which stretched the field and pushed the sphere off its ring.
  let w = 1
  let h = 1

  function draw(time) {
    m.x += (m.tx - m.x) * 0.06
    m.y += (m.ty - m.y) * 0.06
    m.energy *= 0.94
    gl.uniform1f(U.time, 40 + time / 1000)
    gl.uniform2f(U.mouse, m.x, m.y)
    gl.uniform1f(U.energy, Math.min(m.energy, 1.2))
    gl.uniform1f(U.drift, scrollY * 0.0006)
    gl.uniform2f(U.rot, (m.x - 0.5) * 1.2, (m.y - 0.5) * 0.8)
    const r = orb?.getBoundingClientRect()
    const k = canvas.width / w // exact CSS px → canvas px (scale, after rounding)
    if (r)
      gl.uniform4f(
        U.sphere,
        (r.left + r.width / 2) * k,
        (h - r.top - r.height / 2) * k,
        (r.width / 2) * k,
        r.bottom > 0 && r.top < h ? 1 : 0,
      )
    else gl.uniform4f(U.sphere, 0, 0, 1, 0)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }

  function resize() {
    w = canvas.clientWidth || 1
    h = canvas.clientHeight || 1
    canvas.width = Math.round(w * scale)
    canvas.height = Math.round(h * scale)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(U.res, canvas.width, canvas.height)
    // resizing clears the canvas, so repaint now, at the current moment: draw(0) jumped back
    // to the start of the animation for a frame, which flickered while resizing
    draw(reduced ? 0 : performance.now())
  }

  let raf = 0
  let last = 0
  let slow = 0
  function loop(t) {
    raf = requestAnimationFrame(loop)
    slow = t - last > 26 ? slow + 1 : Math.max(0, slow - 1)
    last = t
    if (slow > 50 && scale > 0.28) {
      scale *= 0.8
      slow = 0
      resize()
    }
    draw(t)
  }
  let held = false
  const play = () => {
    cancelAnimationFrame(raf)
    if (!reduced && !held) raf = requestAnimationFrame(loop)
  }

  addEventListener(
    'pointermove',
    (e) => {
      const x = e.clientX / w
      const y = 1 - e.clientY / h
      m.energy += Math.min(0.25, Math.hypot(x - m.tx, y - m.ty) * 4)
      m.tx = x
      m.ty = y
    },
    { passive: true },
  )
  // follows the canvas itself, so a scrollbar or URL bar appearing also resizes the field
  new ResizeObserver(resize).observe(canvas)
  if (reduced) addEventListener('scroll', () => draw(0), { passive: true })
  document.addEventListener('visibilitychange', () =>
    document.hidden ? cancelAnimationFrame(raf) : play(),
  )

  COLORS.forEach((c, i) => {
    gl.uniform3fv(U[`c${i}`], rgb(c))
  })
  play()
  return {
    // stop drawing while something covers the page (e.g. a blurred modal), resume after
    pause: (paused) => {
      held = paused
      paused ? cancelAnimationFrame(raf) : play()
    },
    setOrb: (el) => {
      orb = el
      draw(performance.now())
    },
  }
}
