// ============= UNNATURAL SELECTION =============
export const unnaturalSelection = {
  id: "unnatural-selection",
  title: "Unnatural Selection",
  category: "major",
  status: "in-progress",
  featured: false,
  tagline: "An arcade experience where evolution is interactive and physical",
  role: "Creative Coder & Designer",
  tags: ["Arduino", "Physical Computing", "Game Design", "Fabrication", "Alt-Arcade"],
  tools: "Arduino, Physical Computing, 3D Printing, Game Design",
  date: "2025",
  heroMedia: "/assets/unnatural-selection/hero.jpg",
  
  overview: "Unnatural Selection is a custom-built arcade game that allows 'evolution' through real-time, physical interaction. Players spin cylinder components on a creature-like controller—head, torso, and legs—to create unique hybrids. These choices influence how the game responds visually and mechanically.",
  
  myRole: [
    "Co-designed evolutionary interaction concept",
    "Built custom controller and implemented electronics",
    "Coded physical response logic using IR sensors and Teensy"
  ],
  
  processSections: [
    {
      title: "Design & Fabrication",
      content: "The controller was built using modular parts that players physically swap mid-game, encouraging experimentation. We prototyped multiple layouts using cardboard and wood before settling on a 3D-printed core with laser-cut external components."
    },
    {
      title: "Implementation",
      content: "Using IR sensors and multicolored 3D printed cylinders with key areas of white material to trigger sensors at desired rotation. Each spinner contains 3 IR sensors that trigger when their respective animal is placed in the 'Active' position."
    }
  ],
  
  gallery: [
    {
      type: "video",
      src: "https://www.youtube.com/embed/aMWo43-s8-Q?si=v0JxKMRehXlxcS70",
      alt: "Demo Video"
    },
    {
      type: "image",
      src: "/assets/unnatural-selection/shot1.jpeg",
      alt: "Early enclosure prototype"
    },
    {
      type: "image",
      src: "/assets/unnatural-selection/hero.jpg",
      alt: "Final build during testing"
    }
  ],
  
  reflection: "Still in development, but this project has pushed my thinking about evolution beyond a conceptual game mechanic. Designing something that physically morphs and reacts has opened new doors in my creative practice.",
  
  credits: "Team project for CTD alt.arcade course",
  
  collaborators: [
    { name: "William Balliete", role: "Game Design & Development" },
    { name: "Adam Yoder", role: "Controller Design & Fabrication" }
  ],
  
  externalLinks: [
    { href: "https://youtu.be/aMWo43-s8-Q", label: "Demo Video" },
    { href: "https://www.youtube.com/watch?v=l0jT3rYz4l0&t=5s", label: "Technical Details (Video)" },
    { href: "https://github.com/btx4/unnatural_selection", label: "GitHub Repository" }
  ]
};