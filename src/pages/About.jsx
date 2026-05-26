// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">

      {/* Heading */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
        <p className="text-lg text-dark-400">Designer • Storyteller • Technologist</p>
      </div>

      {/* Quick Intro */}
      <div className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
        <p>
          I'm Peter Burke — a creative technologist and storyteller who builds things across animation, physical computing, fabrication, and narrative design. I recently graduated from CU Boulder with a dual degree in Creative Technology & Design and English (Creative Writing).
        </p>
      </div>

      {/* What I Do — Grid */}
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold">What I Bring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-medium text-accent-500">Direction & Leadership</h3>
            <p className="text-sm text-dark-300">25-person production team across six departments. Senior capstone from concept through exhibition. I hold creative vision while making space for collaborators.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-accent-500">Technical Art & Pipelines</h3>
            <p className="text-sm text-dark-300">Cel-shader pipelines, rigging systems, face rigs, and linked-file architectures in Blender. I think in workflows, not just deliverables.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-accent-500">Physical Computing & Fabrication</h3>
            <p className="text-sm text-dark-300">RFID speakers, IR sensor arrays, laser-cut terrain sets. I design and build hardware that bridges digital and physical experiences.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-accent-500">Writing & Narrative Design</h3>
            <p className="text-sm text-dark-300">A creative writing degree means I think about story structure, voice, and worldbuilding with the same rigor I bring to technical problems.</p>
          </div>
        </div>
      </div>

      {/* What I'm Looking For */}
      <div className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold mb-4">What I'm Looking For</h2>
        <p>
          Roles where the job description doesn't fit neatly into one box. I'm happiest building something physical, solving a technical problem, and thinking about how it all serves a narrative or experience — whether that's in games, interactive media, themed entertainment, product design, or something I haven't encountered yet.
        </p>
      </div>

      {/* Personal */}
      <div className="max-w-3xl mx-auto text-sm text-dark-400 italic">
        <p>
          Outside of work — worldbuilder, fiction writer, and someone who spends too much time thinking about how magic systems should feel internally consistent. Fueled by tabletop RPGs, punk aesthetics, and stories that trust their audience to keep up.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/resume" className="btn-secondary">See My Resume</Link>
          <Link to="/contact" className="btn-accent">Get in Touch</Link>
        </div>
      </div>

    </section>
  );
}
