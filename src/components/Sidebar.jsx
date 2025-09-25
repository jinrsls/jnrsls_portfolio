import { useState, useEffect } from "react";
import me1 from "../assets/me1.png";
import BlurText from "../components/BlurText";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // lock body scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ===== MOBILE HEADER ===== */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-gray-950/95 border-b border-gray-800/40 shadow-lg z-50">
        <div className="flex items-center gap-4 px-8 py-3">
          {/* Profile Image */}
          <img
            src={me1}
            alt="Profile"
            className="w-32 h-32 rounded-md border-2 border-gray-800 object-cover"
          />

          {/* Name + Title + Centered Actions */}
          <div className="flex flex-col flex-1 items-center text-center">
            <h2 className="text-2xl font-semibold text-white">Jane Rosales</h2>
            <p className="text-sm text-gray-400">Front-End Developer</p>

            {/* Icons Row */}
            <div className="flex justify-center items-center gap-3 mt-2">
              {/* Email */}
              <a
                href="mailto:janerosales04@gmail.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>

              {/* Phone */}
              <a
                href="tel:+639925658349"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jane-rosales-537038214/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Resume Button */}
            <div className="mt-2">
              <a
                href="/Resume.pdf"
                download
                className="inline-block px-4 py-2 text-xs font-semibold 
          text-white rounded-lg 
          bg-gray-500 
          transition duration-300 ease-in-out
          hover:bg-blue-600 
          hover:shadow-[0_0_15px_rgba(79,70,229,0.8)]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside
        className={`hidden md:flex flex-col sticky top-0 left-0 h-screen w-80
          bg-gray-950/40 text-white
          border-r border-gray-800/40
          shadow-[4px_0_10px_rgba(0,0,0,0.5)]
          transition-transform duration-300 z-50`}
      >
        <div className="py-8 flex flex-col p-4 h-full">
          {/* Profile */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={me1}
              alt="Profile"
              className="w-40 h-40 rounded-md mb-4 border-2 border-gray-900 object-cover"
            />
            <h2 className="text-3xl font-semibold text-blue-500">
              <BlurText
                text="Jane Rosales"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </h2>

            <div className="text-md text-gray-400">
              <BlurText
                text="Front-End Developer"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>

          <hr className="border-t border-gray-800 mb-6" />

          {/* Contact Info */}
          <div className="space-y-6 p-1 flex-1">
            {/* Address */}
            <div className="flex items-center p-1 gap-2">
              <MapPin className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500">Address</p>
                <p className="text-gray-300 text-sm hover:text-blue-500">
                  Crame Avenue, Camp General Emilio Aguinaldo Quezon City
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center p-1 gap-2">
              <Mail className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500">Email</p>
                <a
                  href="mailto:janerosales04@gmail.com"
                  className="text-gray-300 hover:text-blue-500 text-sm"
                >
                  janerosales04@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center p-1 gap-2">
              <Phone className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500">Phone</p>
                <a
                  href="tel:+639925658349"
                  className="text-gray-300 hover:text-blue-500 text-sm"
                >
                  +639925658349
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center p-1 gap-2">
              <Linkedin className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/jane-rosales-537038214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-blue-500"
                >
                  linkedin.com/in/jane-rosales-537038214/
                </a>
              </div>
            </div>
          </div>

          {/* Resume Button */}
          <div className="p-4 mt-auto">
            <a
              href="/Resume.pdf"
              download
              className="block w-full text-center px-4 py-3 text-sm font-semibold 
               text-white rounded-lg 
               bg-gray-500 
               transition duration-300 ease-in-out
               hover:bg-blue-600 
               hover:shadow-[0_0_20px_rgba(79,70,229,0.8)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
