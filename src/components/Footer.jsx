import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-pb-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-extrabold text-pb-ivory mb-3">Peter Burke</h3>
            <p className="text-sm font-decorative text-pb-ivory/60">
              Designer • Storyteller • Technologist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-accent font-bold text-pb-ivory mb-3">Explore</h4>
            <ul className="space-y-2">
              {['Projects', 'Writing', 'About', 'Resume'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase()}`}
                    className="text-sm font-sans text-pb-ivory/60 hover:text-accent-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-accent font-bold text-pb-ivory mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:burke.pete15@gmail.com"
                  className="text-sm font-sans text-pb-ivory/60 hover:text-accent-500 transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/PeterBurke15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-pb-ivory/60 hover:text-accent-500 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-pb-line text-center">
          <p className="text-xs font-decorative text-pb-ivory/40">
            © {new Date().getFullYear()} Peter Burke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}