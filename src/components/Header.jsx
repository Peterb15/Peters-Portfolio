import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/projects", label: "Projects" },
    { to: "/writing", label: "Writing" },
    { to: "/about", label: "About" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  const linkClasses = ({ isActive }) => `
    relative px-4 py-2 text-sm font-medium transition-colors duration-200
    ${isActive 
      ? 'text-primary-600' 
      : 'text-dark-700 hover:text-primary-600'
    }
    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
    after:bg-primary-600 after:transition-transform after:duration-200
    ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
  `;

  return (
    <header 
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-200
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-soft' 
          : 'bg-white'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold text-dark-900 hover:text-primary-600 transition-colors"
          >
            Peter Burke
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClasses}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-dark-700 hover:bg-dark-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="px-4 pb-4 space-y-1 bg-white border-t border-dark-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `
                block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-dark-700 hover:bg-dark-50'
                }
              `}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}