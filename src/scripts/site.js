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

document.addEventListener('astro:page-load', () => {
  ink ??= start(document.getElementById('ink'))
  ink?.setOrb(document.querySelector('.orb'))
  orbSize.disconnect()
  const orb = document.querySelector('.orb')
  // the slot too: the orb can re-center in a taller slot without changing its own size
  if (orb) for (const el of [orb, orb.parentElement]) orbSize.observe(el)
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
