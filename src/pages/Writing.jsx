import React from "react";
import { writing } from "../data/writing";
import WritingCard from "../components/WritingCard";

export default function Writing() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Creative Writing</h1>
      <p className="mb-6 text-lg max-w-3xl">
        These pieces reflect my interest in narrative structure, voice, worldbuilding, and experimental storytelling. Ranging from short fiction to fictional journals and lore.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {writing.map((entry) => (
          <WritingCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}