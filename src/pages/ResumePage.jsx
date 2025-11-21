// src/pages/ResumePage.jsx
import React from "react";

export default function ResumePage() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-24 space-y-16">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-display font-black">Peter Burke</h1>
        <p className="text-lg text-white-700">Creative Technologist & Storyteller</p>
        <div className="text-sm text-white-500">
          burke.pete15@gmail.com • <a href="https://linkedin.com/in/PeterBurke15" className="underline">LinkedIn</a> • <a href="https://peterburke.co" className="underline">peterburke.co</a>
        </div>
      </header>
      {/* Education */}
      <section className= "text-center">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4 text-white-800">
          <div>
            <p className="font-medium">B.S. Creative Technology &amp; Design<br /><span className="text-sm text-white-500">ATLAS Institute, CU Boulder</span></p>
          </div>
          <div>
            <p className="font-medium">B.A. English (Creative Writing)<br /><span className="text-sm text-white-500">College of Arts &amp; Sciences, CU Boulder</span></p>
          </div>
          <p className="text-sm text-white-500 mt-2">GPA: 3.7 • Expected Graduation: Spring 2026</p>
        </div>
      </section>
      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white-700">
          <div>
            <h3 className="font-medium mb-1">Software</h3>
            <p>Illustrator • InDesign • Photoshop • After Effects • Premiere • Blender • Dimensions • Ableton • Godot • Arduino IDE • SketchUp</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Coding</h3>
            <p>C++ • C# • GDScript • HTML • CSS • Java</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Creative & Technical</h3>
            <p>Physical Computing • Fabrication • Game Dev • Web Design • 3D Modeling • Animation • Audio/Video Editing • Product Design • 3D Printing • Laser Cutting</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-8 text-white-800">
          <div>
            <h3 className="text-lg font-medium">Writer / Content Creator<br /><span className="text-sm text-white-500">May 2024 – Present · Environmental Center, CU Boulder</span></h3>
            <ul className="list-disc list-inside mt-2">
              <li>Produced multimedia content promoting environmental initiatives to CU Boulder’s student community.</li>
              <li>Wrote student‐facing articles emphasizing clarity and accessibility.</li>
              <li>Created video and social media content reaching 30,000+ students.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Learning Assistant – Text<br /><span className="text-sm text-white-500">Jan 2025 – Present · ATLAS Institute, CU Boulder</span></h3>
            <ul className="list-disc list-inside mt-2">
              <li>Mentored undergraduates in Adobe Illustrator, InDesign, and Dimensions.</li>
              <li>Reviewed student work on packaging, posters, and typographic design.</li>
              <li>Assisted in lecture delivery and hands‑on project workshops.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Zero Waste Event Lead<br /><span className="text-sm text-white-500">Sept 2023 – Present · Environmental Center, CU Boulder</span></h3>
            <ul className="list-disc list-inside mt-2">
              <li>Led campus sustainability programs and directed volunteer teams (10–20 people).</li>
              <li>Launched an e‑waste drop‑off system at the ATLAS Lab.</li>
              <li>Advocated sustainable design practices and educational outreach.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Chief Creative Officer<br /><span className="text-sm text-white-500">May 2023 – Present · Players Win Ties LLC</span></h3>
            <p className="mt-2">Launched a narrative media studio; led collaborative multimedia projects including The Shattered Lands series.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Kitchen Manager<br /><span className="text-sm text-white-500">Sept 2020 – Feb 2022 · Tip Top Savory Pies LLC</span></h3>
            <p className="mt-2">Managed an 8‑person kitchen, optimized production flow, and tracked inventory to meet daily targets.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-8 text-white-800">
          <div>
            <h3 className="text-lg font-medium">The Shattered Lands<br /><span className="text-sm text-white-500">Ongoing · Players Win Ties LLC</span></h3>
            <p className="mt-2">A Dungeons & Dragons actual‑play series blending collaborative storytelling and multimedia production.</p>
            <ul className="list-disc list-inside mt-2">
              <li>Directed 20+ hours of serialized content from concept through post-production.</li>
              <li>Managed a 25‑person team across narrative, design, editing, and marketing.</li>
              <li>Led creative vision and interdisciplinary workflows for a cohesive viewer experience.</li>
            </ul>
            <p className="mt-2 italic">Role: Creator, Writer, Director, Producer</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">The Laugh Bucket<br /><span className="text-sm text-white-500">Nov 2024 · Whaaat!? Lab, ATLAS Institute</span></h3>
            <p className="mt-2">An interactive audio‑layering installation using Arduino and NDI, exhibited live at CU Boulder’s ATLAS Festival.</p>
            <ul className="list-disc list-inside mt-2">
              <li>Engineered a real‑time audio layering system with Arduino triggers.</li>
              <li>Designed feedback loops combining sound, visuals, and user interaction.</li>
              <li>Fabricated custom enclosures and display elements for exhibition readiness.</li>
            </ul>
            <p className="mt-2 italic">Role: Lead Designer & Developer</p>
          </div>
        </div>
      </section>


    </section>
  );
}
