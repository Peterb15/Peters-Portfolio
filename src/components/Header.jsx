import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
// Purple-tinted background
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-900/80  backdrop-blur-md shadow-lg' : 'bg-primary-900/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-display font-extrabold text-pb-ivory hover:text-accent-500 transition-colors"
        >
          Peter Burke
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { path: '/projects', label: 'Projects' },
            { path: '/writing', label: 'Writing' },
            { path: '/about', label: 'About' },
            { path: '/resume', label: 'Resume' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-l font-accent font-extrabold transition-all hover:text-accent-500 ${
                location.pathname === path
                  ? 'text-accent-500'
                  : 'text-pb-ivory/100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-pb-ivory"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md border-t border-pb-line">
          <nav className="px-4 py-4 space-y-2">
            {[
              { path: '/projects', label: 'Projects' },
              { path: '/writing', label: 'Writing' },
              { path: '/about', label: 'About' },
              { path: '/resume', label: 'Resume' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-accent font-normal transition-all hover:text-accent-500 ${
                  location.pathname === path
                    ? 'text-accent-500 bg-accent-500/10 rounded'
                    : 'text-pb-ivory/80'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}