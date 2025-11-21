import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeaturedProjectsCarousel from '../components/FeaturedProjectsCarousel';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="pt-16 md:pt-20 bg-dark-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs with Parallax */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
              animationDelay: '1s',
            }}
          />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#C47C2D 1px, transparent 1px), linear-gradient(90deg, #C47C2D 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent-500 rounded-full animate-float opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Badge with shimmer effect */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/50 backdrop-blur-sm shadow-purple-glow text-sm font-medium text-pb-copper border border-accent-500/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <svg className="w-4 h-4 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Designer • Storyteller • Technologist</span>
            </div>

            {/* Main Heading with staggered animation */}
            <div className="space-y-4">
              <h1 
                className={`text-4xl sm:text-5xl md:text-7xl font-bold leading-tight transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="text-pb-ivory">Hi, I'm </span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                    Peter Burke
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-500 blur-lg opacity-30 animate-pulse-slow" />
                </span>
              </h1>
            </div>

            {/* Subheading with fade in */}
            <p 
              className={`text-base sm:text-lg text-pb-ivory/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I work at the intersection of technology and the arts—crafting
              <span className="font-semibold text-accent-500"> interactive installations</span>,
              <span className="font-semibold text-accent-500"> narrative-driven games</span>, and
              <span className="font-semibold text-accent-500"> multimedia experiences</span> that blend
              creative vision with technical precision.
            </p>

            {/* CTA Buttons with hover effects */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link 
                to="/projects" 
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-pb-ivory rounded-lg font-semibold overflow-hidden transition-all hover:shadow-purple-glow hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link 
                to="/about" 
                className="group px-8 py-4 bg-dark-700/50 backdrop-blur-sm text-pb-ivory rounded-lg font-semibold border border-accent-500/30 hover:border-accent-500 hover:bg-dark-700 transition-all hover:shadow-copper hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Learn More About Me
                </span>
              </Link>
            </div>

            {/* Stats with counter animation effect */}
            <div 
              className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { value: '7+', label: 'Projects' },
                { value: '2+', label: 'Years Experience' },
                { value: '25+', label: 'Collaborators' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center group cursor-default"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-pb-ivory/60 mt-2 group-hover:text-pb-ivory/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
              <div className="flex flex-col items-center gap-2 text-pb-ivory/40">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-dark-700 relative">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pb-ivory">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-pb-ivory/70 max-w-2xl mx-auto">
              Explore my recent work across interactive installations, game design, and multimedia storytelling.
            </p>
          </div>
          <FeaturedProjectsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDNDdDMkQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtMTBoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-pb-ivory">
            Let's Create Something{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg text-pb-ivory/70 max-w-2xl mx-auto">
            I'm always interested in collaborating on projects that push creative and technical boundaries.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-dark-900 rounded-lg font-semibold hover:bg-accent-400 transition-all shadow-copper hover:shadow-glow hover:scale-105"
          >
            Get In Touch
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}