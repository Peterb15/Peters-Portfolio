import React from "react";
import { projects } from "../data/projects/index";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="mb-6 text-lg">
        A collection of major and minor projects that explore storytelling, technology, physical computing, and multimedia.
      </p>
      {/*Project Card Components */}
      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

    </div>
  );
}