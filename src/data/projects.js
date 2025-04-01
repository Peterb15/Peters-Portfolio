
// src/data/projects.js
export const projects = [
  {
    id: "laugh-bucket",
    title: "The Laugh Bucket",
    status: "Completed",
    tags: ["Alt Arcade", "Installation", "Physical Computing", "Arduino"],
    description:
      "An interactive audio installation exhibited at the 2024 Whaaat!? Festival using Arduino triggers and NDI audio to let users remix their laughter.",
    media: {
      hero: "/assets/laugh-bucket/fullDisplay.jpg",
      gallery: [
        "/assets/laugh-bucket/Image1.jpg",
        "/assets/laugh-bucket/Image 2.jpg",
        "/assets/laugh-bucket/image3.jpg",
      ],
      video: "https://www.youtube.com/embed/H6jwWfM1DRg?si=MOH6X25X0Y4bXrEM",
    }
  },
  {
    id: "tree-lamp",
    title: "Wooden Tree Lamp",
    status: "Completed",
    tags: [, "Fabrication", "Lasercutting", "3D Modeling", "Product Design"],
    description:
      "A creative focused fabrication assignment. Using a 3D modeled tree and then taking vertical slices to create the 2 dimensonal planes for lasercutting. Hollowed for electronics/lights, and mixed with pieces of acrylic to allow light to shine through.",
    media: {
      hero: "/assets/tree-lamp/TreeThumbnail.jpg",
      gallery: [
        "/assets/tree-lamp/TreeImage1.jpg",
        "/assets/tree-lamp/TreeImage2.jpg",
        "/assets/tree-lamp/TreePieces.jpg",
      ]
    }
  },
  
  {
    id: "reframing-photography",
    title: "Where I Belong: Photo Book",
  status: "Completed",
  tags: ["Photography", "Photoshop", "Visual Design"],
  description:
    "A visual exploration using Photoshop to alter, frame, and re-contextualize photographs through compositional and digital techniques. Using Photoshop and Lightroom. Using the lyrics of 'I’m Still Here (Jim’s Theme)' by John Rzeznik from the movie Treasure Planet.",
    media: {
      hero: "/assets/reframing-photography/frontCover.jpg",
      gallery: [
        "/assets/reframing-photography/frontCover.jpg",
        "/assets/reframing-photography/backCover.jpg",
        "/assets/reframing-photography/rf-04.jpg",
        "/assets/reframing-photography/rf-03.jpg",
        "/assets/reframing-photography/rf-02.jpg",
        "/assets/reframing-photography/rf-01.jpg"

      ],
      docs: ["/assets/reframing-photography/Photobook.pdf"]
    },
  },
  {
    id: "remaking-ren",
    title: "Remaking the Renaissance",
    status: "Completed",
    tags: ["Video Editing", "Creative Writing", "Multimedia"],
    description:
      "A multimedia reinterpretation of the Ovidian myth of Narcissus and Echo, examining themes of digital disconnection and algorithmic echo chambers through the lens of a modern text conversation.",
    media: {
      hero: "/assets/remaking-ren/renHero.jpeg",
      video: ["https://www.youtube.com/embed/DX2TOJ5t31g?si=P89CZRwTYTv7H5t7"],
      docs: ["/assets/remaking-ren/documentation.pdf"]
    }
  },
  {
    id: "D&D Stat Tracker",
    title: "D&D Stat Tracker",
    status: "Completed",
    tags: ["Fabrication", "Physical Computing", "D&D", "Product Design"],
    description:
      "A custom-built companion device designed to streamline Dungeons & Dragons sessions by tracking stats and gameplay elements in real-time. Developed in response to frustrations with manual tracking and pacing issues, this project became a functional and personal solution I now use in my own games. The project featured two separate displays—including an OLED with unique code and wiring needs—packed into a compact housing. Challenges included tight layout constraints and managing an intricate wire system. Though the code was simplified by the end, it’s easily adaptable thanks to the modular framework I created.",
    media: {
      hero: "/assets/stat-tracker/hero.jpg",
      gallery: [
        "/assets/stat-tracker/image1.png",
        "/assets/stat-tracker/image2.jpg",
        "/assets/stat-tracker/image3.jpg"
      ],
      video: ["https://www.youtube.com/embed/v8IM6B2NaPY?si=011T52JyZtdf3ugu"],
      docs: ["https://www.instructables.com/Digital-DD-Stat-Tracker/"]
    }
  },
  {
    id: "unnautral-selection",
    title: "Unnautral Selection",
    status: "In Progress",
    tags: ["Alt Arcade", "Fabrication", "Physical Computing"],
    description:
      "An alternative controller group project exploring evolution through interactive arcade-style gameplay and physical computing.",
    media: {
      hero: "/assets/unnautral-selection/hero.jpg",
      gallery: [
        "/assets/unnautral-selection/shot1.jpg",
        "/assets/unnautral-selection/shot2.jpg"
      ],
      video: "https://www.youtube.com/embed/example1",
      docs: ["/assets/unnautral-selection/design-notes.pdf"]
    }
  },
  {
    id: "shattered-lands",
    title: "The Shattered Lands",
    status: "In Progress",
    tags: ["D&D", "Narrative", "Multimedia", "Production"],
    description:
      "A collaborative Dungeons & Dragons actual play web series produced by Players Win Ties LLC. Blends collaborative writing, multimedia, and design.",
    media: {
      hero: "/assets/shattered-lands/hero.jpg",
      gallery: [
        "/assets/shattered-lands/scene1.jpg",
        "/assets/shattered-lands/scene2.jpg"
      ],
      video: "https://www.youtube.com/embed/example3",
      docs: ["/assets/shattered-lands/series-outline.pdf"]
    }
  },
  {
    id: "water-distribution",
    title: "Water Distribution System",
    status: "In Progress",
    tags: ["Arduino", "Physical Computing", "Fabrication"],
    description:
      "A hands-on engineering project using Arduino sensors and enclosures to manage water flow and measure distribution in small-scale systems.",
    media: {
      hero: "/assets/water-distribution/hero.jpg",
      gallery: ["/assets/water-distribution/diagram.jpg"]
    }
  }
];
