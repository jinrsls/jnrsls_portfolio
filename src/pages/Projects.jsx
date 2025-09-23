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
      link: "dsdsd",
    },
    {
      title: "Leave Management System",
      description:
        "A Laravel + Blade + Alpine.js web application for managing personnel leave requests and approvals.",
      thumbnail: "/assets/leave-system-thumb.png",
      media: ["/assets/leave-dashboard.png", "/assets/leave-request.gif"],
      link: "dsdsd",
    },
    {
      title: "Leave Management System",
      description:
        "A Laravel + Blade + Alpine.js web application for managing personnel leave requests and approvals.",
      thumbnail: "/assets/leave-system-thumb.png",
      media: ["/assets/leave-dashboard.png", "/assets/leave-request.gif"],
      link: "dsdsd",
    },
  ];

  return (
    <section id="projects" className="px-6 py-10 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-extrabold text-gray-100 mb-12 tracking-wide">
        PROJECTS
      </h1>

      {/* Card Grid */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:bg-gray-700/70 transition flex flex-col h-[420px]"
          >
            {/* Thumbnail */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-56 object-cover border-b border-gray-700"
            />

            {/* Info */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-gray-100">
                {project.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                {project.description}
              </p>



              {/* Buttons */}
              <div className="flex gap-3 pt-5">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 text-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
                >
                  View
                </button>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing screenshots/gifs */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-lg p-6 max-w-4xl w-full flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Media (scrollable area) */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {selectedProject.media.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                  className="rounded-lg border border-gray-700"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
