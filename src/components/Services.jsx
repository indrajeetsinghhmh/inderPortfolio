import React from "react";

const servicesData = [
  {
    title: "Crafting Intuitive and Engaging User Interfaces",
    description:
      "I craft intuitive and engaging user interfaces using React, ensuring a seamless and delightful experience for your users. Let's bring your vision to life with stunning designs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 01-6-6v-1.5m6 7.5a6 6 0 006-6v-1.5m-6 7.5H4.5m6-12H4.5m0-1.5v3m6-3v3m0 0a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5H19.5m-6-12H19.5m0-1.5v3m-6-3v3"
        />
      </svg>
    ),
  },
  {
    title: "Developing Robust and Scalable Backend Solutions",
    description:
      "I develop robust and scalable backend solutions using Node and Express.js, ensuring your application is efficient, reliable, and ready to handle any challenge. Let's build a powerful foundation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM12 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm-1.5 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm1.5-3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm1.5-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Unleash the Power of MERN",
    description:
      "I stand out with my MERN stack expertise, delivering seamless, scalable web applications tailored to your unique needs and vision.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.5a9 9 0 019-9.5V3.75A.75.75 0 0112 3h.56a.75.75 0 01.56.56l-.37 1.84a.75.75 0 01-.56.56h-.56A.75.75 0 0112 5.25V11a.75.75 0 01-.75.75H6A.75.75 0 015.25 11V6A.75.75 0 016 5.25h4.25a.75.75 0 01.75.75v5.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V6.75A.75.75 0 014.5 6h-.75a.75.75 0 01-.75-.75z"
        />
      </svg>
    ),
  },
  {
    title: "Strategic Project Consultation",
    description:
      "I provide expert consultations to guide your project from concept to launch, ensuring a clear roadmap and strategic approach. Let's discuss your vision and chart a course for success.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 16.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM10.5 16.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 16.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15 16.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.75 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM21.75 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 19.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.75 19.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 16.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM21.75 16.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM21.75 19.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 19.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Your Vision, My Expertise: Building Digital Solutions",
    description:
      "I transform ideas into innovative, user-friendly web applications.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962 5.55 5.55 0 011.562-3.962A5.55 5.55 0 0112 6.75c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 21.75zM12 2.25c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 15.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962A5.55 5.55 0 0112 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Building responsive, performant, and scalable web applications tailored to your needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962 5.55 5.55 0 011.562-3.962A5.55 5.55 0 0112 6.75c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 21.75zM12 2.25c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 15.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962A5.55 5.55 0 0112 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces with a focus on user experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962 5.55 5.55 0 011.562-3.962A5.55 5.55 0 0112 6.75c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 21.75zM12 2.25c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 15.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962A5.55 5.55 0 0112 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "API Development",
    description: "Designing and implementing robust RESTful and GraphQL APIs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962 5.55 5.55 0 011.562-3.962A5.55 5.55 0 0112 6.75c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 21.75zM12 2.25c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 15.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962A5.55 5.55 0 0112 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Consulting",
    description:
      "Providing expert advice on technology stack, architecture, and best practices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962 5.55 5.55 0 011.562-3.962A5.55 5.55 0 0112 6.75c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 21.75zM12 2.25c1.414 0 2.828.53 3.962 1.562a5.55 5.55 0 011.562 3.962 5.55 5.55 0 01-1.562 3.962A5.55 5.55 0 0112 15.75c-1.414 0-2.828-.53-3.962-1.562a5.55 5.55 0 01-1.562-3.962A5.55 5.55 0 0112 2.25z"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="bg-[#0f0715] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Full-Stack Development Services
          </h2>
          <p className="lg:text-xl text-lg text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive full-stack development services, from crafting
            intuitive user interfaces to building robust server-side logic and
            ensuring seamless deployment. Let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a0f26] rounded-xl shadow-2xl p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-purple-500/50 cursor-pointer"
            >
              <div className="flex-shrink-0 mb-6">
                <div className="bg-purple-600 p-4 rounded-full inline-flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-base text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        {/* The two cards at the bottom of the image */}
        <div className="mt-16 text-center">
          <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
            Always Learning
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 my-4">
            Beyond the Code
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            I am committed to continuous learning and exploration, constantly
            seeking new insights and methodologies to enhance my skills and
            deliver exceptional results. Let's innovate together!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a0f26] rounded-xl shadow-2xl p-8 flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-6">
              <div className="p-4 rounded-full inline-flex items-center justify-center text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L1.865 7.956m12.182 12.182L5.875 12.067M12 21V3"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Latest Tech</h3>
            <p className="text-base text-gray-300">
              Staying ahead with cutting-edge technologies and trends.
            </p>
          </div>
          <div className="bg-[#1a0f26] rounded-xl shadow-2xl p-8 flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-6">
              <div className="p-4 rounded-full inline-flex items-center justify-center text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a6 6 0 11-6 6 6 6 0 016-6zM12 21a9 9 0 00-9-9 9 9 0 009-9 9 9 0 009 9 9 9 0 00-9 9z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Deep Dive</h3>
            <p className="text-base text-gray-300">
              Exploring complex topics to provide insightful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
