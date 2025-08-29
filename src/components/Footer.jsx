import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 grid gap-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm text-pb-ivory/70">© {new Date().getFullYear()} Peter Burke</span>
          <span className="hidden sm:inline text-pb-ivory/30">•</span>
          <span className="text-sm text-pb-ivory/60">Boulder, CO</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a href="mailto:burke.pete15@gmail.com" className="hover:text-pb-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pb-copper/60 rounded">Email</a>
          <a href="/Resume.pdf" className="hover:text-pb-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pb-copper/60 rounded">Resume</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-pb-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pb-copper/60 rounded">LinkedIn</a>
          <a href="https://github.com/Peterb15" target="_blank" rel="noreferrer" className="hover:text-pb-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pb-copper/60 rounded">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
