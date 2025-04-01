// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
    <Link to={`/projects/${project.id}`} className="block hover:shadow-xl transition">
      <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
        {/* Image Preview (if exists) */}
        {project.media?.images?.[0] && (
          <img
            src={project.media.images[0]}
            alt={project.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
        )}
  
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-sm italic text-gray-500">{project.status}</p>
        <p className="mt-2 text-sm">{project.description}</p>
  
        {/* Tags */}
        {project.tags.length > 0 && (
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
  
        {/* Video (if exists) */}
        {project.media?.video && (
          <div className="mt-4">
            <iframe
              src={project.media.video}
              className="w-full h-64 rounded"
              allowFullScreen
            />
          </div>
        )}
  
        {/* Documents (if any) */}
        {project.media?.docs?.length > 0 && (
          <div className="mt-4">
            {project.media.docs.map((doc, index) => (
              <a
                key={index}
                href={doc}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-blue-600 underline mt-2"
              >
                View Project PDF {index + 1}
              </a>
            ))}
          </div>
        )}
      </div>
    </Link>
    );
}  