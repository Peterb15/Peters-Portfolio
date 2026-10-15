# Portfolio 2026: progress

_Last updated: Oct 15, 2026 · branch `portfolio-2026` on github.com/Peterb15/Peters-Portfolio_

## Where things stand
The site is built and runs locally (`npm run dev` → http://localhost:4321). It isn't live yet, and peterburke.co still serves the old site.

**Design:** "Spec & Sticker"
- Paper and ink, with heavy and light condensed type
- Ruler-style slider and spec rows of real numbers
- Marker notes, and one sticker per page
- Each project floods the page with its own color, and a B&W mode is available
- Design exploration: `inspiration/` (published privately at claude.ai/artifact/1EyRoCfaoFZEbqbBMu3ocY)

**Stack:**
- Astro 7 + MDX
- Self-hosted fonts
- Netlify (`netlify.toml`)
- peterburke.co is already on Netlify, with its domain registered at Namecheap

## Lineup
| # | Project | Tier | Color |
|---|---|---|---|
| 01 | Echo Was Here | Headliner | Echo blue `#1b43f0` |
| 02 | The Shattered Lands | Headliner | Storm purple `#6a1fb8` |
| 03 | Hole 66 | Feature | Highway yellow `#f5c400` |
| 04 | One Step Forward | Feature | Brass `#a8661f` |
| 05 | Unnatural Selection | Feature | Green `#2f9e44` |
| 06 | ARNOLD.EXE (playable) | Feature | Black / terminal green |
| 07–15 | Balance Board Pong, DM Carrying Case, Laugh Bucket, Stat Tracker, Smart Distribution, Tree Lamp, Cthulhu Journals, Where I Belong, Remaking the Renaissance | Archive | Ink |

**Other pages:**
- `/about`: photo placeholder
- `/writing`: 7 pieces
- `/play/arnold/`: the Godot web build
- `/play/personality-test/`

## Decisions made
- Audience: themed entertainment, animation studios, freelance. Location shown: Los Angeles, CA (moving end of 2026)
- Echo: Zeke built the RFID circuit, and Raphaelle wrote the song "Breaking In". Playing in Puddles was the team's brand, now inactive, so it gets a one-line credit only. Peter is continuing Echo solo
- Shattered Lands:
  - Sets designed by Peter and built by the crew
  - DM screen by Peter and Moe Collins
  - Minis painted by Mariah Ruff
  - Character art by AJ Jelekov
  - Score by Kaeden Tilak
  - Ship models printed from licensed STLs, so say "printed and painted", never "designed"
- Hole 66: mostly Peter, with help from Paul Bailey
- Unnatural Selection stays a feature. Its GDC submission wasn't accepted, so don't mention it
- Writing: full text for class and in-world pieces, excerpts only for novels and new stories (protects first-publication rights)

## Waiting on Peter
- [ ] **Review pass:** notes on every page
- [ ] Finished Echo hero clip (10–20s, shots 018 → 023 suggested). It replaces `public/video/echo-hero.mp4`
- [ ] Re-cropped and better photos (figurines, table Echo, Shattered Lands sets, physical robot, finished DM case)
- [ ] Your photo for /about (the Hole 66 selfie can stand in)
- [ ] **Sorellia** short story and **Cthulhu Journals** novel (placeholders in `src/data/writing.ts`)
- [ ] Updated resume PDF
- [ ] Netlify: turn on branch deploys for `portfolio-2026` to get a preview link
- [ ] Decide whether festival photos and video showing kids stay on Hole 66

## Next up (Claude)
- Redirects from old-site URLs to new ones
- Per-project share/preview images and meta
- 404 page
- Accessibility and performance pass (contrast on yellow, keyboard, mobile load)
- About page refresh
- Optional animation reel page

## Launch checklist
1. Review notes addressed
2. Netlify: set production branch to `portfolio-2026` (build `npm run build`, publish `dist`)
3. Check peterburke.co, old-URL redirects and playable games on the live site
4. Update LinkedIn and resume links

## Where things live
- `src/content/projects/*.mdx`: project pages (frontmatter = slider, colors, spec row)
- `src/assets/projects/<slug>/`: web images · `public/video/`: web video · `public/writing/`: PDFs
- `content/`: briefs, reviews, intake, originals (`content/**/media/` stays in Dropbox and out of git)
  - `content/SOURCES.md`: where the big originals live
  - `content/SCHOOL-REVIEW.md`: review of the School folder
- `tools/`: media tools and ARNOLD build notes
- Source folders (read only, never modified):
  - `Dropbox/Capstone(Organized)`
  - `Dropbox/Players Win Ties`
  - `Dropbox/School/Courses`
  - `Dropbox/Projects`
