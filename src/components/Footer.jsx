import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 right-0 px-10 py-10 text-sm text-gray-400 z-50">
      <div className="flex flex-col items-end space-y-4 text-3xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3533CD] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3533CD] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:hello@example.com"
          className="hover:text-[#3533CD] transition"
        >
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}
