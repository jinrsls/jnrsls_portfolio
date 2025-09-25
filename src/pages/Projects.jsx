import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, Tailwind CSS, and Vite. Features responsive design and animated sections.",
      thumbnail: "/assets/portfolio-thumb.png",
      media: [
        "/assets/portfolio-home.png",
        "/assets/portfolio-about.png",
        "/assets/portfolio.gif",
      ],
      link: "https://janerosales.com",
    },
    {
      title: "Leave Management System",
      description:
        "A Laravel + Blade + Alpine.js web application for managing personnel leave requests and approvals.",
      thumbnail: "/assets/leave-system-thumb.png",
      media: ["/assets/leave-dashboard.png", "/assets/leave-request.gif"],
      link: "https://example.com",
    },
    {
      title: "Another Project",
      description:
        "A sample project showcasing modern UI design principles and clean code practices.",
      thumbnail: "/assets/sample-thumb.png",
      media: ["/assets/sample1.png", "/assets/sample2.png"],
      link: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="px-8 py-10 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-100 mb-12 tracking-wide text-center">
        PROJECTS
      </h1>

      {/* Card Grid */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/40 backdrop-blur-md border border-gray-700/40 
                       rounded-2xl shadow-lg overflow-hidden 
                       hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]
                
                       transition transform duration-300 flex flex-col h-[440px]"
          >
            {/* Thumbnail */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-56 object-cover border-b border-gray-700/60"
            />

            {/* Info */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-blue-600">
                {project.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto pt-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 text-center px-3 py-2 text-sm font-medium 
                             text-white bg-blue-600 rounded-md 
                             hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.8)] 
                             transition duration-300"
                >
                  View
                </button>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 text-sm font-medium 
                               text-white bg-gray-700 rounded-md 
                               hover:bg-gray-600 hover:shadow-[0_0_20px_rgba(156,163,175,0.7)] 
                               transition duration-300"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-5xl w-full flex flex-col max-h-[90vh] shadow-xl border border-gray-700/60">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-indigo-300 drop-shadow-[0_0_6px_rgba(129,140,248,0.8)]">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-3xl leading-none transition"
              >
                &times;
              </button>
            </div>

            {/* Media */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {selectedProject.media.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                  className="rounded-lg border border-gray-700/60 hover:scale-[1.01] transition"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
