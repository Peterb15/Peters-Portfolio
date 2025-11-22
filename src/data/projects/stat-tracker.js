// ============= STAT TRACKER =============
export const statTracker = {
  id: "stat-tracker",
  title: "D&D Stat Tracker",
  category: "minor",
  status: "completed",
  featured: false,
  tagline: "A modular physical tracker for managing real-time D&D stats using Arduino and displays",
  role: "Inventor, Programmer, Fabricator",
  tags: ["Product Design", "Physical Computing", "Arduino", "Circuit Design"],
  tools: "Arduino, OLED & LCD Displays, Laser Cutting, SketchUp, Soldering",
  date: "2023",
  heroMedia: "/assets/stat-tracker/hero.jpg",
  
  overview: "The D&D Stat Tracker is a portable, Arduino-powered device that lets players track hit points, spell slots, and other stats in real time. Designed for tabletop roleplaying, it combines an OLED display, LCD module, joystick input, and a custom laser-cut enclosure.",
  
  myRole: [
    "Designed enclosure and layout using Fusion 360 for laser cutting",
    "Coded Arduino logic to handle OLED + LCD display updates via joystick",
    "Hand-wired and soldered all components to a custom protoboard"
  ],
  
  processSections: [
    {
      title: "Concept & Iteration",
      content: "The idea emerged from my frustration with keeping track of stats during D&D sessions. I wanted something tactile, clean, and reprogrammable. I went through multiple iterations of circuit layout and enclosure design."
    },
    {
      title: "Circuit Design & Programming",
      content: "The project combines an OLED display (tracking HP and spell slots), an LCD screen (for character metadata), and a joystick module for input. The circuit was assembled using an Arduino Uno."
    },
    {
      title: "Enclosure & Display",
      content: "The final housing was laser-cut from 1/4 inch wood and engraved with interface indicators. The enclosure also accommodates a portable battery and makes rewiring easy for future updates."
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
  
  reflection: "This was my first fully documented public electronics project. Seeing people engage with the build process gave me confidence in my ability to design intuitive systems that others can replicate.",
  
  credits: "Created as part of IDC 2 project at CU Boulder",
  
  externalLinks: [
    { href: "https://www.instructables.com/Digital-DD-Stat-Tracker/", label: "Instructables Build Guide" },
    { href: "https://www.youtube.com/embed/v8IM6B2NaPY?rel=0", label: "Demo Video" }
  ]
};