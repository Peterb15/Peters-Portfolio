import React from 'react';

const WritingCard = ({ entry }) => {
  const {
    id,
    title,
    description,
    format,
    wordCount,
    date,
    excerpt,
    themes,
    status,
    media
  } = entry;

  // Get the PDF link from media.docs array
  const pdfLink = media?.docs?.[0];

  return (
    <article 
      className="group bg-dark-700 rounded-xl border border-pb-line hover:border-accent-500/50 transition-all duration-300 hover:shadow-copper overflow-hidden"
    >
      {/* Optional gradient overlay for hover effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/0 to-accent-900/0 group-hover:from-primary-900/10 group-hover:to-accent-900/10 transition-all duration-500" />
        
        <div className="relative p-6">
          {/* Header with title and format badge */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-display font-extrabold text-pb-ivory group-hover:text-accent-500 transition-colors">
              {title}
            </h3>
            
            {format && (
              <span className="text-xs px-2 py-1 font-decorative bg-primary-600/20 text-primary-400 rounded-full border border-primary-600/30 whitespace-nowrap ml-3">
                {format}
              </span>
            )}
          </div>
          
          {/* Description */}
          <p className="text-sm font-sans text-pb-ivory/60 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Excerpt preview (optional) */}
          {excerpt && (
            <blockquote className="border-l-2 border-accent-500/30 pl-3 mb-4">
              <p className="text-xs font-decorative italic text-pb-ivory/50 line-clamp-2">
                "{excerpt}"
              </p>
            </blockquote>
          )}

          {/* Themes/Tags (optional) */}
          {themes && themes.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {themes.slice(0, 3).map((theme, i) => (
                <span
                  key={i}
                  className="text-xs font-sans px-2 py-1 bg-dark-600 text-pb-ivory/40 rounded border border-pb-line"
                >
                  {theme}
                </span>
              ))}
            </div>
          )}

          {/* Metadata and CTA */}
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-3 text-xs font-accent font-normal text-pb-ivory/40">
              {wordCount && <span>{wordCount.toLocaleString()} words</span>}
              {wordCount && date && <span className="text-pb-ivory/20">•</span>}
              {date && <span>{date}</span>}
              {status && status !== 'completed' && (
                <>
                  <span className="text-pb-ivory/20">•</span>
                  <span className="text-accent-400">{status}</span>
                </>
              )}
            </div>

            {/* PDF Link Button */}
            {pdfLink ? (
              <a 
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-500 text-sm font-sans font-medium hover:text-accent-400 transition-colors group-hover:translate-x-1 transform duration-200 inline-flex items-center gap-1"
                aria-label={`Read ${title}`}
              >
                Read
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            ) : (
              <span className="text-pb-ivory/40 text-sm font-sans italic">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Optional hover accent line */}
      <div className="h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  );
};

export default WritingCard;