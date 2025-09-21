import React, { useState } from "react";

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in the MongoDB, Express.js, React, Node.js, and JavaScript, offering full-stack web development solutions.",
  },
  {
    question: "Do you offer remote work?",
    answer: "Yes, I am available for remote projects worldwide.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Depending on the project scope, timelines vary from 2 weeks to 3 months.",
  },
  {
    question: "How much does it cost to build a web application?",
    answer:
      "Costs depend on project scope, features, and complexity. I provide detailed estimates after discussing your specific needs and goals.",
  },
  {
    question: "What is your approach to project management?",
    answer:
      "I use agile methodologies, ensuring transparent communication, iterative development, and adaptability to changing requirements throughout the project.",
  },
  {
    question: "Can you help with project maintenance?",
    answer: "Absolutely! I offer ongoing support and maintenance services.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="lg:text-xl text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to some common questions about my services and
            expertise.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a0f26] rounded-xl shadow-2xl overflow-hidden p-6 cursor-pointer transform transition duration-500 hover:scale-[1.02]"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
