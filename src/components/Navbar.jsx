import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] px-4">
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 bg-transparent backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`relative text-gray-300 hover:text-white transition-colors duration-300 ${
              active === link.id
                ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#3533CD] after:rounded transition-all duration-300"
                : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex justify-end items-center bg-transparent backdrop-blur-sm rounded-xl px-4 py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0b0b0b]/40 backdrop-blur sm:hidden rounded-b-xl shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {links.map((link) => (
              <li key={link.id} className="w-full text-center">
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`relative block text-gray-300 hover:text-white text-lg transition-colors ${
                    active === link.id
                      ? "text-white font-semibold after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-1/4 after:h-[2px] after:bg-[#3533CD] after:rounded transition-all duration-300"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
