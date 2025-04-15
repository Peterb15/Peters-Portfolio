const project = {
  id: "stat-tracker",
  title: "D&D Stat Tracker",
  category: "minor",
  status: "Completed",
  tagline: "A modular physical tracker for managing real-time D&D stats using Arduino and displays",
  role: "Inventor, Programmer, Fabricator",
  tags: "Product Design, Physical Computing, Lasercutting, and Circuit Design",
  date: "2023",
  heroMedia: "/assets/stat-tracker/hero.jpg",

  overview:
    "The D&D Stat Tracker is a portable, Arduino-powered device that lets players track hit points, spell slots, and other stats in real time. Designed for tabletop roleplaying, it combines an OLED display, LCD module, joystick input, and a custom laser-cut enclosure to bring analog immersion into the digital age. The project was designed for reusability and modifiability across campaigns and characters, offering a physical alternative to apps and notebooks.",

  myRole: [
    "Designed enclosure and layout using Fusion 360 for laser cutting",
    "Coded Arduino logic to handle OLED + LCD display updates via joystick",
    "Hand-wired and soldered all components to a custom protoboard"
  ],

  processSections: [
    {
      title: "Concept & Iteration",
      content:
        "The idea emerged from my frustration with keeping track of stats during D&D sessions. I wanted something tactile, clean, and reprogrammable. After discarding an earlier IDC project, I pivoted to this — requiring entirely new components and layout logic. I went through multiple iterations of circuit layout and enclosure design before settling on the final form."
    },
    {
      title: "Circuit Design & Programming",
      content:
        "The project combines an OLED display (tracking HP and spell slots), an LCD screen (for character metadata), and a joystick module for input. Libraries such as SH1106 and LiquidCrystal were used to control display updates, with logic allowing the joystick to increment/decrement HP or slots, and click/slide resets. The circuit was assembled using an Arduino Uno and a custom-wired breadboard and later soldered to protoboard for stability."
    },
    {
      title: "Enclosure & Display",
      content:
        "The final housing was laser-cut from 1/4 inch wood and engraved with interface indicators. Several versions were tested—including a 3D printed prototype—before settling on the clean, layered wooden version with engraved surface labels. The enclosure also accommodates a portable battery and makes rewiring or reprogramming easy for future updates."
    }
  ],

  gallery: [
    {
      src: "/assets/stat-tracker/image1.png",
      alt: "Display wiring",
      caption: "Prototyping display logic and input handling on breadboard"
    },
    {
      src: "/assets/stat-tracker/image2.jpg",
      alt: "Screen output",
      caption: "OLED module tracking HP and spell slots in real time"
    },
    {
      src: "/assets/stat-tracker/image3.jpg",
      alt: "Housed setup",
      caption: "Final laser-cut wooden enclosure, assembled and functioning"
    }
  ],

  reflection:
    "This was my first fully documented public electronics project. I not only learned a lot about integrating multiple components, but also how to write clean instructions for others to follow. Seeing people engage with the build process gave me confidence in my ability to design intuitive systems that others can replicate and enjoy. It’s still in use today in my own games, and serves as a reminder of how physical design can elevate storytelling.",

  credits: "Created as part of my IDC 2 project at CU Boulder. Documentation published on Instructables.",

  tools: "Arduino, OLED & LCD Displays, Laser Cutting, SketchUp, Soldering",

  externalLinks: [
    {
      href: "https://www.instructables.com/Digital-DD-Stat-Tracker/",
      label: "Instructables Build Guide"
    },
    {
      href: "https://www.youtube.com/embed/v8IM6B2NaPY?rel=0",
      label: "Demo Video"
    }
  ]
};

export default project;
