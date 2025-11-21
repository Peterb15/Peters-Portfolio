import React from "react";
import { writing } from "../data/writing";
import WritingCard from "../components/WritingCard";

export default function Writing() {
  return (
    <div className="pt-24 pb-16 bg-dark-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black text-pb-ivory mb-4">
            Creative Writing
          </h1>
          <p className="text-lg font-accent font-normal text-pb-ivory/70 max-w-3xl mx-auto">
            Stories, narrative experiments, and worldbuilding exercises
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {writing.map((entry) => (
            <WritingCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}