import React from "react";

export default function WritingCard({ entry }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition bg-white">
      <h2 className="text-xl font-semibold text-indigo-700">{entry.title}</h2>
      <p className="text-sm italic text-gray-500">
        {entry.type} • {entry.status}
      </p>
      <p className="mt-2 text-sm text-gray-700">{entry.excerpt}</p>

      {entry.media?.docs?.length > 0 && (
        <div className="mt-3">
          {entry.media.docs.map((doc, i) => (
            <a
              key={i}
              href={doc}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 underline block mt-1"
            >
              View Full PDF {i + 1}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
