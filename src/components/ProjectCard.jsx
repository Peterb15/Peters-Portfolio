// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  // Defensive check
  if (!project || !project.id) {
    console.error("Invalid project data:", project);
    return null;
  }

  // Debug logging (remove after fixing)
  console.log("Rendering project:", project.id, project);

  return (
    <Link
      to={`/projects/${project.id}`}
      className="block group rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-white border border-gray-200"
    >
      {/* Hero Image */}
      {project.heroMedia && (
        <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={project.heroMedia}
            alt={project.title || "Project image"}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              console.error("Image failed to load:", project.heroMedia);
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-blue-800 group-hover:underline">
          {project.title || "Untitled Project"}
        </h2>

        {project.tagline && (
          <p className="text-sm text-gray-600 italic line-clamp-2">
            {project.tagline}
          </p>
        )}

        {/* Tags */}
        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Tools & Date */}
        <div className="text-xs text-gray-500 mt-2 flex gap-2 flex-wrap items-center">
          {project.tools && <span>{project.tools}</span>}
          {project.tools && project.date && <span>•</span>}
          {project.date && <span>{project.date}</span>}
        </div>
      </div>
    </Link>
  );
}
