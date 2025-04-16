import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects/index";

export default function FeaturedProjectsCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const scrollAmount = container.offsetWidth;
      const maxScroll = container.scrollWidth - container.offsetWidth;
      const nextScroll = container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: nextScroll >= maxScroll ? 0 : nextScroll,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {/* Section Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mt-2 mb-6">
          Featured Projects
        </h2>

        {/* Scrollable Carousel */}
        <div ref={scrollRef} className="overflow-x-auto scroll-smooth">
          <div className="flex gap-4 w-flex">
            {Array.isArray(projects) &&
              projects
                .filter((p) => p && p.id && p.heroMedia && p.title)
                .map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className="min-w-[250px] md:min-w-[320px] rounded-lg overflow-hidden shadow hover:shadow-md transition group bg-white"
                  >
                    <img
                      src={project.heroMedia}
                      alt={project.title}
                      className="aspect-[16/9] w-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-3 space-y-1">
                      <h3 className="text-base font-semibold text-blue-800 group-hover:underline">
                        {project.title}
                      </h3>
                      {project.tagline && (
                        <p className="text-sm text-gray-500">{project.tagline}</p>
                      )}
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
