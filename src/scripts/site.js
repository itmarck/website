// Page behavior. Runs once; astro:page-load re-wires each page after client-side navigation.
import { start } from './ink.js'

let ink

// The about card is cut (mask) around the orb plus its 8px gap, so the shader's sphere shows through.
function placeOrb() {
  const orb = document.querySelector('.orb')
  if (!orb) return
  const body = orb.closest('.about__body')
  const b = body.getBoundingClientRect()
  const o = orb.getBoundingClientRect()
  body.style.setProperty('--orb-x', `${o.left - b.left + o.width / 2}px`)
  body.style.setProperty('--orb-y', `${o.top - b.top + o.height / 2}px`)
  body.style.setProperty('--orb-r', `${o.width / 2 + 8}px`)
}
// The orb follows its card (container queries), not the window: re-measure whenever it or its slot resizes.
const orbSize = new ResizeObserver(placeOrb)

// Projects: Minima writes to Wingman. Each log entry is typed into Minima's field, sent, arrives in
// Wingman and gets its kind a moment later; then the log empties and it plays again. Without JS or
// under reduced motion the log simply shows its entries.
const wait = (ms) => new Promise((r) => setTimeout(r, ms))
async function sync(field, log) {
  const rows = [...log.children]
  log.classList.add('live')
  while (log.isConnected) {
    for (const row of rows) {
      const text = row.firstElementChild.textContent
      await wait(900)
      for (let i = 1; i <= text.length; i++) {
        field.textContent = text.slice(0, i)
        await wait(55)
      }
      await wait(700)
      field.textContent = ''
      row.classList.add('in')
      await wait(800)
      row.classList.add('labeled')
    }
    await wait(3200)
    for (const row of rows) row.classList.remove('in', 'labeled')
    await wait(900)
  }
}

document.addEventListener('astro:page-load', () => {
  ink ??= start(document.getElementById('ink'))
  const app = document.querySelector('.app')
  ink?.setScroller(app)
  // keyboard scrolling (arrows, space, page keys) follows focus; the page scrolls inside .app now
  if (document.activeElement === document.body) app.focus({ preventScroll: true })
  ink?.setOrb(document.querySelector('.orb'))
  orbSize.disconnect()
  const orb = document.querySelector('.orb')
  // the slot too: the orb can re-center in a taller slot without changing its own size
  if (orb) for (const el of [orb, orb.parentElement]) orbSize.observe(el)
  document
    .getElementById('contact')
    ?.addEventListener('toggle', (e) => ink?.pause(e.newState === 'open'))

  const field = document.querySelector('[data-typed]')
  const log = document.querySelector('[data-log]')
  if (field && log && !matchMedia('(prefers-reduced-motion: reduce)').matches) sync(field, log)

  const rise = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('is-in')
        rise.unobserve(e.target)
      }
    },
    { threshold: 0.12 },
  )
  document.querySelectorAll('.rise').forEach((el) => {
    rise.observe(el)
  })

  document.querySelectorAll('[data-copy]').forEach((b) => {
    b.addEventListener('click', async () => {
      b.dataset.label ??= b.firstChild.textContent // read once, so a second click can't save "Copied"
      try {
        await navigator.clipboard.writeText(b.dataset.copy)
        b.firstChild.textContent = `${b.dataset.done} `
        setTimeout(() => (b.firstChild.textContent = b.dataset.label), 1600)
      } catch {
        location.href = `mailto:${b.dataset.copy}`
      }
    })
  })

  document.querySelector('.lang')?.addEventListener('click', (e) => {
    try {
      localStorage.setItem('lang', e.currentTarget.dataset.lang)
    } catch {}
  })
})
