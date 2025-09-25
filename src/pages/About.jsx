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
      className="flex flex-col justify-center px-4 pt-32 pb-10 md:pt-0 min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-left">
        {/* Title */}
        <h1 className="text-3xl mt-4 font-extrabold text-white mb-6 tracking-wide glow-title">
          ABOUT ME
        </h1>

        {/* About Text */}
        <article className="space-y-4">
          <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify glow-body">
            I'm{" "}
            <span className="font-semibold text-blue-600 glow-title">
              Jane Rosales
            </span>
            , a Front-End Developer with over{" "}
            <span className="font-semibold text-blue-600 glow-title">
              2 years of hands-on experience
            </span>{" "}
            in Laravel-based systems, specializing in creating responsive,
            accessible, and user-friendly web interfaces. Proficient in{" "}
            <span className="font-semibold text-blue-600 glow-title">
              HTML, CSS, JavaScript, and PHP
            </span>
            , with strong expertise in{" "}
            <span className="font-semibold text-blue-600 glow-title">
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600 glow-title">
              Bootstrap
            </span>{" "}
            for modern UI development.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify glow-body">
            Experienced in building dynamic applications using{" "}
            <span className="font-semibold text-blue-600 glow-title">
              React
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600 glow-title">
              Vue.js
            </span>
            , with the ability to contribute to{" "}
            <span className="font-semibold text-blue-600 glow-title">
              back-end integrations
            </span>{" "}
            and optimize workflows in{" "}
            <span className="font-semibold text-blue-600 glow-title">
              Agile team environments
            </span>
            . Recognized for improving{" "}
            <span className="text-blue-600 glow-title">
              performance, scalability, and overall user experience
            </span>
            .
          </p>
        </article>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-20 text-start">
        <h2 className="text-2xl font-bold text-white mb-2 glow-title">
          TECH STACK
        </h2>
        <p className="text-sm text-gray-400 mb-8 glow-body">
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
        <h2 className="text-2xl font-bold text-white mb-6 glow-title">
          WHAT I'M DOING
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-gray-800/40 rounded-2xl shadow-md transition transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            <h3 className="text-xl font-semibold text-blue-600 mb-2 glow-title">
              Front-End Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed glow-body">
              Building responsive, accessible, and user-friendly interfaces
              using React, Vue.js, Tailwind CSS, and Bootstrap.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-gray-800/40 rounded-2xl shadow-md transition transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            <h3 className="text-xl font-semibold text-blue-600 mb-2 glow-title">
              Laravel Integration
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed glow-body">
              Developing and maintaining Laravel-based systems with smooth
              integration of front-end and back-end functionalities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-gray-800/40 rounded-2xl shadow-md transition transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            <h3 className="text-xl font-semibold text-blue-600 mb-2 glow-title">
              Performance Optimization
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed glow-body">
              Enhancing web performance, accessibility, and scalability for
              seamless user experiences across devices.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-gray-800/40 rounded-2xl shadow-md transition transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            <h3 className="text-xl font-semibold text-blue-600 mb-2 glow-title">
              Continuous Learning
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed glow-body">
              Exploring emerging technologies and frameworks to bring fresh,
              modern, and effective solutions into projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
