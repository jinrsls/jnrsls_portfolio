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
    <section id="certificates" className="px-6 py-10 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-extrabold text-gray-100 mb-12 tracking-wide">
        CERTIFICATES
      </h1>

      {/* Card Grid */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:bg-gray-700/70 transition flex flex-col"
          >
            {/* Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover border-b border-gray-700"
            />

            {/* Info */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-gray-100">
                {cert.title}
              </h2>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <span className="mt-2 inline-block px-3 py-1 text-xs font-medium text-gray-300 border border-gray-600 rounded-full">
                {cert.date}
              </span>

              {/* Buttons pinned at bottom */}
              <div className="mt-auto pt-4">
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition"
                  >
                    Verify
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
