import { DiFirebase } from "react-icons/di";
import { FaPython, FaJava, FaReact, FaDatabase, FaAws } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiGit, SiJavascript } from "react-icons/si";

const Skills = ({ theme }) => (
  // Skills Section
  <section id="skills" className="mx-4 md:mx-16 mb-12">
    <h3 className={`text-2xl font-bold mb-6 ${theme.accent}`}>Tech Stack & Skills</h3>
    <div className={`flex flex-wrap gap-8 items-center ${theme.text}`}>
      <div className="flex flex-col items-center">
        <FaPython className="text-4xl text-[#3572A5]" />
        <span className="mt-2 text-sm">Python</span>
      </div>
      <div className="flex flex-col items-center">
        <FaJava className="text-4xl text-[#f89820]" />
        <span className="mt-2 text-sm">Java</span>
      </div>
      <div className="flex flex-col items-center">
        <SiSpringboot className="text-4xl text-[#6db33f]" />
        <span className="mt-2 text-sm">Spring Boot</span>
      </div>
      <div className="flex flex-col items-center">
        <FaReact className="text-4xl text-[#61dbfb]" />
        <span className="mt-2 text-sm">React</span>
      </div>
      <div className="flex flex-col items-center">
        <FaDatabase className="text-4xl text-[#336791]" />
        <span className="mt-2 text-sm">SQL</span>
      </div>
      <div className="flex flex-col items-center">
        <FaAws className="text-4xl text-[#FF9900]" />
        <span className="mt-2 text-sm">AWS</span>
      </div>
      <div className="flex flex-col items-center">
        <SiTailwindcss className="text-4xl text-[#38bdf8]" />
        <span className="mt-2 text-sm">Tailwind</span>
      </div>
      <div className="flex flex-col items-center">
        <SiGit className="text-4xl text-[#f34f29]" />
        <span className="mt-2 text-sm">Git</span>
      </div>
      <div className="flex flex-col items-center">
        <SiJavascript className="text-4xl text-[#f7df1e]" />
        <span className="mt-2 text-sm">JavaScript</span>
      </div>
      <div className="flex flex-col items-center">
        <DiFirebase className="text-4xl text-[#ffca28]" />
        <span className="mt-2 text-sm">Firebase</span>
      </div>
      {/* Add/remove icons and skills as you like! */}
    </div>
  </section>
);

export default Skills;