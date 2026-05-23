const project = {
  id: "unnatural-selection",
  title: "Unnatural Selection",
  featured: true,
  category: "major",
  status: "Completed",
  tagline: "A custom arcade game where players physically spin creature parts to fight, evolve, and adapt in real time",
  role: "Hardware Designer, Creative Coder, Fabricator",
  tags: ["Physical Computing", "Fabrication", "Game Design", "Arduino"],
  date: "Fall 2024",
  heroMedia: "/assets/unnatural-selection/hero.jpg",

  overview:
    "Unnatural Selection is a two-player arcade game built around custom physical controllers that let players create hybrid creatures in real time. Each controller features three spinning cylinders — head, torso, and legs — that players rotate mid-fight to swap between animal parts, changing their character's abilities on the fly. The game was built in Godot and responds to controller input through a Teensy microcontroller reading IR sensors embedded in each cylinder. The project was created for the Alt. Arcade Interfaces course at CU Boulder's ATLAS Institute, exploring how physical interaction design can make digital games more expressive and embodied.",

  myRole: [
    "Co-designed the core interaction concept — spinning physical cylinders to swap creature parts during gameplay",
    "Engineered the sensor system using IR sensors embedded in multicolored 3D-printed cylinders, with white material zones triggering rotation detection",
    "Programmed the Teensy microcontroller firmware to read three IR sensors per cylinder and translate rotational position into virtual key presses",
    "Fabricated the controller enclosures through iterative prototyping — cardboard and wood mockups, then 3D-printed cores with laser-cut external panels",
    "Collaborated on game design decisions including creature abilities, animation states, and how physical input maps to on-screen behavior"
  ],

  processSections: [
    {
      title: "Concept & Interaction Design",
      content:
        "The project started with a question: what if evolution wasn't something that happened to you, but something you physically did? We wanted players to feel the act of transformation — not through a menu or button press, but through a tangible, mechanical gesture. The spinning cylinder concept emerged from early prototyping: three independent rings on each controller, each representing a body segment (head, torso, legs). Rotating a ring swaps that segment to a different animal, changing the character's abilities mid-fight. The physicality of the interaction — the spin, the click into position, the immediate on-screen response — is what makes it feel like play rather than input."
    },
    {
      title: "Hardware & Sensor Engineering",
      content:
        "Each spinning cylinder is 3D printed with a multicolored design. Key zones of white material are positioned to trigger IR sensors as the cylinder rotates — three sensors per cylinder, each corresponding to a different creature option. When a white zone aligns with a sensor, the Teensy microcontroller registers the selection and sends the corresponding virtual key press to the computer running the game. This approach avoids complex rotary encoders in favor of a simpler, more reliable discrete-position system. The Teensy handles all three cylinders simultaneously, translating six possible creature parts per controller into real-time game input."
    },
    {
      title: "Fabrication & Iteration",
      content:
        "The controllers went through multiple iterations. Early prototypes were built from cardboard and scrap wood to test ergonomics — how the cylinders feel to spin, how far apart they should sit, whether players naturally reach for the right segment. Once the proportions were locked, we moved to 3D-printed internal structures housing the sensors and wiring, with laser-cut wood panels forming the exterior shell. The final controllers are sturdy enough for aggressive arcade play while keeping the internals accessible for repair and rewiring."
    },
    {
      title: "Game Integration",
      content:
        "The game itself was developed in Godot by William Balliete. Each creature combination produces different stats and abilities — a bird head might give aerial attacks, while reptile legs provide a ground dash. Our role was ensuring the physical controllers mapped cleanly to the game's input system and that swapping parts mid-fight felt responsive and fair. The Teensy emulates a keyboard, so integration was straightforward — each sensor state maps to a specific key, and the game reads those keys as creature-swap commands. The result is a seamless loop: spin the cylinder, feel the click, see the creature transform."
    }
  ],

  gallery: [
    {
      type: "video",
      src: "//www.youtube.com/embed/aMWo43-s8-Q?si=v0JxKMRehXlxcS70",
      alt: "Unnatural Selection gameplay demo"
    },
    {
      type: "image",
      src: "/assets/unnatural-selection/shot1.jpeg",
      alt: "Early controller prototype",
      caption: "Early prototyping with cardboard and wood mockups"
    },
    {
      type: "image",
      src: "/assets/unnatural-selection/hero.jpg",
      alt: "Final controllers during gameplay testing",
      caption: "Final controllers with 3D-printed cylinders and laser-cut enclosures"
    }
  ],

  reflection:
    "Unnatural Selection taught me how much interaction design lives in the physical details — the weight of a cylinder, the friction of a spin, the distance between your hands. Decisions that seem small on paper completely change how a game feels to play. It also reinforced something I keep learning: the simplest sensor solution that works reliably is almost always better than the clever one that works sometimes. The IR-and-white-zone approach isn't elegant on paper, but it's fast, cheap, and hasn't failed during a demo yet.",

  credits: "Created for ATLS 4519: Alt. Arcade Interfaces, CU Boulder ATLAS Institute. Instructor: Danny Rankin.",

  collaborators: [
    {
      name: "William Balliete",
      role: "Game Design & Development (Godot)"
    },
    {
      name: "Adam Yoder",
      role: "Controller Design & Fabrication"
    }
  ],

  tools: "Teensy Microcontroller, IR Sensors, 3D Printing, Laser Cutting, Godot, Arduino IDE",

  externalLinks: [
    {
      href: "https://youtu.be/aMWo43-s8-Q",
      label: "Gameplay Demo Video"
    },
    {
      href: "https://www.youtube.com/watch?v=l0jT3rYz4l0&t=5s",
      label: "Technical Breakdown Video"
    },
    {
      href: "https://github.com/btx4/unnatural_selection",
      label: "GitHub Repository"
    }
  ]
};

export default project;
