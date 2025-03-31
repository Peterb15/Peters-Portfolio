import React from 'react';

const projects = [
  {
    title: 'The Shattered Lands',
    description: 'A D&D Actual Play web series blending storytelling and media production.',
    video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    image: '/images/shattered-lands-thumbnail.jpg',
    link: 'https://youtube.com/@playerswinties'
  },
  {
    title: 'The Laugh Bucket',
    description: 'Interactive installation using Arduino, layered audio, and feedback systems.',
    image: '/images/laugh-bucket-thumbnail.jpg',
    video: '',
    link: ''
  },
  {
    title: 'Unnatural Selection',
    description: 'Interactive installation using Arduino, layered audio, and user feedback.',
    image: '/images/laugh-bucket-thumbnail.jpg',
    video: '/videos/UnnaturalSelectionFinalVideo.mp4',
    link: 'https://www.youtube.com/watch?v=l0jT3rYz4l0', // can be updated later
  },
  {
    title: 'Wooden Tree Lamp',
    description: 'A blending of form and creativity using 3D Modeling and Laser Cutting.',
    image: [
      '/images/TreeThumbnail.jpg',
      'images/TreeImage1.jpg',
      'images/TreeImage2.jpg',
    ],
    link: '#', // can be updated later
  },
  {
    title: 'Photot (Image Project)',
    description: 'A Photobook created using Photoshop and inspired by the movie Treasure Planet.',
    image: '/images/laugh-bucket-thumbnail.jpg',
    video: '',
    link: '#', // can be updated later
  }
];

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded shadow-md mt-4"
              />
            )}

            {project.video && (
              <div className="mt-4 aspect-video">
                <iframe
                  src={project.video}
                  title={project.title}
                  className="w-full h-full rounded"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline block mt-2"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}