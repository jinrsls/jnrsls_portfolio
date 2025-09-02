import LogoLoop from "../components/LogoLoop";
import BlurText from "../components/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

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

export default function Home() {
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
    <section className="h-screen flex flex-col justify-center px-6 bg-transparent">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <header className="space-y-6">
          <h5 className="text-xl font-medium text-gray-300">
            Hi, I’m{" "}
            <span className="font-bold text-indigo-100 tracking-wide">
              Jane Rosales
            </span>
          </h5>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-100">
            <BlurText
              text="Front-End Developer"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h1>

          <h2 className="text-lg md:text-xl font-medium text-indigo-200 tracking-wide">
            Crafting Clean & Modern Interfaces
          </h2>
        </header>

        {/* Right Section */}
        <article>
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed text-justify">
            Specialized in modern front-end frameworks and UI design to build responsive, visually engaging interfaces. Focused on enhancing accessibility, performance, and overall user satisfaction.
          </p>
        </article>
      </div>

      {/* Skills Logo Loop */}
      <div className="mt-16">
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
    </section>
  );
}
