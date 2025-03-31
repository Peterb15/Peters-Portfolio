import React from "react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="mb-6 text-lg">
        A collection of major and minor projects that explore storytelling, technology, physical computing, and multimedia.
      </p>
      {/*Project Card Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm italic text-gray-500">{project.status}</p>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}