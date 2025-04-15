const project = {
  id: "tree-lamp",
  title: "Wooden Tree Lamp",
  category: "minor",
  status: "Completed",
  tagline: "A layered 3D wood lamp created through modeling, slicing, and fabrication",
  role: "Designer & Fabricator",
  tags: ["Product Design", "Fabrication", "Woodworking"],
  date: "2023",
  heroMedia: "/assets/tree-lamp/TreeThumbnail.jpg",

  overview:
    "This fabrication project explores how 3D modeling and laser slicing can be used to create sculptural forms. The lamp was hollowed to hold internal electronics, with embedded acrylic panels diffusing soft LED light through its layers. It blends digital design with hands-on craftsmanship.",

  myRole: [
    "Created 3D model and vertical slice planes in Blender",
    "Prepared files using Rhino and Illustrator for laser cutting",
    "Assembled wooden structure and integrated acrylic light diffusion"
  ],

  processSections: [
    {
      title: "Design & Modeling",
      content:
        "Using Blender, I modeled a stylized tree shape and generated vertical cross-sections for slicing. These were exported as 2D files and prepped in Rhino and Illustrator for laser cutting."
    },
    {
      title: "Fabrication",
      content:
        "After laser cutting the wood slices, I manually assembled the structure into a hollow form. Colored acrylic panels were embedded between slices to diffuse the glow of internal LEDs."
    }
  ],

  gallery: [
    {
      src: "/assets/tree-lamp/TreeImage1.jpg",
      alt: "Tree Lamp lit",
      caption: "Assembled lamp under lighting test"
    },
    {
      src: "/assets/tree-lamp/TreeImage2.jpg",
      alt: "Unlit side view",
      caption: "Wood slices from an angle"
    },
    {
      src: "/assets/tree-lamp/TreePieces.jpg",
      alt: "Disassembled pieces",
      caption: "Sliced components before assembly"
    }
  ],

  reflection:
    "This project deepened my understanding of fabrication workflows and how to bring digital designs to life. It reinforced my interest in combining aesthetic form with technical precision.",

  collaborators: [
    {
      name: "Anika Nelse",
      role: "Artist"
    }
  ],

  tools: "Blender, Rhino, Illustrator, Laser Cutting"
};

export default project;
