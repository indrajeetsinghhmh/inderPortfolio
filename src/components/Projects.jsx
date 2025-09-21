import React from "react";

const projectsData = [
  {
    name: "Devfeed",
    description:
      "A social media platform especially for developers, but open for anyone. It allows users to share thoughts, code snippets, and interact with the community.",
    skills: [
      "React",
      "Tailwind CSS",
      "Node",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Multer",
      "Render",
    ],
    image: "./pro4.png",
    codeLink: "https://github.com/indrajeetsinghhmh/devfeed",
    liveDemoLink: "https://devfeed-e7sl.onrender.com/",
  },
  {
    name: "Hotel Listing Site",
    description:
      "A responsive and feature-rich hotel listing site that allows users to browse and search for hotels, view details, and book rooms. The site provides a seamless user experience from search to booking.",
    skills: ["React", "Node", "Express", "MongoDB"],
    image: "./pro3.png",
    codeLink: "https://github.com/indrajeetsinghhmh/",
    liveDemoLink: "https://github.com/indrajeetsinghhmh/",
  },
  {
    name: "Portfolio",
    description:
      "My personal portfolio showcasing my skills, projects, and a way to connect with me. It is designed to be clean, modern, and fully responsive to showcase my work.",
    skills: ["React", "Tailwind CSS"],
    image: "./pro1.png",
    codeLink: "https://github.com/indrajeetsinghhmh/",
    liveDemoLink: "https://github.com/indrajeetsinghhmh/",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0f0715] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans my-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Featured Projects
          </h2>
          <p className="lg:text-xl text-lg text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in full-stack
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a0f26] rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-purple-500/50"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.name}
                </h3>
                <p className="text-base text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.codeLink}
                    className="flex-1 bg-red-700 text-white font-semibold py-2 px-4 rounded-full text-center hover:bg-red-800 transition duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveDemoLink}
                    className="flex-1 bg-purple-700 text-white font-semibold py-2 px-4 rounded-full text-center hover:bg-purple-800 transition duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
