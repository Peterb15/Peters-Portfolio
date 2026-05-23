// src/components/ProjectPageLayout.jsx
import React from "react";

const ProjectPageLayout = ({
  title,
  tagline,
  role,
  tags,
  date,
  heroMedia,
  overview,
  myRole,
  processSections,
  gallery,
  reflection,
  credits,
  collaborators,
  externalLinks,
  tools,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-pb-ivory">{title}</h1>
        <p className="text-lg text-dark-300 italic">{tagline}</p>
        <div className="flex justify-center space-x-4 text-sm text-dark-400">
          <span>{role}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        {heroMedia && (
          <div className="mt-6 w-full">
            {typeof heroMedia === "string" ? (
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl shadow">
                <img
                  src={heroMedia}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              heroMedia
            )}
          </div>
        )}
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-pb-ivory mb-2">Overview</h2>
        <p className="text-dark-300 leading-relaxed">{overview}</p>
      </section>

      {/* My Role */}
      {Array.isArray(myRole) && myRole.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-pb-ivory mb-2">My Role</h2>
          <ul className="list-disc list-inside space-y-1 text-dark-300">
            {myRole.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Process Sections */}
      {Array.isArray(processSections) && processSections.length > 0 && processSections.map((section, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-2xl font-semibold text-pb-ivory mb-2">{section.title}</h2>
          {section.content.split("\n\n").map((para, j) => (
            <p key={j} className="text-dark-300 leading-relaxed mb-4">{para}</p>
          ))}
          <hr className="my-8 border-t border-dark-600" />
        </section>
      ))}

      {/* Gallery */}
      {Array.isArray(gallery) && gallery.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-pb-ivory mb-2">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gallery.map((item, i) => (
              <div key={i}>
                {item.type === "video" ? (
                  <div className="aspect-video w-full">
                    <iframe
                      src={item.src}
                      title={item.title || `Project Video ${i + 1}`}
                      className="w-full h-full rounded-xl shadow"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt || `Project Image ${i + 1}`}
                    className="rounded-xl shadow"
                  />
                )}
                {item.caption && (
                  <p className="text-sm text-dark-400 mt-1">{item.caption}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reflection */}
      {reflection && (
        <section>
          <h2 className="text-2xl font-semibold text-pb-ivory mb-2">Reflection</h2>
          <p className="text-dark-300 leading-relaxed">{reflection}</p>
        </section>
      )}

      {/* Credits & Tools */}
      <section>
        <h2 className="text-2xl font-semibold text-pb-ivory mb-2">Credits & Tools</h2>
        <p className="text-dark-300 leading-relaxed">{credits}</p>

        {Array.isArray(collaborators) && collaborators.length > 0 && (
          <div className="mt-2">
            <h3 className="text-lg font-semibold text-pb-ivory mt-4">Collaborators</h3>
            <ul className="list-disc list-inside text-dark-300 space-y-1">
              {collaborators.map((person, i) => (
                <li key={i}>
                  <span className="font-medium text-pb-ivory">{person.name}</span> — {person.role}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tools && (
          <>
            <h3 className="text-lg font-semibold text-pb-ivory mt-4">Tools</h3>
            <p className="text-dark-300 leading-relaxed">{tools}</p>
          </>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <>
            <h3 className="text-lg font-semibold text-pb-ivory mt-4">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-dark-600 text-pb-ivory/60 text-sm px-3 py-1 rounded-full border border-dark-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}

        {Array.isArray(externalLinks) && externalLinks.length > 0 && (
          <div className="mt-4 space-y-1">
            {externalLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent-500 hover:text-accent-400 transition-colors underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectPageLayout;
