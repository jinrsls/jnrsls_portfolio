import { Mail, Phone, Linkedin, Github, Gitlab } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-400 border-t border-gray-800/50 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Jane Rosales
          </h3>
          <p className="text-sm">Front-End Developer</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-blue-500 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-blue-500 transition">
                Certificates
              </a>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <div className="flex-1">
            <div className="flex items-center gap-3 py-1">
              <Mail className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <a
                  href="mailto:jane.rosales@email.com"
                  className="text-gray-300 hover:text-blue-500 text-sm"
                >
                  jane.rosales@email.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 py-1">
              <Phone className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <a
                  href="tel:+639123456789"
                  className="text-gray-300 hover:text-blue-500 text-sm"
                >
                  +63 912 345 6789
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 py-1">
              <Linkedin className="w-6 h-6 text-honor-gold flex-shrink-0" />
              <div>
                <a
                  href="https://www.linkedin.com/in/janerosales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 text-sm"
                >
                  linkedin.com/in/janerosales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800/50 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Jane Rosales. All Rights Reserved.
      </div>
    </footer>
  );
}
