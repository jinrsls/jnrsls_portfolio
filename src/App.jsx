import Sidebar from "./components/Sidebar";
import DarkVeil from "./DarkVeil";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import WorkExperience from "./pages/WorkExperience";

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
        <main className="flex-1 min-h-auto text-gray-200 w-full md:ml-4">
          <div className="w-full max-w-3xl mx-auto p-6 md:p-8">
            <section id="home">
              <Home />
            </section>
            <section id="experience">
              <WorkExperience />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
