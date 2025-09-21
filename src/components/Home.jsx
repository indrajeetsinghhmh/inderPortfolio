import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 bg-black text-white">
      {/* Left Section - Text and Links */}
      <div className="flex-1 max-w-5xl text-center lg:text-left mb-10 lg:mb-0 lg:pr-16">
        <h2 className="text-indigo-500 text-5xl font-extrabold mb-4 tracking-wide">
          Crafting digital experiences, creativity.
        </h2>
        <p className="text-xl max-w-xl text-gray-400 mb-8 font-light">
          I'm Inderjeet Singh, a full-stack developer passionate about creating
          innovative and user-friendly web applications. Let's build something
          amazing together, transforming your ideas into reality.
        </p>
        {/* buttons  */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block bg-gray-800 hover:bg-gray-700 border border-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-6 text-2xl mt-8">
          <a
            href="https://x.com/iswinnyx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 18a4 4 0 0 0 4-4v-2h-3l-4-4v2l4 4-2 2h-4v2h-2v4h4v-2zM4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V6z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/iswinnyx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <path d="M2 13v7h4v-7z" />
              <circle cx="4" cy="6" r="2" />
            </svg>
          </a>
          <a
            href="mailto:indrajeet.business01@gmail.com"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>
      {/* Right Section - Image with Effects */}
      <div className="flex-1 flex justify-center items-center relative group">
        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          <img
            src="./inderpng.jpeg"
            alt="Developer Portfolio Image"
            className="relative w-full h-full object-cover rounded-3xl z-10 shadow-2xl transition-all duration-700 ease-in-out group-hover:rotate-6 group-hover:scale-105 group-hover:-translate-y-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
