# Echo Was Here — case study brief

**Color:** Echo blue `#1B43F0` · **Slot:** Headliner 01
**Sources read:** `Dropbox/Capstone(Organized)` (progress log, deliverable outline, character docs, expert interviews, pitch decks, expo photos), echo-was-here.com, old portfolio data.

Lines marked **CHECK** are ones I couldn't confirm from the files.

---

## The pitch
An original IP built from scratch as a senior capstone: Echo, a 22-year-old punk musician who robs banks to make rent. She exists as a cel-shaded 3D music video, four RFID blind-box figurines, a speaker that plays each band member's part when you set her on it, a table-scale statue, and a themed booth at the ATLAS EXPO.

> "Everyone has a side hustle, mine's just more fun." (from echo-was-here.com)

## Spec row
| Label | Value | Source |
|---|---|---|
| Role | Director · Lead Animator · Technical Artist | old site + progress log |
| Runtime | 2:07 | progress log |
| Shots | 51 animated (from a 73-shot list) | shot list changelog |
| Figurines | 4 (Singer, Guitarist, Bassist, Drummer) | final deliverables |
| Song | "Breaking In", 4 stems | site + song files |
| Shown | ATLAS EXPO, Apr 24 2026 | expo poster photo |
| Timeline | Pitched Dec 3 2025 → built Jan–Apr 2026 | pitch deck + log |

## Story of the project (case study sections)
1. **Character first.** Echo, 22, lives in Notting (a city inspired by Chicago). Likes thrifting, roller skating, Le Tigre, pizza. Hates corporate jobs and getting told what to do. Her bank heists have earned her a cult local following.
2. **Experts shaped it.**
   - Toby, Design Director at Toys for Bob (Skylanders): what made Skylanders work was accessibility, ease of use and a consistent design across media. "Establish the rules and style of the world."
   - Bobby Africa (consumer products): sold the team on the collector "chase" and rarity ratios, and pointed you to Superplastic.
   - Also: Rhys Williams (music production), Zach Weaver (fabrication/electronics), Andrew Widner (resin printing).
3. **Pipeline problems, solved.**
   - Retopology and Rigify rig, plus a 2D-plane face rig driven by drivers
   - Cel-shader chain: Diffuse → Shader to RGB → ColorRamp → Emission
   - Voxel Heat Diffuse Skinning fixed the layered robber outfit
   - A $30 POLYGON Heist Pack replaced 15+ hours of bank modeling
4. **Directing calls.**
   - Song arrived Mar 28, and the animatic was built to it
   - The first 17 seconds play in silence; the music hits on the mirror reveal (sh. 018)
   - The full band drops at the skate launch (sh. 023); the solo breakdown is sh. 040
   - Cut Sequences 1 and 5 on Apr 6 to protect quality. 2:07 polished beats 3:00 rough.
5. **The physical world.**
   - Figurines pose-baked from the rig, printed, and airbrushed
   - Speaker: Teensy 4.1 + audio shield, two RFID readers, Bluetooth/character mode switch
   - Tycoon Packaging blind boxes with a handwritten note on the back: "hey! like what you see? good, 'cause there's more…"
   - One collectible card per box
6. **The booth was a set.** At EXPO, the space was dressed as Echo's apartment:
   - Drum kit, leather couch, record player
   - Merch rack with Echo tees and posters
   - The hand-painted "ECHO was here" banner
   - Blind-box tower, money bag, roller skates
   - Table Echo sprawled across a table
   - The film playing on a TV

   **This is the strongest themed-entertainment angle in the whole portfolio.** Lead the physical section with it.

## What I did (my draft, so edit it)
1. Directed the film: shot list (57 → 73 → 51), animatic, every timing decision
2. Built the look: cel-shader pipeline, line art, Library Override shot pipeline
3. Rigged and modeled Echo for animation: retopo, Rigify, face rig, heist outfit, all 4 instruments
4. Animated the 51 shots (hero shots 018, 028, 040)
5. Posed Echo for each figurine and the table statue
(The RFID speaker circuit is Zeke's, confirmed. Don't claim it.)

## Team
- Raphaelle Lepere: character design, modeling, speaker enclosure, packaging, 2D face sprites, **wrote and produced the song "Breaking In"**
- Zeke Thoreson: built the RFID speaker circuit, 3D printing, airbrushing, packaging
- Faculty advisor: Annie Margaret
- **CHECK:** Should "Playing in Puddles" (the brand on the site and boxes) appear?

## Honest status
- The animation is complete at 2:07, with Echo fully shaded. The EXPO TV shows shaded bank interiors, because the Heist Pack is pre-shaded.
- What's unfinished is the backgrounds outside the bank (street, sky), which are still greybox.
- Hero clip suggestion: sh. 018 → 023 (mirror reveal into the skate launch).

## Media copied to `media/selects/`
| Folder | What | Use |
|---|---|---|
| `expo/` | 17 EXPO photos: booth wide, figurines on the speaker, table Echo, box tower, banner, a visitor hugging table Echo, TV showing shaded frames, box-back note | Home fan, booth section, product |
| `product/` | 4 card TIFFs + back, box tower, packaging faces, painted drummer + guitarist | Cards, packaging |
| `process/` | Colored turnaround, pose sketches, sketch PDF, promo storyboard PDF, table-Echo print WIP, black test print | Process section |
| `video/` | Speaker demo (10 MB), 9s / 50s / shading test renders, site silhouette + graffiti art | Breakdowns |

## Big originals I did not copy (paths in `../../SOURCES.md`)
- Full film + unboxing (148 MB)
- EXPO speaker video (38 MB)
- EXPO clips
- Blender files

## Still need from you
- [ ] The finished 10–20s hero clip
- [ ] A clean, plain-background photo of the 4 figurines and table Echo (the EXPO shots are busy)
- [ ] Screenshots: shader nodes, face rig, VSE animatic. Your Week 11–12 logs already list exactly these as "IMAGES TO ADD"
