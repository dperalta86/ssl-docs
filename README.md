# 📚 SSL Docs — Sintaxis y Semántica de los Lenguajes

> Documentación oficial de la materia **Sintaxis y Semántica de los Lenguajes** · UTN FRBA  
> Construido con [Docusaurus](https://docusaurus.io/) · Deployado en [Vercel](https://vercel.com/)

[![Deploy](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://ssl-frba.vercel.app)
[![Docusaurus](https://img.shields.io/badge/docusaurus-3.x-3ECC5F?logo=docusaurus&logoColor=white)](https://docusaurus.io/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-003087)](CONTRIBUTING.md)
[![License](https://img.shields.io/badge/license-MIT-C8102E)](LICENSE)

---

## 🌐 Sitio

**[ssl-frba.vercel.app](https://ssl-frba.vercel.app)** ← documentación en vivo

---

## 📁 Estructura del contenido

```
docs/
├── teoria/
│   ├── automatas-finitos.md
│   ├── ficheros-en-c.md
│   └── ...
├── trabajos-practicos/
│   ├── tp0.md
│   ├── tp1.md
│   ├── tp2.md
│   ├── tp3.md
│   └── tp4.md
└── recursos/
    ├── github.md
    ├── cheatsheet-flex.md
    └── cheatsheet-bison.md
```

---

## ⚡ Quick Start

### Requisitos previos

| Herramienta | Versión mínima |
|-------------|---------------|
| Node.js     | 18.x           |
| npm         | incluido con Node |
| Git         | cualquier versión reciente |

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/ssl-frba/ssl-docs.git
cd ssl-docs

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor local
npm run start
```

El sitio queda disponible en **http://localhost:3000** con hot-reload: cada vez que guardás un `.md`, el navegador se actualiza automáticamente.

---

## ✏️ Cómo contribuir contenido

Todo el contenido del sitio son archivos `.md` dentro de `docs/`. No hace falta saber React ni JavaScript para contribuir.

```bash
# 1. Crear una rama descriptiva
git checkout -b docs/nombre-del-cambio

# 2. Editar o crear el archivo .md correspondiente
# (VSCode con la extensión "Markdown All in One" es suficiente)

# 3. Commitear con mensaje claro
git add .
git commit -m "docs: descripción del cambio"

# 4. Subir la rama y abrir una Pull Request
git push origin docs/nombre-del-cambio
```

Una vez aprobada la PR y mergeada a `main`, **Vercel hace el deploy automáticamente** en ~2 minutos. Cada PR también genera una URL de preview para revisar antes de publicar.

> 📖 Para más detalle sobre el flujo completo, ver [CHEATSHEET-FLUJO-DE-TRABAJO.md](./CHEATSHEET-FLUJO-DE-TRABAJO.md)

---

## 🗂️ Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor local con hot-reload |
| `npm run build` | Build de producción |
| `npm run serve` | Previsualizar el build de producción localmente |
| `npm run clear` | Limpiar caché de Docusaurus |

---

## 🛠️ Stack

- **[Docusaurus 3](https://docusaurus.io/)** — framework de documentación
- **[Vercel](https://vercel.com/)** — hosting y deploy continuo
- **[GitHub Actions](https://github.com/features/actions)** — CI automático en cada PR
- **Markdown** — formato de todo el contenido

---

## 👥 Equipo

Mantenido por la cátedra de **Sintaxis y Semántica de los Lenguajes** · UTN FRBA.  
Consultas sobre el contenido: canales de la materia en Discord.

---

*© UTN FRBA — Sintaxis y Semántica de los Lenguajes*
