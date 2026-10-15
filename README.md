# peterburke.co (2026)

Astro site. Design direction: "Spec & Sticker". Paper + ink, one project color at a time, flood mode, B&W toggle.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/ (Netlify builds this automatically)
```

- Projects: `src/content/projects/*.mdx` (frontmatter = slider, colors, spec row; body = case study)
- Web images: `src/assets/projects/<slug>/` (Astro resizes them at build)
- Web video: `public/video/`
- Content intake + briefs: `content/` (large original media stays out of git)
- Design exploration: `inspiration/`
