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
      <div className="p-8">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/projects" className="text-blue-600 underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Link to="/projects" className="text-blue-600 underline mb-6 block">
        ← Back to Projects
      </Link>
      <ProjectPageLayout {...project} />
    </div>
  );
}
