// All site copy, one entry per language. Pages are generated for each key (/en/, /es/).
export const email = 'contact@itmarck.com'
export const github = 'https://github.com/itmarck'
export const linkedin = 'https://www.linkedin.com/in/marceloovelasquez'

const en = {
  lang: 'en',
  locale: 'en-US',
  title: 'Marcelo Velásquez — Software developer',
  description: 'Marcelo Velásquez, software developer in Peru. Projects, experience and contact.',
  nav: { projects: 'Projects', experience: 'Experience', contact: 'Contact', home: 'Home' },
  place: 'Peru',
  switchTo: { label: 'Español', href: '/es/' },
  about: {
    tab: 'About me',
    hello: 'Hi, I’m',
    role: 'I build software that is quick to use and calm to look at, from the first screen to the server behind it. Lately, tools for my own day: a launcher and a personal log.',
    copy: 'Copy',
    copied: 'Copied',
    badge: 'DEVELOPER · PERU · SINCE 2020 ·',
  },
  portfolio: 'Portfolio',
  building: { title: 'Building now', more: 'All projects' },
  path: { title: 'Experience', note: 'Through Globant, since 2021', more: 'See more' },
  stack: { title: 'Stack', items: 'TypeScript · Flutter · Node · Linux' },
  reach: { title: 'Get in touch', mail: 'Open email app', close: 'Close' },
  modal: {
    title: 'Let’s talk',
    text: 'A project, a role or a question about something you saw here. Write to me and I’ll get back to you.',
    also: 'Also on',
  },
  stats: [
    { n: '6', label: 'years writing code' },
    { n: '34', label: 'GitHub stars on Flutter Tree' },
  ],
  networks: { n: '5', label: 'TV networks running my code' },
  projects: {
    title: 'Projects',
    intro: 'My own products, designed, built and hosted by me, plus the daily work for Disney.',
    minima: {
      status: 'In development · since 2025',
      meta: 'Flutter · Android and desktop',
      text: 'A launcher that doesn’t ask for attention: one field for whatever is on your mind, and your apps as plain text. What you write goes to Wingman.',
    },
    wingman: {
      status: 'In development · since 2026',
      meta: 'TypeScript · PostgreSQL',
      text: 'A personal log with its own database and API. Notes, tasks and projects arrive from Minima and are classified in the background.',
    },
    tree: {
      status: 'Published · since 2019',
      meta: 'VS Code extension · 34 ★',
      text: 'Build Flutter widget trees with a short, readable syntax.',
    },
    lapse: {
      meta: 'Python',
      text: 'Timelapses of a Bambu Lab 3D printer, shot with a Sony ZV-E10.',
    },
    disney: {
      meta: 'Globant · Disney',
      title: 'ABC.com and Universal Player',
      text: 'Sites for five networks and the video player used across the group’s pages.',
    },
    lab: {
      meta: 'Lab · soon',
      title: 'This ink is a 5 KB shader',
      text: 'No libraries, below your screen’s resolution and paused when you can’t see it. More experiments will live here.',
    },
    open: 'Open',
    more: {
      title: 'More on GitHub',
      all: 'All repositories',
      items: [
        { name: 'Gitspace', text: 'Mobile client for GitHub and GitLab.', meta: 'Flutter · 2022' },
        { name: 'Booked', text: 'Booking system for small businesses.', meta: 'TypeScript · 2025' },
        {
          name: 'Spot',
          text: 'Authentication service with basic storage, plus its npm package.',
          meta: 'JavaScript · 2022',
        },
      ],
    },
  },
  experience: {
    title: 'Experience',
    intro: 'Six years across frontend, backend and the infrastructure in between.',
    summary:
      'Software developer in Peru. I started in frontend, moved down the stack to APIs, databases and networks, and now run my own servers.',
    jobs: [
      {
        company: 'Globant',
        client: 'for Disney Entertainment',
        when: 'Jun 2021 – now',
        items: [
          {
            title: 'ABC.com and network sites',
            text: 'Development and deployment for ABC, Freeform, National Geographic, FX and Disney Now.',
          },
          {
            title: 'Video Universal Player',
            text: 'JavaScript package for video playback across the group’s pages.',
          },
        ],
      },
      {
        company: 'Securitec Perú',
        client: 'Score Cloud',
        when: 'Jan – Jun 2021',
        items: [
          {
            title: 'Communications platform',
            text: 'Built with Vue.js and Django, with telephony on Asterisk.',
          },
        ],
      },
      {
        company: 'Fertilidad Gestar',
        client: '',
        when: 'Oct – Dec 2020',
        items: [{ title: 'Reporting system', text: 'Automated reports in Excel and PDF.' }],
      },
    ],
    skills: {
      title: 'Stack',
      groups: [
        { name: 'Frontend', items: 'React · Vue · TypeScript · CSS' },
        { name: 'Backend', items: 'Node · MySQL · MongoDB · PostgreSQL' },
        { name: 'Mobile and ops', items: 'Flutter · Linux · Git' },
      ],
    },
    facts: [
      { label: 'Experience', value: '6 years' },
      { label: 'Based in', value: 'Peru' },
      { label: 'Languages', value: 'ES · EN' },
    ],
    cta: 'Write to me',
  },
  notFound: { title: 'This page doesn’t exist', back: 'Back home' },
}

export type Copy = typeof en

const es: Copy = {
  lang: 'es',
  locale: 'es-PE',
  title: 'Marcelo Velásquez — Desarrollador de software',
  description:
    'Marcelo Velásquez, desarrollador de software en Perú. Proyectos, experiencia y contacto.',
  nav: { projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto', home: 'Inicio' },
  place: 'Perú',
  switchTo: { label: 'English', href: '/en/' },
  about: {
    tab: 'Sobre mí',
    hello: 'Hola, soy',
    role: 'Construyo software rápido de usar y tranquilo de mirar, desde la primera pantalla hasta el servidor que lo sostiene. Últimamente, herramientas para mi propio día: un launcher y un registro personal.',
    copy: 'Copiar',
    copied: 'Copiado',
    badge: 'DESARROLLADOR · PERÚ · DESDE 2020 ·',
  },
  portfolio: 'Portafolio',
  building: { title: 'Construyendo ahora', more: 'Todos los proyectos' },
  path: { title: 'Experiencia', note: 'Vía Globant, desde 2021', more: 'Ver más' },
  stack: { title: 'Stack', items: 'TypeScript · Flutter · Node · Linux' },
  reach: { title: 'Hablemos', mail: 'Abrir correo', close: 'Cerrar' },
  modal: {
    title: 'Hablemos',
    text: 'Un proyecto, un puesto o una pregunta sobre algo que viste aquí. Escríbeme y te respondo.',
    also: 'También en',
  },
  stats: [
    { n: '6', label: 'años escribiendo código' },
    { n: '34', label: 'estrellas en GitHub para Flutter Tree' },
  ],
  networks: { n: '5', label: 'canales de TV con código mío' },
  projects: {
    title: 'Proyectos',
    intro:
      'Mis propios productos, diseñados, programados y hospedados por mí, y el trabajo de cada día para Disney.',
    minima: {
      status: 'En desarrollo · desde 2025',
      meta: 'Flutter · Android y escritorio',
      text: 'Un launcher que no pide atención: un campo para lo que tengas en mente y tus apps en texto. Lo que escribes llega a Wingman.',
    },
    wingman: {
      status: 'En desarrollo · desde 2026',
      meta: 'TypeScript · PostgreSQL',
      text: 'Un registro personal con su propia base de datos y API. Notas, tareas y proyectos llegan desde Minima y se clasifican en segundo plano.',
    },
    tree: {
      status: 'Publicado · desde 2019',
      meta: 'Extensión de VS Code · 34 ★',
      text: 'Construye árboles de widgets de Flutter con una sintaxis corta y legible.',
    },
    lapse: {
      meta: 'Python',
      text: 'Timelapses de una impresora 3D Bambu Lab, grabados con una Sony ZV-E10.',
    },
    disney: {
      meta: 'Globant · Disney',
      title: 'ABC.com y Universal Player',
      text: 'Sitios de cinco canales y el reproductor de video que usan las páginas del grupo.',
    },
    lab: {
      meta: 'Laboratorio · pronto',
      title: 'Esta tinta es un shader de 5 KB',
      text: 'Sin librerías, a menos resolución que tu pantalla y en pausa cuando no la ves. Aquí irán más experimentos.',
    },
    open: 'Abrir',
    more: {
      title: 'Más en GitHub',
      all: 'Todos los repositorios',
      items: [
        { name: 'Gitspace', text: 'Cliente móvil para GitHub y GitLab.', meta: 'Flutter · 2022' },
        {
          name: 'Booked',
          text: 'Sistema de reservas para pequeños negocios.',
          meta: 'TypeScript · 2025',
        },
        {
          name: 'Spot',
          text: 'Servicio de autenticación con almacenamiento básico, y su paquete de npm.',
          meta: 'JavaScript · 2022',
        },
      ],
    },
  },
  experience: {
    title: 'Experiencia',
    intro: 'Seis años entre frontend, backend y la infraestructura que los une.',
    summary:
      'Desarrollador de software en Perú. Empecé en el frontend, bajé por la pila hacia APIs, bases de datos y redes, y hoy mantengo mis propios servidores.',
    jobs: [
      {
        company: 'Globant',
        client: 'para Disney Entertainment',
        when: 'Jun 2021 – hoy',
        items: [
          {
            title: 'ABC.com y sitios de canales',
            text: 'Desarrollo y despliegue para ABC, Freeform, National Geographic, FX y Disney Now.',
          },
          {
            title: 'Video Universal Player',
            text: 'Paquete de JavaScript para reproducir video en las páginas del grupo.',
          },
        ],
      },
      {
        company: 'Securitec Perú',
        client: 'Score Cloud',
        when: 'Ene – Jun 2021',
        items: [
          {
            title: 'Plataforma de comunicaciones',
            text: 'Hecha con Vue.js y Django, con telefonía sobre Asterisk.',
          },
        ],
      },
      {
        company: 'Fertilidad Gestar',
        client: '',
        when: 'Oct – Dic 2020',
        items: [{ title: 'Sistema de reportes', text: 'Reportes automáticos en Excel y PDF.' }],
      },
    ],
    skills: {
      title: 'Stack',
      groups: [
        { name: 'Frontend', items: 'React · Vue · TypeScript · CSS' },
        { name: 'Backend', items: 'Node · MySQL · MongoDB · PostgreSQL' },
        { name: 'Móvil y operaciones', items: 'Flutter · Linux · Git' },
      ],
    },
    facts: [
      { label: 'Experiencia', value: '6 años' },
      { label: 'Ubicación', value: 'Perú' },
      { label: 'Idiomas', value: 'ES · EN' },
    ],
    cta: 'Escríbeme',
  },
  notFound: { title: 'Esta página no existe', back: 'Volver al inicio' },
}

export const copy = { en, es }
export type Lang = keyof typeof copy
