import DarkVeil from "./DarkVeil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <DarkVeil />
      </div>

      <main className="mx-4 sm:mx-12 lg:mx-[250px]">
        {/* Navbar */}
        <Navbar />

        <section id="home" className="pt-10 min-h-screen">
          <Home />
        </section>
        <section id="projects" className="pt-10 min-h-screen">
          <Projects />
        </section>
        <section id="experience" className="pt-10 min-h-screen">
          <Experience />
        </section>
        <section id="contact" className="pt-10 min-h-screen">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </main>


    </div>
  );
}

export default App;