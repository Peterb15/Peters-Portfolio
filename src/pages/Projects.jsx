import React from "react";
import projects from "../data/projects/index";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  // Debug logging
  console.log("Projects data:", projects);
  console.log("Number of projects:", projects?.length);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Projects</h1>
      <p className="mb-6 text-lg text-gray-700">
        A collection of projects exploring storytelling, technology, physical computing, and multimedia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects && projects.length > 0 ? (
          projects.map((project) => {
            // Debug each project
            console.log("Mapping project:", project?.id);
            return <ProjectCard key={project.id} project={project} />;
          })
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-600">No projects found.</p>
            <p className="text-sm text-gray-400 mt-2">
              Check console for debugging info.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}