// All site copy, one entry per language. Pages are generated for each key (/en/, /es/).
export const email = 'contact@itmarck.com'
export const github = 'https://github.com/itmarck'
export const linkedin = 'https://www.linkedin.com/in/marceloovelasquez'
// Google reads this for the name it shows above results, so it must be on the home pages
export const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Marcelo Velásquez',
  alternateName: 'itmarck',
  url: 'https://itmarck.com/',
}

const en = {
  lang: 'en',
  locale: 'en-US',
  title: 'Marcelo Velásquez — Software developer',
  jobTitle: 'Software developer',
  description:
    'Marcelo Velásquez, a software developer from Peru. Projects, work and how to reach me.',
  nav: { projects: 'Projects', experience: 'Experience', contact: 'Contact', home: 'Home' },
  place: 'Peru',
  switchTo: { label: 'Español', href: '/es/' },
  about: {
    tab: 'About me',
    hello: 'Hi, I’m',
    role: 'I make software that’s quick to use and easy on the eyes, from the first screen all the way to the server. Lately I’ve been building tools for my own day: a launcher and a personal log.',
    copy: 'Copy',
    copied: 'Copied',
    badge: 'DEVELOPER · PERU · SINCE 2020 ·',
  },
  portfolio: 'Portfolio',
  building: { title: 'Currently building', more: 'All projects' },
  path: { title: 'Experience', note: 'With Globant since 2021', more: 'See more' },
  stack: { title: 'Stack', items: 'TypeScript · Flutter · Node · Linux' },
  reach: { title: 'Say hi', mail: 'Write an email', close: 'Close' },
  modal: {
    title: 'Let’s talk',
    text: 'Got a project, a job offer or a question about something here? Drop me a line and I’ll get back to you.',
    also: 'Also on',
  },
  stats: [
    { n: '6', label: 'years writing code' },
    { n: '34', label: 'GitHub stars on Flutter Tree' },
  ],
  networks: { n: '5', label: 'TV networks running my code' },
  projects: {
    title: 'Projects',
    description:
      'Minima, Wingman, Flutter Tree and other things I’ve built, plus my work for Disney.',
    intro: 'Things I design, build and host myself, plus my day job for Disney.',
    minima: {
      status: 'In development · since 2025',
      meta: 'Flutter · Android and desktop',
      text: 'A launcher that stays out of your way: one box for whatever’s on your mind, and your apps as plain text. Whatever you type ends up in Wingman.',
    },
    wingman: {
      status: 'In development · since 2026',
      meta: 'TypeScript · PostgreSQL',
      text: 'My personal log, with its own database and API. Notes, tasks and projects come in from Minima and get sorted in the background.',
    },
    tree: {
      status: 'Published · since 2019',
      meta: 'VS Code extension · 34 ★',
      text: 'Write Flutter widget trees with a short syntax that’s easy to read.',
    },
    lapse: {
      meta: 'Python',
      text: 'Timelapses of a Bambu Lab 3D printer, shot on a Sony ZV-E10.',
    },
    disney: {
      meta: 'Globant · Disney',
      title: 'ABC.com and Universal Player',
      text: 'Sites for five networks, plus the video player the whole group uses.',
    },
    lab: {
      meta: 'Lab · soon',
      title: 'This ink is a 5 KB shader',
      text: 'No libraries, rendered below your screen’s resolution and paused when you can’t see it. More experiments coming.',
    },
    open: 'Open',
    more: {
      title: 'More on GitHub',
      all: 'All repositories',
      items: [
        { name: 'Gitspace', text: 'A mobile app for GitHub and GitLab.', meta: 'Flutter · 2022' },
        { name: 'Booked', text: 'Bookings for small businesses.', meta: 'TypeScript · 2025' },
        {
          name: 'Spot',
          text: 'A simple auth service with storage, plus its npm package.',
          meta: 'JavaScript · 2022',
        },
      ],
    },
  },
  experience: {
    title: 'Experience',
    description:
      'Six years of frontend, backend and everything in between, from Globant and Disney to my own servers.',
    intro: 'Six years of frontend, backend and everything in between.',
    summary:
      'Software developer from Peru. I started on the frontend, worked my way down to APIs, databases and networks, and these days I run my own servers.',
    jobs: [
      {
        company: 'Globant',
        client: 'for Disney Entertainment',
        when: 'Jun 2021 – now',
        items: [
          {
            title: 'ABC.com and network sites',
            text: 'Building and shipping the sites for ABC, Freeform, National Geographic, FX and Disney Now.',
          },
          {
            title: 'Video Universal Player',
            text: 'The JavaScript package that plays video across the group’s sites.',
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
            text: 'Built with Vue.js and Django, with Asterisk handling the calls.',
          },
        ],
      },
      {
        company: 'Fertilidad Gestar',
        client: '',
        when: 'Oct – Dec 2020',
        items: [
          { title: 'Reporting system', text: 'Reports that build themselves, in Excel and PDF.' },
        ],
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
  notFound: { title: 'Oops, this page does not exist', back: 'Back home' },
}

export type Copy = typeof en

const es: Copy = {
  lang: 'es',
  locale: 'es-PE',
  title: 'Marcelo Velásquez — Desarrollador de software',
  jobTitle: 'Desarrollador de software',
  description:
    'Marcelo Velásquez, desarrollador de software en Perú. Proyectos, experiencia y cómo contactarme.',
  nav: { projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto', home: 'Inicio' },
  place: 'Perú',
  switchTo: { label: 'English', href: '/en/' },
  about: {
    tab: 'Sobre mí',
    hello: 'Hola, soy',
    role: 'Hago software rápido de usar y agradable a la vista, desde la primera pantalla hasta el servidor. Últimamente estoy armando herramientas para mi día a día de código abierto.',
    copy: 'Copiar',
    copied: 'Copiado',
    badge: 'DESARROLLADOR · PERÚ · DESDE 2020 ·',
  },
  portfolio: 'Portafolio',
  building: { title: 'En lo que trabajo ahora', more: 'Todos los proyectos' },
  path: { title: 'Experiencia', note: 'Con Globant desde 2021', more: 'Ver más' },
  stack: { title: 'Stack', items: 'TypeScript · Flutter · Node · Linux' },
  reach: { title: 'Escríbeme', mail: 'Escribir un correo', close: 'Cerrar' },
  modal: {
    title: 'Hablemos',
    text: '¿Tienes un proyecto, una propuesta de trabajo o alguna pregunta sobre algo de aquí? Escríbeme y te respondo.',
    also: 'También en',
  },
  stats: [
    { n: '6', label: 'años programando' },
    { n: '34', label: 'estrellas de Flutter Tree en GitHub' },
  ],
  networks: { n: '5', label: 'canales de TV que usan mi código' },
  projects: {
    title: 'Proyectos',
    description:
      'Minima, Wingman, Flutter Tree y otras cosas que he hecho, además de mi trabajo para Disney.',
    intro: 'Cosas que diseño, programo y hospedo yo mismo, y mi trabajo del día a día para Disney.',
    minima: {
      status: 'En desarrollo · desde 2025',
      meta: 'Flutter · Android y escritorio',
      text: 'Un launcher que no te distrae: un solo campo para lo que tengas en mente y tus apps como texto. Todo lo que escribes termina en Wingman.',
    },
    wingman: {
      status: 'En desarrollo · desde 2026',
      meta: 'TypeScript · PostgreSQL',
      text: 'Mi registro personal, con su propia base de datos y API. Las notas, tareas y proyectos llegan desde Minima y se ordenan solos en segundo plano.',
    },
    tree: {
      status: 'Publicado · desde 2019',
      meta: 'Extensión de VS Code · 34 ★',
      text: 'Arma árboles de widgets de Flutter con una sintaxis corta y fácil de leer.',
    },
    lapse: {
      meta: 'Python',
      text: 'Timelapses de una impresora 3D Bambu Lab, grabados con una Sony ZV-E10.',
    },
    disney: {
      meta: 'Globant · Disney',
      title: 'ABC.com y Universal Player',
      text: 'Sitios de cinco canales y el reproductor de video que usa todo el grupo.',
    },
    lab: {
      meta: 'Laboratorio · pronto',
      title: 'Esta tinta es un shader de 5 KB',
      text: 'Sin librerías, a menor resolución que tu pantalla y en pausa cuando no la estás viendo. Pronto habrá más experimentos.',
    },
    open: 'Abrir',
    more: {
      title: 'Más en GitHub',
      all: 'Todos los repositorios',
      items: [
        { name: 'Gitspace', text: 'App móvil para GitHub y GitLab.', meta: 'Flutter · 2022' },
        {
          name: 'Booked',
          text: 'Reservas para pequeños negocios.',
          meta: 'TypeScript · 2025',
        },
        {
          name: 'Spot',
          text: 'Un servicio de autenticación simple, con almacenamiento y su paquete de npm.',
          meta: 'JavaScript · 2022',
        },
      ],
    },
  },
  experience: {
    title: 'Experiencia',
    description:
      'Seis años entre frontend, backend y todo lo que hay en medio, de Globant y Disney a mis propios servidores.',
    intro: 'Seis años entre frontend, backend y todo lo que hay en medio.',
    summary:
      'Desarrollador de software en Perú. Empecé en el frontend, fui bajando hacia APIs, bases de datos y redes, y hoy mantengo mis propios servidores.',
    jobs: [
      {
        company: 'Globant',
        client: 'para Disney Entertainment',
        when: 'Jun 2021 – hoy',
        items: [
          {
            title: 'ABC.com y sitios de canales',
            text: 'Desarrollo y despliegue de los sitios de ABC, Freeform, National Geographic, FX y Disney Now.',
          },
          {
            title: 'Video Universal Player',
            text: 'El paquete de JavaScript que reproduce video en los sitios del grupo.',
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
            text: 'Hecha con Vue.js y Django, con Asterisk para las llamadas.',
          },
        ],
      },
      {
        company: 'Fertilidad Gestar',
        client: '',
        when: 'Oct – Dic 2020',
        items: [
          { title: 'Sistema de reportes', text: 'Reportes que se generan solos en Excel y PDF.' },
        ],
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
  notFound: { title: 'Ups, esta página no existe', back: 'Volver al inicio' },
}

export const copy = { en, es }
export type Lang = keyof typeof copy
