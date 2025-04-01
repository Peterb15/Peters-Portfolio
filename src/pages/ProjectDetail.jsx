// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/projects" className="text-blue-600 underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link to="/projects" className="text-blue-600 underline mb-4 block">
        ← Back to Projects
      </Link>

      {/* Hero Image */}
      {project.media?.hero && (
        <img
          src={project.media.hero}
          alt={`${project.title} hero`}
          className="w-full max-h-[500px] object-contain rounded-xl shadow mb-6 bg-gray-100"
        />
      )}

      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="italic text-gray-500 mb-4">{project.status}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="mb-6 text-lg">{project.description}</p>

      {/* Document Link Summary */}
      {project.media?.docs?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Documentation</h2>
          <p className="text-sm text-gray-700 mb-2">
            Supporting files, design briefs, or additional documentation.
          </p>
          {project.media.docs.map((doc, i) => (
            <a
              key={i}
              href={doc}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-blue-600 underline mb-1"
            >
              View PDF {i + 1}
            </a>
          ))}
        </div>
      )}

      {/* Image Gallery */}
      {project.media?.gallery?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {project.media.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} gallery ${i + 1}`}
              className="rounded shadow hover:scale-105 transition"
            />
          ))}
        </div>
      )}

      {/* Video Embed */}
      {project.media?.video && (
        <div className="mb-6">
          <iframe
            src={project.media.video}
            className="w-full h-64 rounded"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
