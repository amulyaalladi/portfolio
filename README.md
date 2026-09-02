# Alladi Amulya — Portfolio

A personal developer portfolio built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

This outputs a `dist/` folder ready to deploy.

## Deploy to Netlify

**Option A — drag and drop (fastest):**
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder onto the page — it deploys instantly

**Option B — connect your GitHub repo (recommended, auto-redeploys on push):**
1. Push this project to a new GitHub repo
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

Once deployed, you can add a custom domain under Site settings → Domain management.

## Editing your content

All editable content — projects, skills, contact info — lives in one file:

```
src/data.js
```

Update the `projects`, `skills`, and `contact` objects there; the page updates automatically. No need to touch the component files unless you want to change layout or design.

### To-do before going live
- [ ] Add the real GitHub repo link for the NotesApp project in `src/data.js` (currently a placeholder `#`)
- [ ] Double check the LinkedIn URL — it was auto-corrected to `https://linkedin.com/in/alladiamulya`; update if that's not your actual profile URL
- [ ] Optionally add a resume PDF link in the Contact section
