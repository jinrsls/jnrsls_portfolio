import LogoLoop from "../components/LogoLoop";
import {
  SiHtml5,
  SiCss3,
  SiPhp,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";

export default function About() {
  const skillLogos = [
    { node: <SiHtml5 color="#E34F26" size={48} />, title: "HTML5" },
    { node: <SiCss3 color="#1572B6" size={48} />, title: "CSS3" },
    { node: <SiPhp color="#777BB4" size={48} />, title: "PHP" },
    { node: <SiLaravel color="#FF2D20" size={48} />, title: "Laravel" },
    { node: <SiBootstrap color="#7952B3" size={48} />, title: "Bootstrap" },
    {
      node: <SiTailwindcss color="#06B6D4" size={48} />,
      title: "Tailwind CSS",
    },
    { node: <SiGit color="#F05032" size={48} />, title: "Git" },
    { node: <SiMysql color="#4479A1" size={48} />, title: "MySQL" },
    { node: <SiReact color="#61DAFB" size={48} />, title: "React" },
    { node: <SiVuedotjs color="#42B883" size={48} />, title: "Vue.js" },
  ];

  return (
    <section
      id="about"
      className="h-auto flex flex-col justify-center px-6 py-20 min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">
        {/* Title */}
        <h1 className="text-2xl font-extrabold text-gray-100 mb-6 tracking-wide">
          ABOUT ME
        </h1>

        {/* About Text */}
        <article className="space-y-4">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
            I'm{" "}
            <span className="font-semibold text-indigo-300">Jane Rosales</span>,
            a Front-End Developer with over{" "}
            <span className="font-semibold text-indigo-300">
              2 years of hands-on experience
            </span>{" "}
            in Laravel-based systems, specializing in creating responsive,
            accessible, and user-friendly web interfaces. Proficient in{" "}
            <span className="font-semibold">
              HTML, CSS, JavaScript, and PHP
            </span>
            , with strong expertise in{" "}
            <span className="font-semibold">Tailwind CSS</span> and{" "}
            <span className="font-semibold">Bootstrap</span> for modern UI
            development.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
            Experienced in building dynamic applications using{" "}
            <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">Vue.js</span>, with the ability to
            contribute to{" "}
            <span className="font-semibold">back-end integrations</span> and
            optimize workflows in{" "}
            <span className="font-semibold">Agile team environments</span>.
            Recognized for improving{" "}
            <span className="text-indigo-300">
              performance, scalability, and overall user experience
            </span>
            .
          </p>
        </article>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-20 text-start">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">TECH STACK</h2>
        <p className="text-sm text-gray-400 mb-8">
          These are the technologies I have worked with throughout my journey.
        </p>

        {/* Skills Logo Loop */}
        <LogoLoop
          logos={skillLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0b0b0b"
          ariaLabel="Technical skills logos"
        />
      </div>

      {/* What I'm Doing Section */}
      <div className="mt-20 text-start">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">
          WHAT I'M DOING
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-gray-800/40 rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-lg hover:bg-gray-700/60">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Front-End Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building responsive, accessible, and user-friendly interfaces
              using React, Vue.js, Tailwind CSS, and Bootstrap.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-gray-800/40 rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-lg hover:bg-gray-700/60">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Laravel Integration
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Developing and maintaining Laravel-based systems with smooth
              integration of front-end and back-end functionalities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-gray-800/40 rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-lg hover:bg-gray-700/60">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Performance Optimization
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enhancing web performance, accessibility, and scalability for
              seamless user experiences across devices.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-gray-800/40 rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-lg hover:bg-gray-700/60">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Continuous Learning
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring emerging technologies and frameworks to bring fresh,
              modern, and effective solutions into projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
