import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  // ── Teoría ────────────────────────────────────────────────────────────────
  teoria: [
    {
      type: 'category',
      label: 'Teoría',
      collapsible: false,
      items: [
        'teoria/automatas-finitos',
        'teoria/ficheros-en-c',
        // Agregar más apuntes teóricos acá a medida que se migren
      ],
    },
  ],

  // ── Trabajos Prácticos ────────────────────────────────────────────────────
  trabajosPracticos: [
    {
      type: 'category',
      label: 'Trabajos Prácticos',
      collapsible: false,
      items: [
        'trabajos-practicos/tp0',
        //'trabajos-practicos/tp1',
        //'trabajos-practicos/tp2',
        //'trabajos-practicos/tp3',
        //'trabajos-practicos/tp4',
      ],
    },
  ],

  // ── Recursos ──────────────────────────────────────────────────────────────
  recursos: [
    {
      type: 'category',
      label: 'Recursos',
      collapsible: false,
      items: [
        'recursos/github',
        // 'recursos/cheatsheet-flex',
        // 'recursos/cheatsheet-bison',
      ],
    },
  ],

};

export default sidebars;
