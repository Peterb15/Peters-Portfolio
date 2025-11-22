import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const FeaturedProjectsCarousel = React.memo(({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Filter for featured projects or take first 3-4
  const featuredProjects = projects?.filter(p => p.featured) || [];
  const displayProjects = featuredProjects.length > 0 
    ? featuredProjects 
    : projects?.slice(0, 4) || [];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || displayProjects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, displayProjects.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 
      ? displayProjects.length - 1 
      : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % displayProjects.length;
    goToSlide(newIndex);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (displayProjects.length === 0) {
    return null;
  }

  // Single slide view for mobile/tablet
  const SingleSlideView = () => (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {displayProjects.map((project, index) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <Link
                to={`/projects/${project.id}`}
                className="group block relative"
                aria-label={`View project: ${project.title}`}
              >
                <article className="relative overflow-hidden rounded-xl bg-dark-700 border border-pb-line hover:border-accent-500/50 transition-all duration-300 hover:shadow-copper">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/0 to-accent-900/0 group-hover:from-primary-900/10 group-hover:to-accent-900/10 transition-all duration-500 z-0" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-accent-500 text-dark-900 text-sm font-decorative rounded-full shadow-glow flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Large Image */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary-900/20 to-accent-900/20">
                    {project.heroMedia ? (
                      <img
                        src={project.heroMedia}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <svg className="w-16 h-16 text-pb-ivory/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-xs font-decorative text-accent-400 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-sans text-pb-ivory/80 line-clamp-2 mb-4">
                      {project.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent-400 text-sm font-medium group-hover:text-accent-300 transition-colors">
                      View Project
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {displayProjects.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark-800/80 backdrop-blur-sm text-pb-ivory hover:bg-dark-700 hover:text-accent-400 transition-all hover:scale-110 z-20"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark-800/80 backdrop-blur-sm text-pb-ivory hover:bg-dark-700 hover:text-accent-400 transition-all hover:scale-110 z-20"
            aria-label="Next project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {displayProjects.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {displayProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-accent-500 w-8' 
                  : 'bg-pb-ivory/30 hover:bg-pb-ivory/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  // Grid view for desktop
  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProjects.slice(0, 6).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );

  return (
    <section className="py-8">

      {/* Show carousel on mobile/tablet, grid on desktop */}
      <div className="block lg:hidden">
        <SingleSlideView />
      </div>
      <div className="hidden lg:block">
        <GridView />
      </div>

      {/* View All Projects Link */}
      <div className="text-center mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-dark-700 text-pb-ivory border border-accent-500/30 rounded-lg font-sans font-medium hover:bg-dark-600 hover:border-accent-500/50 transition-all group"
        >
          View All Projects
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
});

FeaturedProjectsCarousel.displayName = 'FeaturedProjectsCarousel';

export default FeaturedProjectsCarousel;