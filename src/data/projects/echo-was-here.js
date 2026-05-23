const project = {
  id: "echo-was-here",
  title: "Echo Was Here",
  featured: true,
  category: "major",
  status: "Completed",
  tagline: "A blind-box figurine IP brought to life through cel-shaded animation, RFID hardware, and physical product design",
  role: "Director, Lead Animator, Technical Artist",
  tags: ["Animation", "Physical Computing", "Fabrication", "3D", "Capstone"],
  date: "Jan – Apr 2026",
  heroMedia: "/assets/echo-was-here/hero.jpg",

  overview:
    "Echo Was Here is a senior capstone project that builds a small-scale IP from the ground up. At its center is Echo — a 22-year-old punk musician who robs a bank to make rent. Around her, we produced a 2:07 cel-shaded 3D animated music video, a line of four RFID-enabled blind-box collectible figurines, and a custom-built dual-mode Bluetooth speaker that recognizes each figurine and plays the matching instrument stem. Place the singer on the speaker and the vocal track plays. Place the drummer, and the drums come in. Place the whole band, and the full song assembles. The project spans animation, industrial design, embedded hardware, and product packaging — all tied together by a consistent visual language and a single character.",

  myRole: [
    "Directed the animation — wrote the shot list (73 shots across 5 sequences), made key creative calls including the silent cold-open and beat-sync decisions",
    "Built the entire cel-shader pipeline in EEVEE Next (Diffuse BSDF → Shader to RGB → ColorRamp → Emission) that defines the film's visual identity",
    "Rigged Echo using Rigify, including a custom face rig using driver-based 2D sprite swapping for eye and mouth expressions",
    "Modeled the robber outfit (jacket, roller skates, goggles, arm warmers, elbow guards, backpack) and all four instruments (guitar, bass, microphone, drumsticks)",
    "Weight-painted all character clothing using a four-tier hierarchy: Data Transfer, Automatic Weights, Bone Parenting, and Voxel Heat Diffuse Skinning",
    "Animated every shot in the final 2:07 delivery — pose-to-pose blocking, spline polishing, and camera work across 51 active shots",
    "Designed the linked-file pipeline architecture using Library Overrides, managing Blender 5.0's Slotted Actions API for keyframing on linked rigs",
    "Built the animatic in Blender's VSE — syncing all 51 shots to the song with frame-accurate timing and color-coded sequence strips"
  ],

  processSections: [
    {
      title: "Concept & Pre-Production",
      content:
        "The first month was spent defining the project's scope and proving its feasibility. We developed Echo as a character — a blue-haired punk musician living in Notting who robs a bank to make rent — and mapped the full user journey from discovery through purchase, unboxing, and interactive play. We studied precedents across the collectible and interactive toy space (Peach Riot, Skylanders, KAWS, Smiski) and conducted six expert interviews, including a session with the Design Director at Toys for Bob, the studio behind Skylanders. Five feasibility tests — character modeling, RFID speaker circuitry, storytelling, rendering, and figurine materials — all came back green. By the end of this phase we had a locked concept, a 73-shot shot list organized across five sequences, and a clear pipeline plan."
    },
    {
      title: "Technical Pipeline & Rigging",
      content:
        "This phase was the hardest technical stretch of the project — building everything that would make animation possible. I separated Raphaelle's fused NomadSculpt character mesh into animation-ready components (eyes, hair, earrings, clothing, body), retopologized with Quad Remesher, and built the full Rigify body rig. The cel-shader pipeline was locked: Diffuse BSDF → Shader to RGB → three-stop Constant ColorRamp → Emission, rendered in EEVEE Next with View Transform set to Standard. The face rig uses 2D alpha image planes parented to the head bone, driven by bone Y Location through a scripted expression that snaps between Raphaelle's hand-drawn sprite sheets — letting us animate facial expressions with the same keyframe workflow as body poses. Outlines are handled by Grease Pencil Line Art objects per shot file, since Freestyle was removed from EEVEE Next in Blender 4.2+."
    },
    {
      title: "Modeling, Weight Painting & Scope Decisions",
      content:
        "Spring break became a modeling sprint for Echo's heist outfit — jacket, roller skates, goggles, arm warmers, elbow guards, knee guards, backpack. Standard weight-painting methods broke down on the layered clothing, especially where the jacket overlapped arm warmers over the body mesh. After two days of diminishing returns, I purchased the Voxel Heat Diffuse Skinning add-on and rebuilt the coat weights from scratch — clean deformation on the first pass. A key scope decision also landed here: we cut Sequences 1 and 5 (apartment intro and aftermath) to focus on the full heist arc. We'd rather deliver 2:07 of polished animation than 3:00 of unfinished work. Separately, a $30 purchase of the Synty Studios POLYGON Heist Pack gave us a fully modeled bank environment that integrated in 30 minutes — saving an estimated 15+ hours of modeling time."
    },
    {
      title: "Animatic & Animation Sprint",
      content:
        "The song arrived on March 28 and unlocked everything. I built the animatic in Blender's VSE — 51 active shots laid out with frame-accurate timing, color-coded by sequence, with three critical sync points locked: the mirror reveal at the song entrance (Shot 018), the full band drop at the skating launch (Shot 023), and the solo breakdown at the guitar hero shot (Shot 040). The first 17 seconds play in total silence — a directing call that gives the heist sequence its punch through contrast. From there, two weeks of animation sprint: pose-to-pose blocking, spline polishing, camera work with Follow Path and Track To constraints, and accumulated technical problem-solving across every shot. Hero moments include the mirror reveal with EEVEE planar reflections, a full railslide animated in phased blocking stages, and the climax guitar solo built from the ground up."
    },
    {
      title: "Figurines, Speaker & Exhibition",
      content:
        "The physical side ran in parallel throughout the semester. Zeke designed and built the RFID-enabled Bluetooth speaker from scratch — Teensy 4.1 with audio shield, dual-mode toggle between A2DP streaming and RFID character playback, two scanners supporting multi-tag audio layering, all soldered clean and housed in a custom enclosure designed by Raphaelle. Four figurines (Singer, Guitarist, Bassist, Drummer) were pose-baked from the rigged model, 3D printed, and airbrush-painted. Blind-box packaging was produced through Tycoon Packaging. The full project — animation, speaker, and figurines — was exhibited at the ATLAS EXPO on April 24, 2026, with a live demo of the interactive speaker and the music video playing in the background."
    }
  ],

  gallery: [
    {
      type: "image",
      src: "/assets/echo-was-here/hero.jpg",
      alt: "Cel-shaded hero render of Echo in guitar solo pose",
      caption: "Final cel-shaded hero render — Shot 040, the guitar solo"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/figurines.jpg",
      alt: "All four painted figurines — Singer, Guitarist, Bassist, Drummer",
      caption: "The full blind-box figurine lineup, airbrush-painted"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/speaker.jpg",
      alt: "RFID speaker with figurine placed on top",
      caption: "Custom Bluetooth speaker with RFID figurine detection"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/mirror-reveal.jpg",
      alt: "Shot 018 — Echo sees herself in the mirror in full heist outfit",
      caption: "Shot 018 — the mirror reveal, where the song enters"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/railslide.jpg",
      alt: "Shot 028 — Echo mid-railslide",
      caption: "Shot 028 — the railslide sequence"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/cel-shader-pipeline.jpg",
      alt: "Blender node setup showing the cel-shader pipeline",
      caption: "The cel-shader node chain: Diffuse BSDF → Shader to RGB → ColorRamp → Emission"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/face-rig.jpg",
      alt: "Face rig expression sheet showing eye and mouth combinations",
      caption: "Driver-based face rig — sprite swapping for animated expressions"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/animatic-timeline.jpg",
      alt: "Blender VSE timeline with color-coded shot strips and song waveform",
      caption: "The full animatic — 51 shots synced to the song in Blender's VSE"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/robber-outfit.jpg",
      alt: "Turnaround render of Echo in the full robber outfit",
      caption: "Complete heist outfit — modeled, rigged, and weight-painted"
    },
    {
      type: "image",
      src: "/assets/echo-was-here/expo-booth.jpg",
      alt: "EXPO booth with figurines, speaker, and animation playing",
      caption: "The full exhibit at ATLAS EXPO — digital and physical together"
    }
  ],

  reflection:
    "Echo Was Here is the most ambitious project I've worked on — and the one that taught me the most about directing, technical problem-solving, and scope management. The weight-painting battle with the robber outfit was the hardest single stretch of the semester, but it's where my entire rigging workflow crystallized. Cutting two sequences was painful, but it was the right call — shipping polished work matters more than shipping everything. And the $30 bank environment purchase saved the animation timeline, which taught me a principle I'll carry forward: check what's available before committing modeling time. Most importantly, this project proved that a small team can build a coherent IP across animation, physical product, and interactive hardware when the visual language stays consistent and the pipeline is designed from the start.",

  credits: "Senior Capstone, ATLAS Institute, CU Boulder. Faculty Advisor: Annie Margaret, ENVD 234A.",

  collaborators: [
    { name: "Raphaelle Lepere", role: "Creative Director — Character & Environment Modeling, Speaker Enclosure Design, Packaging, HX Testing" },
    { name: "Zeke Thoreson", role: "Fabrication Manager — Hardware Engineering, RFID Speaker Build, 3D Printing, Airbrush Painting" }
  ],

  tools: "Blender 5.0 (EEVEE Next), NomadSculpt, Rigify, Quad Remesher, Voxel Heat Diffuse Skinning, Procreate, Ableton Live, Teensy 4.1, Arduino, 3D Printing, Airbrush, Notion",

  externalLinks: [
    {
      href: "https://vimeo.com/1169750811",
      label: "Watch Speaker Demo (Vimeo)"
    }
  ]
};

export default project;
