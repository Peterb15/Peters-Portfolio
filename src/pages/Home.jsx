import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProjectsCarousel from '../components/FeaturedProjectsCarousel';

export default function Home() {
  return (
    <section
      id="home"
      className="px-4 sm:px-6 py-16 sm:py-20 max-w-6xl mx-auto text-center space-y-12"
    >
      {/* Main Heading */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Hi, I’m Peter Burke
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          I’m a designer and storyteller working at the intersection of technology and the arts.
          From multimedia installations to narrative-driven games, I bring creative vision to technical challenges —
          blending fabrication, physical computing, and narrative systems to craft imaginative experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition text-sm sm:text-base"
          >
            View My Work
          </Link>
          <Link
            to="/about"
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition text-sm sm:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="pt-4">
        <FeaturedProjectsCarousel />
      </section>
    </section>
  );
}
