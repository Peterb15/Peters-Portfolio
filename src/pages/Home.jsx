import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  // Use your real images under /public/assets/
  const featured = [
    { title: 'Shattered Lands', subtitle: 'Game / Branding', image: '/assets/shattered-lands.jpg', href: '/projects/shattered-lands' },
    { title: 'Unnatural Selection', subtitle: 'Alt Controller / Game', image: '/assets/unnatural.jpg', href: '/projects/unnatural-selection' },
  ];

  return (
    <main>
      <Hero />

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl text-pb-purple text-center mb-8">Projects</h2>
        <div className="mx-auto max-w-5xl h-px bg-gradient-to-r from-transparent via-pb-copper/40 to-transparent mb-10" />
        <div className="grid sm:grid-cols-2 gap-6">
          {featured.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
        <div className="flex justify-center">
          <Link to="/projects" className="mt-10 px-5 py-3 border border-pb-copper/60 rounded-md hover:shadow-copper">
            See All Projects
          </Link>
        </div>
      </section>

      {/* Creative Writing (single featured) */}
      <section id="writing" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="font-display text-4xl text-pb-purple text-center">Creative Writing</h2>
        <div className="mx-auto max-w-3xl h-px bg-gradient-to-r from-transparent via-pb-copper/40 to-transparent my-8" />
        <p className="text-center text-pb-ivory/80 max-w-2xl mx-auto">
          A showcase of recent fiction, poetry, and essays.
        </p>
        <div className="mt-10 rounded-xl border border-white/10 bg-[#181317]/80 p-6 shadow-inner">
          <blockquote className="font-display text-2xl leading-relaxed">
            “The night was cold and moonless, the shadows thickening in the narrow alleys, greedily swallowing the pale torchlight.”
          </blockquote>
        </div>
        <div className="flex justify-center">
          <Link to="/writing" className="mt-8 px-5 py-3 border border-pb-copper/60 rounded-md hover:shadow-copper">
            See My Writing
          </Link>
        </div>
      </section>
    </main>
  );
}
