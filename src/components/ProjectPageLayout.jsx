// src/components/ProjectPageLayout.jsx
import React from "react";

const ProjectPageLayout = ({
  title,
  tagline,
  role,
  tools,
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
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg text-gray-600 italic">{tagline}</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <span>{role}</span>
          <span>•</span>
          <span>{tools}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        {heroMedia && (
          <div className="mt-6">
            {typeof heroMedia === "string" ? (
              <img src={heroMedia} alt={title} className="rounded-xl shadow" />
            ) : (
              heroMedia
            )}
          </div>
        )}
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700 leading-relaxed">{overview}</p>
      </section>

      {/* My Role */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">My Role</h2>
        <ul className="list-disc list-inside text-gray-700">
          {myRole.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Process Sections */}
      {processSections.map((section, i) => (
        <section key={i}>
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        </section>
      ))}

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gallery.map((item, i) => (
              <div key={i}>
                <img src={item.src} alt={item.alt} className="rounded-xl shadow" />
                {item.caption && (
                  <p className="text-sm text-gray-500 mt-1">{item.caption}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reflection */}
      {reflection && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Reflection</h2>
          <p className="text-gray-700 leading-relaxed">{reflection}</p>
        </section>
      )}

      {/* Credits & Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Credits & Tools</h2>
        <p className="text-gray-700 leading-relaxed">{credits}</p>
        {collaborators && collaborators.length > 0 && (
          <div className="mt-2">
            <h3 className="text-lg font-semibold mt-4">Collaborators</h3>
            <ul className="list-disc list-inside text-gray-700">
              {collaborators.map((person, i) => (
                <li key={i}>
                  <span className="font-medium">{person.name}</span> — {person.role}
                </li>
              ))}
            </ul>
          </div>
        )}
        {externalLinks && (
          <div className="mt-4 text-blue-600 underline">
            {externalLinks.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
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
