import React from "react";
import projects from "../data/projects/index";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  // Debug logging
  console.log("Projects data:", projects);
  console.log("Number of projects:", projects?.length);

  return (
    <div className="p-20 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black text-pb-ivory mb-4">
            Projects
          </h1>
          <p className="text-lg font-accent font-normal text-pb-ivory/70 max-w-2xl mx-auto">
            A collection of projects spanning interactive experiences, 
            multimedia storytelling, and experimental design.
          </p>
        </div>

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