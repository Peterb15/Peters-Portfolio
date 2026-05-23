// src/pages/ResumePage.jsx
import React from "react";

export default function ResumePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Peter Burke</h1>
        <p className="text-lg text-dark-300">Creative Technologist & Storyteller</p>
        <div className="text-sm text-dark-400">
          burke.pete15@gmail.com •{" "}
          <a href="https://linkedin.com/in/PeterBurke15" className="underline hover:text-accent-400">LinkedIn</a> •{" "}
          <a href="https://peterburke.co" className="underline hover:text-accent-400">peterburke.co</a>
        </div>
      </header>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-2">
          <p className="font-medium">University of Colorado Boulder</p>
          <p>B.S. Creative Technology & Design — ATLAS Institute, College of Engineering and Applied Science</p>
          <p>B.A. English (Creative Writing) — College of Arts & Sciences</p>
          <p className="text-sm text-dark-400 mt-2">GPA: 3.4 • Graduated Spring 2026</p>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-8">

          <div>
            <h3 className="text-lg font-medium">Creative Director<span className="text-sm text-dark-400 ml-2">Jul 2023 – Present</span></h3>
            <p className="text-sm text-dark-400 mb-2">Players Win Ties LLC</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Founded and lead a D&D actual play media production company with a 25-person cross-country team.</li>
              <li>Directed over 20 hours of content from concept to final release across narrative, art, music, and editing.</li>
              <li>Managed creative vision, team coordination, and production pipelines across writing, design, and marketing.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Makerspace Technician<span className="text-sm text-dark-400 ml-2">Aug 2025 – Present</span></h3>
            <p className="text-sm text-dark-400 mb-2">BTU Lab, University of Colorado Boulder</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Facilitated orientations and provided technical support for the public makerspace.</li>
              <li>Answered questions on 3D Printing, Laser Cutting, Woodworking, and electronics.</li>
              <li>Assisted with machine maintenance and stock management.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Learning Assistant — Text<span className="text-sm text-dark-400 ml-2">Jan 2025 – Present</span></h3>
            <p className="text-sm text-dark-400 mb-2">ATLAS Institute, University of Colorado Boulder</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mentored students in Adobe Illustrator, InDesign, and Dimensions.</li>
              <li>Reviewed work on packaging, posters, and typographic design.</li>
              <li>Assisted in lecture delivery and hands-on project work.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Finance Director<span className="text-sm text-dark-400 ml-2">Aug 2025 – Present</span></h3>
            <p className="text-sm text-dark-400 mb-2">HackCU Club, University of Colorado Boulder</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Submitted and pitched funding and grant proposals to intrauniversity resources.</li>
              <li>Helped organize CU's annual hackathon, drawing 200+ participants across campus.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Writer / Content Creator<span className="text-sm text-dark-400 ml-2">May 2024 – Present</span></h3>
            <p className="text-sm text-dark-400 mb-2">Environmental Center, University of Colorado Boulder</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Wrote student-facing articles emphasizing clarity and accessibility for environmental initiatives.</li>
              <li>Produced multimedia content (articles, video, social media) reaching 10,000+ views.</li>
              <li>Maintained alignment with institutional branding across all produced content.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Zero Waste Event Lead<span className="text-sm text-dark-400 ml-2">Aug 2023 – Present</span></h3>
            <p className="text-sm text-dark-400 mb-2">Environmental Center, University of Colorado Boulder</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Managed volunteer teams during university-wide events to implement waste reduction strategies.</li>
              <li>Launched an e-waste drop-off system at the BTU Lab to increase campus sustainability access.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Kitchen Manager<span className="text-sm text-dark-400 ml-2">Oct 2020 – Dec 2022</span></h3>
            <p className="text-sm text-dark-400 mb-2">Tip Top Savory Pies LLC, Lafayette CO</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Line Cook<span className="text-sm text-dark-400 ml-2">Jan 2023 – May 2023</span></h3>
            <p className="text-sm text-dark-400 mb-2">Birdcall, Boulder CO</p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="space-y-8">

          <div>
            <h3 className="text-lg font-medium">Echo Was Here — Senior Capstone<span className="text-sm text-dark-400 ml-2">Jan – Apr 2026</span></h3>
            <p className="text-sm text-dark-400 mb-2">ATLAS Institute, CU Boulder</p>
            <p className="mb-2">A blind-box figurine IP spanning a 2:07 cel-shaded animated music video, RFID-enabled collectible figurines, and a custom Bluetooth speaker.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Directed the animation — wrote the 73-shot shot list, built the cel-shader pipeline, and animated all 51 shots in the final delivery.</li>
              <li>Rigged the character using Rigify with a custom driver-based face rig for sprite-swapped expressions.</li>
              <li>Modeled all instruments, the robber outfit, and managed the linked-file pipeline architecture in Blender 5.0.</li>
            </ul>
            <p className="mt-2 italic text-sm text-dark-400">Role: Director, Lead Animator, Technical Artist</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">The Shattered Lands<span className="text-sm text-dark-400 ml-2">2023 – Present</span></h3>
            <p className="text-sm text-dark-400 mb-2">Players Win Ties LLC</p>
            <p className="mb-2">A serialized D&D actual play blending collaborative storytelling, cinematic editing, and physical set fabrication.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Directed 20+ hours of serialized content from concept through post-production.</li>
              <li>Managed a 25-person team across narrative, design, editing, music, and marketing.</li>
              <li>Designed and fabricated battle sets (30–50 hours each) using 3D printing, laser cutting, and handbuilt terrain.</li>
            </ul>
            <p className="mt-2 italic text-sm text-dark-400">Role: Showrunner, Director, Writer, Dungeon Master</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Unnatural Selection<span className="text-sm text-dark-400 ml-2">Fall 2024</span></h3>
            <p className="text-sm text-dark-400 mb-2">ATLS 4519: Alt. Arcade Interfaces, CU Boulder</p>
            <p className="mb-2">A two-player arcade game with custom physical controllers — spinning cylinders swap creature parts mid-fight.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Engineered the sensor system using IR sensors in 3D-printed cylinders read by a Teensy microcontroller.</li>
              <li>Fabricated controllers through iterative prototyping — cardboard mockups to 3D-printed and laser-cut final builds.</li>
              <li>Collaborated on game design, mapping physical input to on-screen creature abilities in Godot.</li>
            </ul>
            <p className="mt-2 italic text-sm text-dark-400">Role: Hardware Designer, Creative Coder, Fabricator</p>
          </div>

        </div>
      </section>

      {/* Honors & Awards */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Honors & Awards</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Dean's List<span className="text-sm text-dark-400 ml-2">Spring 2025, Fall 2025</span></h3>
            <p className="text-sm">Recognized for academic excellence in final two semesters, including a 4.0 GPA in Fall 2025.</p>
          </div>
          <div>
            <h3 className="font-medium">1st Place — Best Prank, ShittyHacks 2026<span className="text-sm text-dark-400 ml-2">Jan 2026</span></h3>
            <p className="text-sm">Won the Best Prank category at ShittyHacks, a humor-and-creativity-focused collegiate hackathon.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Software</h3>
            <p className="text-sm">Illustrator • InDesign • Photoshop • After Effects • Premiere • Blender • Ableton • Godot • Arduino IDE • SketchUp • OnShape</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Coding</h3>
            <p className="text-sm">C++ • C# • GDScript • HTML • CSS • JavaScript</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Creative & Technical</h3>
            <p className="text-sm">Physical Computing • Fabrication • Game Dev • Web Design • Web Dev • 3D Modeling • Animation • Audio/Video Editing • Product Design • 3D Printing • Laser Cutting • Woodworking</p>
          </div>
        </div>
      </section>

    </section>
  );
}
