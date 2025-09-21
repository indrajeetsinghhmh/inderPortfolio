import React, { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const url =
      "https://script.google.com/macros/s/AKfycbyuCM0FzX2KYiZT9Df3Y5ICsbgjxngbN9drr2jYcQWI828D9L_WPNxg-uyxMJGDp3F0lQ/exec";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${encodeURIComponent(
        e.target.name.value
      )}&Email=${encodeURIComponent(
        e.target.email.value
      )}&Budget=${encodeURIComponent(
        e.target.budget.value
      )}&Message=${encodeURIComponent(e.target.message.value)}`,
    })
      .then((res) => res.text())
      .then(() => {
        setIsLoading(false);
        setShowSuccessPopup(true);
        e.target.reset();

        // Clear URL query parameters without reloading the page
        if (window.history.replaceState) {
          const cleanUrl =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        }

        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      })
      .finally(() => {
        // Scroll to home section smoothly
        const homeSection = document.getElementById("home");
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: "smooth" });
        }
      });
  };

  return (
    <section className="bg-[#0f0715] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-4">
            Ready to start your project?
          </h2>
          <p className="lg:text-xl text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 mb-8">
            I'm always excited to work on new projects and help bring your ideas
            to life. Let's discuss how I can help you build something amazing.
          </p>
          <div className="space-y-4 text-left inline-block lg:block">
            {/* Contact info here */}
            <div className="space-y-4 text-left inline-block lg:block">
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.286a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <span className="text-gray-300">
                  indrajeet.business01@gmail.com
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 002.25 2.25H16.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25H10.5v1.5h-.75a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 002.25 2.25H16.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25H10.5"
                  />
                </svg>

                <span className="text-gray-300">
                  github.com/indrajeetsinghhmh
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.25a.75.75 0 00-1.5 0v2.25a.75.75 0 01-.75.75h-2.25a.75.75 0 000 1.5h2.25a.75.75 0 01.75.75v2.25a.75.75 0 001.5 0v-2.25a.75.75 0 01.75-.75h2.25a.75.75 0 000-1.5h-2.25a.75.75 0 01-.75-.75zM12 21a9 9 0 009-9 9 9 0 00-9-9 9 9 0 00-9 9 9 9 0 009 9z"
                  />
                </svg>

                <span className="text-gray-300">linkedin.com/in/iswinnyx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#1a0f26] rounded-xl shadow-2xl p-8 transform transition duration-500 hover:scale-[1.02] hover:shadow-purple-500/50 relative">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">
            Send Me a Message
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-300"
              >
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select a budget range</option>
                <option value="under500">$500 - $1,000</option>
                <option value="500-1000">$1,000 - $5,000</option>
                <option value="1000-5000">$5,000 - $10,000</option>
                <option value="5000+">$10,000+</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Tell me about your project...
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`relative cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${
                  isLoading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:text-white"
                }`}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 flex items-center justify-center space-x-2">
                  {isLoading && (
                    <svg
                      className="animate-spin h-5 w-5 text-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  )}
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                </span>
              </button>
            </div>
          </form>

          {/* Success Popup */}
          {showSuccessPopup && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInOut z-50">
              Data Submitted Successfully!
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInOut {
            0% {opacity: 0; transform: translateY(-10px);}
            10% {opacity: 1; transform: translateY(0);}
            90% {opacity: 1; transform: translateY(0);}
            100% {opacity: 0; transform: translateY(-10px);}
          }
          .animate-fadeInOut {
            animation: fadeInOut 3s forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
