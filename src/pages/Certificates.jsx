import { useState } from "react";
import fcc from "../assets/fcc.png";
import forage from "../assets/forage.jpg";
import Cybersecurity from "../assets/Cybersecurity.jpg";
import UIUX from "../assets/UIUX.jpg";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "April 27, 2025",
      image: fcc,
      verifyLink:
        "https://www.freecodecamp.org/certification/janerosales/responsive-web-design",
    },
    {
      title: "Introduction to Software Engineering Job Simulation",
      issuer: "Forage",
      date: "April 22, 2025",
      image: forage,
      verifyLink:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2sNmYuurxgpFYawco/wJMjCSKFhuj97x6F3_2sNmYuurxgpFYawco_i6ph9iPM77eE3FBvr_1745305886527_completion_certificate.pdf",
    },
    {
      title: "Applied ChatGPT for Cybersecurity",
      issuer: "InfoSec",
      date: "October 19, 2023",
      image: Cybersecurity,
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/P23KEEJYJU4J",
    },
    {
      title: "Introduction to User Experience Design",
      issuer: "Georgia Institute of Technology",
      date: "January 20, 2023",
      image: UIUX,
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/NMEREF7849PJ",
    },
  ];

  return (
    <section id="certificates" className="px-4 py-10 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-white mb-12 tracking-wide glow-title text-center">
        CERTIFICATES
      </h1>

      {/* Card Grid */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group bg-gray-800/40 rounded-2xl overflow-hidden 
                       border border-gray-700 shadow-md 
                       transition transform hover:-translate-y-2 hover:scale-[1.02]
                       hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]
                duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover border-b border-gray-700 
                           transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-blue-600">
                {cert.title}
              </h2>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <span
                className="mt-2 inline-block px-3 py-1 text-xs font-medium 
                               text-gray-300 border border-gray-600 rounded-full"
              >
                {cert.date}
              </span>

              {/* Button pinned at bottom */}
              <div className="mt-6">
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-2 py-2 text-sm font-semibold 
               text-white rounded-lg 
               bg-gray-500 
               transition duration-300 ease-in-out
               hover:bg-blue-600 
               hover:shadow-[0_0_20px_rgba(79,70,229,0.8)]"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
