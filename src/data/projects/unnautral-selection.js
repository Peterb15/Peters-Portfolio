const project = {
  "id": "unnautral-selection",
  "title": "Unnautral Selection",
  "tagline": "An arcade experience where evolution is interactive and physical",
  "role": "Creative Coder & Designer",
  "tools": "Arduino, Physical Computing, Game Design, Fabrication",
  "date": "2025 (In Progress)",
  "heroMedia": "/assets/unnatural-selection/hero.jpg",
  "overview": "Unnatural Selection is a custom-built arcade game that allows “evolution” through real-time, physical interaction. Players spin cylinder components on a creature-like controller—head, torso, and legs—to create unique hybrids. These choices influence how the game responds visually and mechanically, evolving based on player choices.  Try to defeat their opponent in this strange and exciting 2-player fight.",
  "myRole": [
    "Co-designed evolutionary interaction concept",
    "Built custom controller and implemented electronics",
    "Coded physical response logic"
  ],
  "processSections": [
    {
      "title": "Design & Fabrication",
      "content": "The controller was built using modular parts that players physically swap mid-game, encouraging experimentation. We prototyped multiple layouts using cardboard and wood before settling on a 3D-printed core with laser-cut external components. The game was made by William Balliete using Godot."
    },

    {
      "title": "Implementation",
      "content": "Using IR sensors and a multicolored 3D printed cylinder with key areas of white material to trigger the sensor as the desired rotation. Each spinner contains 3 IR sensors used that each trigger when their respective animal is placed in the “Active” position. Allowing players to quickly spin the controller to swap between the different head, body, and feet of their character. The data from the IR sensors is transmitted to a Teensy microcontroller which is connected to a computer running the game and will virtually press specific keys to switch the “Active” element."
    }

  ],
  "gallery": [
    {
      "src": "/assets/unnatural-selection/shot1.jpeg",
      "alt": "Early enclosure prototype"
    },
    {
      "src": "/assets/unnatural-selection/hero.jpg",
      "alt": "Final build during testing"
    }
  ],
  "reflection": "Still in development, but this project has pushed my thinking about evolution beyond a conceptual game mechanic. Designing something that physically morphs and reacts has opened new doors in my creative practice—especially in how narrative, behavior, and design intersect.",
  "credits": "Team project for CTD alt.arcade course.",
  "collaborators": [
    {
      "name": "William Balliete",
      "role": "Game Design & Developement"
    },
    {
      "name": "Adam Yoder",
      "role": "Controller Design & Fabrication"
    }
  ],
  "externalLinks": [
    {
      "href": "https://youtu.be/aMWo43-s8-Q",
      "label": "Demo Video"
    },
    {
      "href": "https://www.youtube.com/watch?v=l0jT3rYz4l0&t=5s",
      "label": "Technical Details (Video)"
    },
    {
      "href": "https://github.com/btx4/unnatural_selection",
      "label": "Github Repo"
    }
  ]
};

export default project;
