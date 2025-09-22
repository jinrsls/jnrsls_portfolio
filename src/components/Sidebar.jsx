import me1 from "../assets/me1.png";
import BlurText from "../components/BlurText";
import { Mail, Phone, Linkedin } from "lucide-react";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function Sidebar() {
  return (
    <aside className="py-8 sticky top-0 h-screen w-80 text-white flex flex-col p-4 shadow-[4px_0_10px_rgba(0,0,0,0.5)]">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={me1}
          alt="Profile"
          className="w-40 h-40 rounded-full mb-4 border-2 border-gray-900"
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
        <p className="text-md text-gray-400">
          <BlurText
            text="Front-End Developer"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-800 mb-6" />

      {/* Contact / Info Section */}
      <div className="space-y-6 p-5">
        {/* Email */}
        {/* Contact / Info Section */}
        <div className="space-y-6">
          {/* Email */}
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

          {/* Phone */}
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

          {/* LinkedIn */}
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
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Jane Rosales</p>
        <p className="mt-1">All Rights Reserved</p>
      </footer>
    </aside>
  );
}
