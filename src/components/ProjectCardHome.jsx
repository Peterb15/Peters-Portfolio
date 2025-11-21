import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCardHome = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const {
    id,
    title,
    category,
    tagline,
    heroMedia,
    featured,
    tags,
    date
  } = project;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Link
      to={`/projects/${id}`}
      className="group block relative h-full"
      aria-label={`View project: ${title}`}
    >
      <article className="relative h-full overflow-hidden rounded-xl bg-dark-700 border border-pb-line hover:border-accent-500/50 transition-all duration-300 hover:shadow-copper flex flex-col">
        
        {/* Gradient overlay for hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/0 to-accent-900/0 group-hover:from-primary-900/10 group-hover:to-accent-900/10 transition-all duration-500 z-0" />
        
        {/* Featured Badge - Smaller for home page */}
        {featured && (
          <div className="absolute top-2 left-2 z-20">
            <span className="px-2 py-0.5 bg-accent-500/90 text-dark-900 text-xs font-decorative rounded-full shadow-glow">
              ★
            </span>
          </div>
        )}

        {/* Image Container - Slightly taller aspect ratio for home */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary-900/20 to-accent-900/20">
          {heroMedia && !imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-dark-600 animate-pulse" />
              )}
              
              <img
                src={heroMedia}
                alt={title}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            
              {/* Image overlay with title on hover *
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                <div>
                  <p className="text-xs font-decorative text-accent-400 mb-1">{category}</p>
                  <h3 className="text-lg font-display font-extrabold text-white">
                    {title}
                  </h3>
                </div>
              </div> */}
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-accent-600/30 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-10 h-10 text-pb-ivory/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Compact Content for Home */}
        <div className="relative p-4 z-10 flex-grow flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-display font-extrabold text-pb-ivory group-hover:text-accent-500 transition-colors line-clamp-1 mb-2">
            {title}
          </h3>
          
          {/* Tagline */}
          <p className="text-sm font-sans text-pb-ivory/60 line-clamp-2 mb-3 flex-grow">
            {tagline}
          </p>

          {/* Minimal tags - just 2 for home */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.slice(0, 2).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-sans px-2 py-0.5 bg-dark-600/50 text-pb-ivory/40 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="text-xs font-sans text-pb-ivory/30">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Minimal footer */}
          <div className="flex items-center justify-between pt-3 border-t border-pb-line/50">
            <span className="text-xs font-accent font-normal text-pb-ivory/40">
              {date}
            </span>
            
            <span className="text-accent-500 text-sm font-sans font-medium group-hover:text-accent-400 transition-colors inline-flex items-center gap-1">
              <span className="group-hover:translate-x-1 transform transition-transform duration-200">→</span>
            </span>
          </div>
        </div>

        {/* Bottom accent line animation */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </article>
    </Link>
  );
};

export default ProjectCardHome;