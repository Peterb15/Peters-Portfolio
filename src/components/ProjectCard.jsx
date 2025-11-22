import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = React.memo(({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const {
    id,
    title,
    category,
    tagline,
    heroMedia,
    tags,
    date,
    status,
    featured,
    role,
    tools
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
      className="group block relative"
      aria-label={`View project: ${title}`}
    >
      <article className="relative overflow-hidden rounded-xl bg-dark-700 border border-pb-line hover:border-accent-500/50 transition-all duration-300 hover:shadow-copper">
        
        {/* Gradient overlay for hover effect - matching WritingCard */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/0 to-accent-900/0 group-hover:from-primary-900/10 group-hover:to-accent-900/10 transition-all duration-500 z-0" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2 py-1 bg-accent-500 text-dark-900 text-xs font-decorative rounded-full shadow-glow flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
          </div>
        )}

        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary-900/20 to-accent-900/20">
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
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-accent-600/30 flex items-center justify-center">
              <svg className="w-12 h-12 text-pb-ivory/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative p-6 z-10">
          {/* Header with title and category badge */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-display font-extrabold text-pb-ivory group-hover:text-accent-500 transition-colors line-clamp-2 flex-grow mr-2">
              {title}
            </h3>
            
            <span className={`text-xs px-2 py-1 rounded-full font-decorative whitespace-nowrap flex-shrink-0 ${
              category === 'major' 
                ? 'bg-primary-600/20 text-primary-400 border border-primary-600/30'
                : 'bg-accent-600/20 text-accent-400 border border-accent-600/30'
            }`}>
              {category}
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-sm font-sans text-pb-ivory/60 line-clamp-2 mb-3">
            {tagline}
          </p>

          {/* Role (optional) */}
          {role && (
            <p className="text-xs font-accent font-normal text-pb-ivory/50 mb-3">
              <span className="text-pb-ivory/40">Role:</span> <span className="text-accent-400">{role}</span>
            </p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-sans px-2 py-1 bg-dark-600 text-pb-ivory/40 rounded border border-pb-line"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-xs font-sans px-2 py-1 text-pb-ivory/40">
                  +{tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Footer with metadata and CTA */}
          <div className="flex items-end justify-between pt-3 border-t border-pb-line">
            <div className="flex items-center gap-3 text-xs font-accent font-normal text-pb-ivory/40">
              {date && <span>{date}</span>}
              {status && status !== 'completed' && (
                <>
                  {date && <span className="text-pb-ivory/20">•</span>}
                  <span className="text-accent-400">{status}</span>
                </>
              )}
              {tools && (
                <>
                  <span className="text-pb-ivory/20">•</span>
                  <span className="text-pb-ivory/30 truncate max-w-[120px]" title={tools}>
                    {tools}
                  </span>
                </>
              )}
            </div>

            {/* View Project CTA */}
            <span className="text-accent-500 text-sm font-sans font-medium group-hover:text-accent-400 transition-colors flex items-center gap-1 group-hover:translate-x-1 transform duration-200">
              View
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Bottom accent line animation - matching WritingCard */}
        <div className="h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </article>
    </Link>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;