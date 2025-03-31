import React from 'react';

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 shadow flex justify-between">
      <Link to="/" className="text-xl font-bold">Peter Burke</Link>
      <nav className="space-x-4">
        <Link to="/projects">Projects</Link>
        <Link to="/writing">Writing</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
