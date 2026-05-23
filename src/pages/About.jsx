// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">

      {/* Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
        <p className="text-lg text-dark-400">Designer • Storyteller • Technologist</p>
      </div>

      {/* Bio */}
      <div className="space-y-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
        <p>
          I'm Peter Burke — a creative technologist and storyteller who builds things across animation, physical computing, fabrication, and narrative design. I recently graduated from the University of Colorado Boulder with a dual degree in Creative Technology & Design (ATLAS Institute, College of Engineering) and English with a focus in Creative Writing.
        </p>

        <p>
          My work lives at the intersection of making and telling. I've directed a 2:07 cel-shaded animated music video and built the technical pipeline behind it. I've designed and fabricated battle sets for a 25-person serialized storytelling production. I've engineered arcade controllers with custom sensor systems and firmware. And I've written short fiction, world lore, and sustainability content that's reached thousands of readers. What connects all of it is a belief that the best creative work happens when craft, story, and technology push on each other.
        </p>

        <p>
          I'm drawn to roles where I can work across disciplines — where the job description doesn't fit neatly into one box. I'm happiest when I'm building something physical, solving a technical problem, and thinking about how it all serves a narrative or experience. Whether that's in games, interactive media, themed entertainment, product design, or something I haven't encountered yet — I want to be in the room where creative vision meets hands-on execution.
        </p>

        <p>
          Outside of work, I'm a worldbuilder, a fiction writer, and someone who spends too much time thinking about how magic systems should feel internally consistent. I collect ideas from tabletop RPGs, punk aesthetics, and the kinds of stories that trust their audience to keep up.
        </p>
      </div>

      {/* What I Bring */}
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">What I Bring</h2>
        <div className="space-y-3 text-base leading-relaxed">
          <p>
            <span className="font-medium">Direction & creative leadership</span> — I've run a 25-person production team across six departments and directed a senior capstone from concept through exhibition. I know how to hold a creative vision while making space for collaborators to do their best work.
          </p>
          <p>
            <span className="font-medium">Technical art & pipeline design</span> — I've built cel-shader pipelines, rigging systems, face rigs, and linked-file architectures in Blender. I think in terms of workflows, not just deliverables.
          </p>
          <p>
            <span className="font-medium">Physical computing & fabrication</span> — From RFID-enabled speakers to IR sensor arrays to laser-cut terrain sets, I design and build hardware that bridges digital and physical experiences.
          </p>
          <p>
            <span className="font-medium">Writing & narrative design</span> — A creative writing degree means I think about story structure, voice, and worldbuilding with the same rigor I bring to technical problems.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4 pt-4">
        <p className="text-dark-400">Want to see the work?</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="btn-primary"
          >
            View Projects
          </Link>
          <Link
            to="/resume"
            className="btn-secondary"
          >
            See My Resume
          </Link>
          <Link
            to="/contact"
            className="btn-accent"
          >
            Get in Touch
          </Link>
        </div>
      </div>

    </section>
  );
}
