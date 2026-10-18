// Page behavior. Runs once; astro:page-load re-wires each page after client-side navigation.
import { start } from './ink.js'

let ink

// The about card is cut where the orb sits, so the shader's sphere shows through; the ring frames it.
function placeOrb() {
  const orb = document.querySelector('.orb')
  if (!orb) return
  const body = orb.parentElement
  const ring = document.querySelector('.orb-ring')
  const b = body.getBoundingClientRect()
  const o = orb.getBoundingClientRect()
  const a = body.parentElement.getBoundingClientRect()
  body.style.setProperty('--orb-x', `${o.left - b.left + o.width / 2}px`)
  body.style.setProperty('--orb-y', `${o.top - b.top + o.height / 2}px`)
  body.style.setProperty('--orb-r', `${o.width / 2 + 16}px`)
  Object.assign(ring.style, {
    left: `${o.left - a.left - 8}px`,
    top: `${o.top - a.top - 8}px`,
    width: `${o.width + 16}px`,
    height: `${o.width + 16}px`,
  })
}
addEventListener('resize', placeOrb, { passive: true })

document.addEventListener('astro:page-load', () => {
  ink ??= start(document.getElementById('ink'))
  ink?.setOrb(document.querySelector('.orb'))
  placeOrb()
  document.fonts.ready.then(placeOrb)
  document
    .getElementById('contact')
    ?.addEventListener('toggle', (e) => ink?.pause(e.newState === 'open'))

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
      const label = b.firstChild.textContent
      try {
        await navigator.clipboard.writeText(b.dataset.copy)
        b.firstChild.textContent = `${b.dataset.done} `
        setTimeout(() => (b.firstChild.textContent = label), 1600)
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
