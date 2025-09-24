import Sidebar from "./components/Sidebar";
import DarkVeil from "./DarkVeil";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="px-[20px] md:px-[50px] lg:px-[220px] font-mono">
      <div className="flex rounded-lg shadow">
        <div className="fixed inset-0 -z-10">
          <DarkVeil />
        </div>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 min-h-auto text-gray-200 w-full">
          <div className="w-full max-w-3xl mx-auto p-6">
            <section id="about">
              <About />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="certificates">
              <Certificates />
            </section>
            <section id="footer">
              <Footer />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
