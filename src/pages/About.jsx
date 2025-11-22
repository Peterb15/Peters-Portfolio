import React from "react";

export default function About() {
  return (
    <div className="pt-24 pb-6 bg-dark-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black text-pb-ivory mb-6">
            About Me
          </h1>
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent-500/30 shadow-copper">
            <img 
              src="/assets/profile.png"
              alt="Peter Burke" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-pb-ivory/80 leading-relaxed">
            <p className="text-lg font-accent font-normal">
              I'm a <span className="text-accent-500 font-medium">creative technologist</span> passionate 
              about crafting immersive experiences that blur the lines between digital and physical worlds.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-6 border border-pb-line">
                <h3 className="text-xl font-display font-extrabold text-pb-ivory mb-4">Background</h3>
                <p className="text-sm font-sans text-pb-ivory/70">
                  With a foundation in multimedia design and interactive media, I've spent years 
                  exploring the intersection of technology and storytelling.
                </p>
              </div>

              <div className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-6 border border-pb-line">
                <h3 className="text-xl font-display font-extrabold text-pb-ivory mb-4">Approach</h3>
                <p className="text-sm font-sans text-pb-ivory/70">
                  I believe in creating experiences that resonate emotionally while pushing 
                  technical boundaries, always with a focus on human connection.
                </p>
              </div>
            </div>

            <div className="border-t border-pb-line pt-8 mt-12">
              <h3 className="text-2xl font-display font-extrabold text-pb-ivory mb-6">Skills & Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Creative Coding', 'Physical Computing', 'Game Design',
                  '3D Modeling', 'Fabrication', 'Interactive Storytelling'
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-500 rounded-full" />
                    <span className="font-accent font-normal text-pb-ivory/70 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative quote */}
            <blockquote className="border-l-4 border-accent-500 pl-6 my-12">
              <p className="font-decorative italic text-lg text-accent-400/80">
                "Where technology meets artistry, experiences come alive"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}