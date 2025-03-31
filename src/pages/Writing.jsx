import React from "react";

export default function Writing() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Creative Writing</h1>
      <p className="mb-6 text-lg">
        A selection of short stories, speculative fiction, and experimental narratives I've created over time.
      </p>
      {/* Writing samples (will pull from a data file later) */}
      <div className="space-y-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Cries of Insanity</h2>
          <p className="text-sm italic text-gray-600">Completed</p>
          <p className="mt-2">A psychological exploration into unreliable narration and creeping dread.</p>
        </div>
      </div>
    </div>
  );
}