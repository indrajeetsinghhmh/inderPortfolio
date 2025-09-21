import React from "react";

const WhyMe = () => {
  return (
    <div className="p-8 bg-black text-white flex flex-col items-center lg:min-h-screen py-20">
      <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
        Why Choose Me?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {/* Card: Full Stack Expertise */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src="https://picsum.photos/seed/fullstack/200"
              alt="Full Stack Expertise"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">
            Full Stack Expertise
          </h3>
          <p className="text-gray-400 text-center text-sm leading-relaxed">
            From frontend to backend to deployment, I offer comprehensive skills
            in web application development. Your project is in capable hands,
            from concept to completion.
          </p>
        </div>

        {/* Card: Creative Design */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src="https://picsum.photos/seed/design/200"
              alt="Creative Design"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">
            Creative Design
          </h3>
          <p className="text-gray-400 text-center text-sm leading-relaxed">
            Stand out with unique designs that showcase your creativity and
            brand identity. I focus on crafting visually stunning and intuitive
            user experiences.
          </p>
        </div>

        {/* Card: Client-Centric Approach */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src="https://picsum.photos/seed/clients/200"
              alt="Client-Centric Approach"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">
            Client-Centric Approach
          </h3>
          <p className="text-gray-400 text-center text-sm leading-relaxed">
            Your vision is my priority. We will work together to ensure
            personalized web solutions that meet your specific needs and exceed
            your expectations.
          </p>
        </div>

        {/* Card: Efficient Project Delivery */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src="https://picsum.photos/seed/delivery/200"
              alt="Efficient Project Delivery"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">
            Efficient Project Delivery
          </h3>
          <p className="text-gray-400 text-center text-sm leading-relaxed">
            I am committed to delivering high-quality projects on time and
            within budget. My streamlined process ensures a smooth and
            transparent journey from start to finish.
          </p>
        </div>

        {/* Card: Quality Code */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src="https://picsum.photos/seed/quality/200"
              alt="Quality Code"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">
            Quality Code
          </h3>
          <p className="text-gray-400 text-center text-sm leading-relaxed">
            I write clean, maintainable, and well-documented code that is easy
            to understand and scale. My focus on quality ensures your
            application's long-term health and performance.
          </p>
        </div>

        {/* Card: Post-Project Support */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src="https://picsum.photos/seed/support/200"
              alt="Post-Project Support"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center text-indigo-400 mb-2">
            Post-Project Support
          </h3>
          <p className="text-gray-400 text-center text-sm leading-relaxed">
            My commitment doesn't end with deployment. I offer ongoing
            maintenance and support to ensure your application remains secure,
            up-to-date, and fully functional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
