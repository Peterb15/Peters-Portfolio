// src/data/projects.js
export const projects = [
    {
      id: "shattered-lands",
      title: "The Shattered Lands",
      status: "In Progress",
      tags: ["D&D", "Narrative", "Multimedia"],
      description:
        "A serialized Dungeons & Dragons actual play series with 25+ contributors, blending storytelling, production, and worldbuilding.",
      media: {
        images: ["/assets/shattered-lands/cover.jpg"],
        video: "https://youtube.com/example",
        docs: ["/assets/shattered-lands/outline.pdf"]
      }
    },
    {
      id: "laugh-bucket",
      title: "The Laugh Bucket",
      status: "Completed",
      tags: ["Alt Arcade", "Interactive", "Installation"],
      description:
        "An interactive audio installation that lets users layer, distort, and remix their own laughter using Arduino triggers and NDI.",
      media: {
        images: ["/assets/laugh-bucket/shot1.jpg"]
      }
    },
    // Add the rest of your projects here!
  ];
  