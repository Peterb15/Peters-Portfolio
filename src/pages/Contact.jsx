import React from "react";

export default function Contact() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="mb-4">
        Want to collaborate, ask a question, or just say hi? Reach out!
      </p>
      <ul className="space-y-2">
        <li><strong>Email:</strong> <a href="mailto:pebu5033@colorado.edu" className="text-blue-600 underline">pebu5033@colorado.edu</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/PeterBurke15" target="_blank" className="text-blue-600 underline">PeterBurke15</a></li>
        <li><strong>Portfolio:</strong> <a href="https://peterburke.co" target="_blank" className="text-blue-600 underline">peterburke.co</a></li>
      </ul>
    </div>
  );
}