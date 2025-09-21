import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaCogs,
  FaCode,
  FaDraftingCompass,
  FaLock,
  FaGlobe,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    name: "React Frontend",
    description: "Dynamic UIs for exceptional user experiences.",
    icon: FaReact,
  },
  {
    name: "Node.js Backend",
    description: "Dynamic UIs for exceptional user experiences.",
    icon: FaNodeJs,
  },
  {
    name: "Express.js Framework",
    description: "Streamlined routing and middleware integration crafted.",
    icon: SiExpress,
  },
  {
    name: "MongoDB Database",
    description: "Flexible, scalable NoSQL database solutions crafted.",
    icon: SiMongodb,
  },
  {
    name: "Full Stack",
    description: "Seamless integration from frontend to backend.",
    icon: FaServer,
  },
  {
    name: "Deployment",
    description: "Seamlessly deploying applications to production.",
    icon: FaCogs,
  },
  {
    name: "Scalable Design",
    description: "Designing systems that can grow with demand.",
    icon: FaDraftingCompass,
  },
  {
    name: "Problem Solving",
    description: "Tackling complex challenges with efficient solutions.",
    icon: FaCode,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS for rapid UI development.",
    icon: SiTailwindcss,
  },
  {
    name: "JavaScript",
    description: "The core language for web development.",
    icon: SiJavascript,
  },
  {
    name: "Frontend Magic",
    description: "Crafting captivating and intuitive user interfaces.",
    icon: FaGlobe,
  },
  {
    name: "Backend Power",
    description: "Building robust and secure server-side applications.",
    icon: FaLock,
  },
];

const Skills = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          Skills/Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg shadow-xl border border-gray-800 transition-transform transform hover:scale-105"
            >
              <div className="text-indigo-400 text-5xl mb-4 flex justify-center">
                <skill.icon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
