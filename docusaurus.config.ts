import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SSL – UTN FRBA',
  tagline: 'Sintaxis y Semántica de los Lenguajes',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ⚠️ Actualizar con la URL real de Vercel una vez deployado
  url: 'https://ssl-frba.vercel.app',
  baseUrl: '/',

  // ⚠️ Actualizar con la org y repo real de GitHub
  organizationName: 'ssl-frba',
  projectName: 'ssl-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // ⚠️ Actualizar con la URL real del repo para el botón "Editar esta página"
          editUrl: 'https://github.com/ssl-frba/ssl-docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        // Blog desactivado – no lo usamos
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ssl-social-card.jpg',
    
    // Búsqueda local (sin necesidad de Algolia)
    // Si querés Algolia en el futuro, reemplazar esta sección
    
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'SSL',
      logo: {
        alt: 'UTN FRBA Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'teoria',
          position: 'left',
          label: 'Teoría',
        },
        {
          type: 'docSidebar',
          sidebarId: 'trabajosPracticos',
          position: 'left',
          label: 'Trabajos Prácticos',
        },
        {
          type: 'docSidebar',
          sidebarId: 'recursos',
          position: 'left',
          label: 'Recursos',
        },
        {
          href: 'https://github.com/ssl-frba/ssl-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
      // Oculta navbar al scrollear hacia abajo, reaparece al subir
      hideOnScroll: false,
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contenido',
          items: [
            { label: 'Teoría', to: '/docs/teoria/automatas-finitos' },
            { label: 'TP0 – Introducción', to: '/docs/trabajos-practicos/tp0' },
            { label: 'TP1 – AFD en C', to: '/docs/trabajos-practicos/tp1' },
            { label: 'TP2 – Flex', to: '/docs/trabajos-practicos/tp2' },
            { label: 'TP3 – Bison', to: '/docs/trabajos-practicos/tp3' },
            { label: 'TP4 – Integrador', to: '/docs/trabajos-practicos/tp4' },
          ],
        },
        {
          title: 'Recursos',
          items: [
            { label: 'Instructivo GitHub', to: '/docs/recursos/github' },
            { label: 'Cheatsheet Flex', to: '/docs/recursos/cheatsheet-flex' },
            { label: 'Cheatsheet Bison', to: '/docs/recursos/cheatsheet-bison' },
          ],
        },
        {
          title: 'Cátedra',
          items: [
            {
              label: 'GitHub de la materia',
              href: 'https://github.com/ssl-frba',
            },
            {
              label: 'UTN FRBA',
              href: 'https://www.frba.utn.edu.ar',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sintaxis y Semántica de los Lenguajes – UTN FRBA. Construido con Docusaurus.`,
    },

    prism: {
      // Syntax highlighting – temas que combinan bien con los colores UTN
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      // Lenguajes extra que usa la materia
      additionalLanguages: ['c', 'bash', 'diff', 'yaml'],
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
