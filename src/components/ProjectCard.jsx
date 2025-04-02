// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block group rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-white"
    >
      {/* Hero Image */}
      {project.heroMedia && (
        <img
          src={project.heroMedia}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Card Content */}
      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold text-blue-800 group-hover:underline">
          {project.title}
        </h2>

        {project.tagline && (
          <p className="text-sm text-gray-600 italic">{project.tagline}</p>
        )}
      {/* Tags */}
      {project.tags && (
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

        {/* Optional: Show tools or date */}
        <div className="text-xs text-gray-400 mt-1 flex gap-2">
          {project.tools && <span>{project.tools}</span>}
          {project.date && <span>• {project.date}</span>}
        </div>
      </div>
    </Link>
  );
}
