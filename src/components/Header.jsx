import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Peter Burke</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li>
            <a
              href="public/ResumeV3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}