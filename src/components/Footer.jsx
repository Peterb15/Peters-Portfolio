import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="p-4 text-center bg-white border-t">
      <p>Contact me: <a href="mailto:pebu5033@colorado.edu" className="underline">pebu5033@colorado.edu</a></p>
      <p>
        <a
          href="public/ResumeV3.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          Download Resume
        </a>
      </p>
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Peter Burke</p>
    </footer>
  );
}