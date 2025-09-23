import { useState, useEffect } from "react";
import me1 from "../assets/me1.png";
import BlurText from "../components/BlurText";
import { Mail, Phone, Linkedin, Menu, X } from "lucide-react";

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
      {/* Hamburger (mobile only) */}
      <button
        aria-label="Open menu"
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900/80 rounded-lg shadow-lg text-white"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - sticky on md+, overlay drawer on mobile */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-full md:h-screen w-72 md:w-80
          bg-gray-950/95 md:bg-gray-950/40 text-white
          border-r border-gray-800/40
          shadow-[4px_0_10px_rgba(0,0,0,0.5)]
          transform transition-transform duration-300 z-50
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:flex md:flex-col`}
      >
        {/* Close button (mobile) */}
        <button
          aria-label="Close menu"
          className="md:hidden absolute top-4 right-4 p-2 rounded-lg bg-gray-900/80 hover:bg-gray-800 text-white z-50"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="py-8 flex flex-col p-4 h-full">
          {/* Profile */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={me1}
              alt="Profile"
              className="w-40 h-40 rounded-full mb-4 border-2 border-gray-900 object-cover"
            />
            <h2 className="text-3xl font-semibold">
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

          {/* Contact / Info */}
          <div className="space-y-6 p-1 flex-1">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500">Email</p>
                <a
                  href="mailto:jane.rosales@email.com"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  jane.rosales@email.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500">Phone</p>
                <a
                  href="tel:+639123456789"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  +63 912 345 6789
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/janerosales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  linkedin.com/in/janerosales
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto border-t border-gray-800 text-center text-xs text-gray-500 pt-4">
            <p>© {new Date().getFullYear()} Jane Rosales</p>
            <p className="mt-1">All Rights Reserved</p>
          </footer>
        </div>
      </aside>
    </>
  );
}
