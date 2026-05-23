// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects/index";
import ProjectPageLayout from "../components/ProjectPageLayout";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-800 p-8">
        <h1 className="text-2xl font-accent text-pb-ivory">Project not found</h1>
        <Link to="/projects" className="text-accent-500 hover:text-accent-400 underline transition-colors">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 mt-20">
      <Link to="/projects" className="font-display font-extrabold transition-all hover:text-accent-500">
        ← Back to Projects
      </Link>
      <ProjectPageLayout {...project} />
    </div>
  );
}
