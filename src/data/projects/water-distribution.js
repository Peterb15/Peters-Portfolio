const project = {
  id: "smart-distribution",
  title: "Smart Distribution: A Smart, Modular Water Distribution Network",
  tagline: "A modular water system that tracks and controls flow remotely using ESP32-based hardware and a custom web interface.",
  role: "System Designer, Fabricator, Web Interface Developer",
  tools: "ESP32, Solenoid Valves, Flow Sensors, Arduino IDE, Ethernet Wiring, Wood Fabrication, Custom Web UI",
  date: "Spring 2025",
  tags: ["physical-computing", "environmental-design", "internet-of-things", "fabrication"],

  heroMedia: "/assets/smart-distribution/HeroImage.jpg", // Replace with your real image path

  overview:
    "Smart Distribution is a modular water distribution system designed to support off-grid infrastructure by allowing users to monitor and control water flow across multiple outputs. Developed for the course Hacking the Apocalypse, this project addresses sustainable resource distribution in speculative or crisis contexts through physical computing and modular design.",

  myRole: [
    "Collaborated on system architecture and design of modular piping paths",
    "Built and wired the ESP32 control unit and Ethernet relay setup",
    "Coded the onboard server interface for remote valve and pump control",
    "Assisted in fabrication and assembly of the physical system and enclosures",
    "Documented the system’s purpose and future improvement plans"
  ],

  processSections: [
    {
      title: "Designing for Modularity and Integration",
      content:
        "We wanted Smart Distribution to be compatible with other Hacking the Apocalypse projects, including water collection, treatment, and power systems. This meant creating repeatable, clean piping paths using standardized connections, and a unified wiring strategy using Ethernet cables and keystone jacks for efficient signal routing. Our choice of ESP32 allowed us to host a control website and avoid dependency on external WiFi."
    },
    {
      title: "Power & Control Challenges",
      content:
        "Balancing the 5V logic of the ESP32 with the 12V requirements of our pumps and valves introduced significant complexity. We used relays to safely switch high-voltage components and prevent backflow or misfires. Debugging was another challenge—without a physical serial monitor in the field, resolving signal mismatches or relay timing issues required reconnecting to a laptop and iterative testing."
    },
    {
      title: "Building the Physical System",
      content:
        "We assembled water buckets connected via couplings, sensors, and solenoid valves to simulate an adjustable distribution network. Flow sensors were embedded inline to measure output volume in real-time, and enclosures were built from plywood to secure the electronics. Each step of construction was documented with guides and diagrams to support future iteration or expansion."
    }
  ],

  gallery: [
    {
      src: "/assets/smart-distribution/drawn1.png",
      alt: "Diagram of the modular piping and flow path for 1st bucket",
      caption: "Illustration of the modular distribution for the inside of bucket 1"
    },
    {
      src: "/assets/smart-distribution/image1.jpg",
      alt: "Picture of the modular piping and flow path for 1st bucket",
      caption: "Image of the modular distribution for the inside of bucket 1"
    },
    {
      src: "/assets/smart-distribution/drawn2.png",
      alt: "Diagram of the modular piping and flow path between buckets",
      caption: "Illustration of the modular distribution between bucket 1 and 2"
    },
    {
      src: "/assets/smart-distribution/Image2.jpg",
      alt: "Picture of the modular piping and flow path between buckets",
      caption: "Image of the modular distribution between bucket 1 and 2"
    },
    {
      src: "/assets/smart-distribution/drawn4.png",
      alt: "Diagram of the modular piping and flow path for 2nd bucket",
      caption: "Illustration of the modular distribution system inside bucket 2"
    },
    {
      src: "/assets/smart-distribution/image3.jpg",
      alt: "Picture of the modular piping and flow path for 2nd bucket",
      caption: "Image of the modular distribution system inside bucket 2"
    },
    {
      src: "/assets/smart-distribution/drawn6.png",
      alt: "Diagram of the modular piping and flow path from 2nd bucket to output sources",
      caption: "Illustration of the modular distribution leading from bucket 2 to output sources"
    },
    {
      src: "/assets/smart-distribution/image4.jpg",
      alt: "Diagram of the modular piping and flow path from 2nd bucket to output sources",
      caption: "Picture of the modular distribution leading from bucket 2 to output sources"
    },
    {
      src: "/assets/smart-distribution/drawn7.png",
      alt: "Circuit diagram of flow gates and flow rate sensors",
      caption: "Diagram depicting the connection between the flow gates and sensors to the power and control module."
    },
    {
      src: "/assets/smart-distribution/drawn8.png",
      alt: "Circuit diagram of the entire systems",
      caption: "Circuit diagram outlining the entire system."
    },
    {
      src: "/assets/smart-distribution/image5.png",
      alt: "Image of the control module",
      caption: "Image of low fidelity control module."
    }
    // Add more visuals as needed
  ],

  reflection:
    "Smart Distribution taught me how to design for integration and scale in physical computing systems. The real-world constraints of power delivery, wiring confusion, and sensor reliability highlighted the value of clean documentation and modular prototyping. In future iterations, I’d develop custom PCBs and implement a feedback system for closed-loop control, reducing error and easing debugging.",

  credits: "Created for Hacking the Apocalypse at the ATLAS Institute, CU Boulder",
  collaborators: [
    { name: "Lily Dykstra", role: "Lead Hardware Fabrication" },
    { name: "Rystan Qualls", role: "Flow Control & Electrical" },
    { name: "Pocket", role: "Hardware & Build Logistics" }
  ],

  externalLinks: [
    {
      href: "https://bit.ly/3GKkeM7",
      label: "Watch Demo Video"
    },
    {
      href: "src\data\projects\water-distribution.js",
      label: "View Documentation PDF"
    },
    {
      href: "http://bit.ly/4kTTK9B",
      label: "View Hacking the Apocalypse: Book 1: Water"
    },
    {
      href: "https://github.com/Hacking-The-Apocalypse/2025-spring-SmartDistribution",
      label: "GitHub Repository"
    }
  ]
};

export default project;

  