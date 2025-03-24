import jsIcon from "../assets/skills/jsIcon.svg";
import html5Icon from "../assets/skills/html5Icon.svg";
import css3Icon from "../assets/skills/css3Icon.svg";
import reactIcon from "../assets/skills/reactIcon.svg";
import tailwindIcon from "../assets/skills/tailwindIcon.svg";
import bashIcon from "../assets/skills/bashIcon.svg";
import djangoIcon from "../assets/skills/djangoIcon.svg";
import mysqlIcon from "../assets/skills/mysqlIcon.svg";
import nodeIcon from "../assets/skills/nodeIcon.svg";
import psqlIcon from "../assets/skills/psqlIcon.svg";
import pythonIcon from "../assets/skills/pythonIcon.svg";
import learningIcon from "../assets/skills/learningIcon.svg";

function Skills() {
  const skills = [
    { name: "HTML", icon: html5Icon },
    { name: "CSS", icon: css3Icon },
    { name: "Javascript", icon: jsIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "React", icon: reactIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Django", icon: djangoIcon },
    { name: "Bash", icon: bashIcon },
    { name: "PostgresSQL", icon: psqlIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "More To Come...", icon: learningIcon },
  ];

  return (
    <section
      id="skills"
      className="bg-white py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-semibold mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-xl shadow-md hover:scale-105 transition-transform bg-gray-50"
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
