export default function WorkExperience() {
  const experiences = [
    {
      role: "Front-End Developer (IT Personnel - Part Time)",
      company: "Armed Forces of the Philippines - Camp Aguinaldo, Quezon City",
      date: "January 2024 - September 2025",
    },
    {
      role: "Internship",
      company: "Sangguniang Panlungsod - Butuan City Hall Complex",
      date: "July 2022 - August 2022",
    },
    {
      role: "Bachelor of Science in Information Technology",
      company: "Caraga State University - Butuan City",
      date: "July 2019 - July 2023",
    },
    {
      role: "Hello World!",
      company: "I wrote my first code.",
      date: "July 2019",
    },
  ];

  return (
    <section id="experience" className="px-4 py-10 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-100 mb-12 text-center">
        EXPERIENCE
      </h1>

      {/* Timeline */}
      <div className="relative border-l border-gray-700 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Marker */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-900 border border-gray-700 rounded-full">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            </span>

            {/* Card with glow */}
            <div
              className="bg-gray-800/50 rounded-xl shadow-md overflow-hidden 
              transition transform hover:-translate-y-1 
              hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] p-5"
            >
              <h2 className="text-lg font-semibold text-blue-600">
                {exp.role}
              </h2>
              <p className="text-sm text-gray-400 mt-1">{exp.company}</p>
              <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-gray-300 border border-gray-600 rounded-full">
                {exp.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
