import React from "react";

const About = () => {
  return (
    <section className=" text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            About Me
          </h2>
          <p className="lg:text-xl text-lg text-gray-300 max-w-3xl mx-auto">
            I am a dedicated software developer with over 5 years of experience
            in building scalable web applications. My expertise lies in React,
            Node.js, and modern JavaScript frameworks. I love turning complex
            problems into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center text-center p-6 bg-[#1a0f26] rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-purple-500/50">
            <span className="text-5xl text-purple-400">🎯</span>
            <h3 className="mt-4 text-xl font-bold text-white">
              Full Stack Expertise
            </h3>
            <p className="mt-2 text-gray-300">
              Proficient in MERN stack development with scalable solutions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#1a0f26] rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-purple-500/50">
            <span className="text-5xl text-purple-400">🚀</span>
            <h3 className="mt-4 text-xl font-bold text-white">
              Problem Solver
            </h3>
            <p className="mt-2 text-gray-300">
              Strong DSA skills with consistent LeetCode practice.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#1a0f26] rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-purple-500/50">
            <span className="text-5xl text-purple-400">🤝</span>
            <h3 className="mt-4 text-xl font-bold text-white">Team Player</h3>
            <p className="mt-2 text-gray-300">
              Effective communication in English and Hindi.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#1a0f26] rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-purple-500/50">
            <span className="text-5xl text-purple-400">💡</span>
            <h3 className="mt-4 text-xl font-bold text-white">Quick Learner</h3>
            <p className="mt-2 text-gray-300">
              Adapts quickly to new technologies and frameworks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Quick Facts Section */}
          <div className="bg-[#1a0f26] rounded-xl shadow-2xl p-8 transform transition duration-500 hover:scale-[1.02] hover:shadow-purple-500/50">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-purple-400">
                  Experience:
                </span>{" "}
                2+ Years
              </li>
              <li>
                <span className="font-semibold text-purple-400">
                  Projects Completed:
                </span>{" "}
                5+
              </li>
              <li>
                <span className="font-semibold text-purple-400">
                  Technologies:
                </span>{" "}
                15+
              </li>
            </ul>
          </div>

          {/* Interests Section */}
          <div className="bg-[#1a0f26] rounded-xl shadow-2xl p-8 transform transition duration-500 hover:scale-[1.02] hover:shadow-purple-500/50 col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">Interests</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Full Stack Development</li>
              <li>Creating Designs</li>
              <li>Problem Solving</li>
              <li>GFX Designs</li>
              <li>Making Webapps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
