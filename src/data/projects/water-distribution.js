// ============= SMART DISTRIBUTION =============
export const smartDistribution = {
  id: "smart-distribution",
  title: "Smart Distribution",
  category: "major",
  status: "completed",
  featured: false,
  tagline: "A modular water system that tracks and controls flow remotely using ESP32 and web interface",
  role: "System Designer, Fabricator, Web Interface Developer",
  tags: ["Physical Computing", "IoT", "Environmental Design", "Fabrication", "ESP32"],
  tools: "ESP32, Solenoid Valves, Flow Sensors, Arduino IDE, Ethernet, Wood Fabrication",
  date: "Spring 2025",
  heroMedia: "/assets/smart-distribution/HeroImage.jpg",
  
  overview: "Smart Distribution is a modular water distribution system designed to support off-grid infrastructure by allowing users to monitor and control water flow across multiple outputs. Developed for the course Hacking the Apocalypse.",
  
  myRole: [
    "Collaborated on system architecture and design of modular piping paths",
    "Built and wired the ESP32 control unit and Ethernet relay setup",
    "Coded the onboard server interface for remote valve and pump control",
    "Assisted in fabrication and assembly of the physical system"
  ],
  
  processSections: [
    {
      title: "Designing for Modularity and Integration",
      content: "We wanted Smart Distribution to be compatible with other Hacking the Apocalypse projects. This meant creating repeatable, clean piping paths using standardized connections, and a unified wiring strategy using Ethernet cables."
    },
    {
      title: "Power & Control Challenges",
      content: "Balancing the 5V logic of the ESP32 with the 12V requirements of our pumps and valves introduced significant complexity. We used relays to safely switch high-voltage components and prevent backflow or misfires."
    },
    {
      title: "Building the Physical System",
      content: "We assembled water buckets connected via couplings, sensors, and solenoid valves to simulate an adjustable distribution network. Flow sensors were embedded inline to measure output volume in real-time."
    }
  ],
  
  gallery: [
    {
      src: "/assets/smart-distribution/drawn1.png",
      alt: "Diagram of modular piping",
      caption: "Illustration of the modular distribution for bucket 1"
    },
    {
      src: "/assets/smart-distribution/image1.jpg",
      alt: "Picture of modular piping",
      caption: "Image of the modular distribution for bucket 1"
    },
    {
      src: "/assets/smart-distribution/drawn7.png",
      alt: "Circuit diagram",
      caption: "Connection between flow gates and sensors to power module"
    }
  ],
  
  reflection: "Smart Distribution taught me how to design for integration and scale in physical computing systems. The real-world constraints of power delivery, wiring confusion, and sensor reliability highlighted the value of clean documentation.",
  
  credits: "Created for Hacking the Apocalypse at the ATLAS Institute, CU Boulder",
  
  collaborators: [
    { name: "Lily Dykstra", role: "Lead Hardware Fabrication" },
    { name: "Rystan Qualls", role: "Flow Control & Electrical" },
    { name: "Pocket", role: "Hardware & Build Logistics" }
  ],
  
  externalLinks: [
    { href: "https://bit.ly/3GKkeM7", label: "Watch Demo Video" },
    { href: "http://bit.ly/4kTTK9B", label: "View Hacking the Apocalypse Book" },
    { href: "https://github.com/Hacking-The-Apocalypse/2025-spring-SmartDistribution", label: "GitHub Repository" }
  ]
};