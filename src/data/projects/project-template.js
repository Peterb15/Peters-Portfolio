const project = {
    id: "my-project-id", // unique, kebab-case string used in URLs
    title: "Project Title",
    tagline: "A short, one-sentence summary of what this project is about",
    role: "Your role(s) in the project",
    tools: "Tools or technologies used",
    date: "Month Year or date range",
    tags: ["tag-one", "tag-two", "tag-three"],
  
    heroMedia: "/assets/my-project/hero.jpg", // path to the main image
  
    overview:
      "Write a short paragraph summarizing what the project is, who it was for (if relevant), and why it matters.",
  
    myRole: [
      "What you personally did in bullet points",
      "Be specific and use action verbs",
      "Include both creative and technical contributions"
    ],
  
    processSections: [
      {
        title: "Phase or Step Name",
        content:
          "Explain a major part of your process. This could be ideation, research, testing, or implementation. Use 1–2 paragraphs."
      },
      {
        title: "Another Phase",
        content:
          "Describe another meaningful part of the journey. What were the challenges? How did you overcome them?"
      }
      // Add as many sections as you need
    ],
  
    gallery: [
      {
        src: "/assets/my-project/image1.jpg",
        alt: "Alt text for accessibility",
        caption: "Optional caption for the image"
      },
      {
        src: "/assets/my-project/image2.jpg",
        alt: "Another angle or visual",
        caption: "What this visual shows"
      }
    ],
  
    reflection:
      "What did you learn? What would you do differently? This is your chance to show insight and growth.",
  
    credits: "Mention collaborators, professors, or organizations here.",
    collaborators: [
      { name: "Name 1", role: "Their role or contribution" },
      { name: "Name 2", role: "Another role" }
    ],
  
    externalLinks: [
      {
        href: "https://link-to-demo-or-writeup.com",
        label: "View Project Demo"
      },
      {
        href: "https://link-to-video-or-docs.com",
        label: "Read More"
      }
    ]
};
  
export default project;
  