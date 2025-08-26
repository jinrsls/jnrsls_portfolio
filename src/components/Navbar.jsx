import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] px-4">
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 bg-transparent backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`relative text-gray-300 hover:text-white transition-colors ${
              active === link.id
                ? "text-[white] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#3533CD] after:rounded"
                : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
