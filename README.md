# Personal Portfolio Website

A modern, premium portfolio website built with Astro, Tailwind CSS, and Decap CMS. Features dark/light mode, filterable projects, and a Git-based CMS for easy content management.

## Tech Stack

- **Framework:** Astro 4 with TypeScript
- **Styling:** Tailwind CSS (fully responsive)
- **CMS:** Decap CMS (formerly Netlify CMS)
- **Hosting:** Netlify (with automatic deploys)
- **Animations:** View Transitions API

## Features

- ✅ 4 pages: Home, Projects, About, Contact
- ✅ Dark/Light mode toggle with persistence
- ✅ Filterable projects grid (Web, Mobile, Design)
- ✅ Responsive mobile navigation (hamburger menu)
- ✅ SEO-friendly (meta tags, Open Graph, sitemap)
- ✅ Contact form with Netlify Forms
- ✅ Image optimization with Astro assets
- ✅ Smooth page transitions
- ✅ Editable content via Decap CMS

## Deployment to Netlify

1. Push this code to a GitHub repository
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Enable Decap CMS

1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Enable Identity
3. Under **Registration preferences**, set to "Invite only" or "Open"
4. Enable **Git Gateway**
5. Access the CMS at `your-site.netlify.app/admin`

## Local Development

```bash
npm install
npm run dev
