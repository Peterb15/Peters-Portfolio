// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block group rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 w-full"
    >
      <div className="bg-white h-full flex flex-col sm:flex-row w-full">
        {/* Hero Image */}
        {project.media?.hero ? (
          <img
            src={project.media.hero}
            alt={`${project.title} hero`}
            className="w-full sm:w-1/3 h-48 object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full sm:w-1/3 h-48 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-blue-700 group-hover:underline">
            {project.title}
          </h2>
          <p className="text-sm italic text-gray-500 mb-2">{project.status}</p>
          <p className="text-sm text-gray-700 flex-grow">{project.description}</p>

          {/* Tags */}
          {project.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
