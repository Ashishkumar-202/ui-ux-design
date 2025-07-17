"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
  {
    title: "Outcome focused design ",
    content: (
      <ul className="list-disc pl-5">
        <li className="text-sm font-normal mt-1">
          I make design decisions that drive measurable results and lasting impact for both users and businesses.
        </li>
        <li className="text-sm font-normal mt-1">
          Improved retention and conversion rates through UX research and rapid iteration.
        </li>
        <li className="text-sm font-normal mt-1">
          Successfully launched products with high user engagement.
        </li>
      </ul>
    ),
  },
  {
    title: "Cross-Functional Collaboration",
    content: (
      <ul className="list-disc pl-5">
        <li className="text-sm font-normal mt-1">
          Partnered with CEOs, developers, and creative teams across multiple companies and countries.
        </li>
        <li className="text-sm font-normal mt-1">
          Guided and mentored teams, resulting in measurable productivity gains.
        </li>
        <li className="text-sm font-normal mt-1">
          Balanced stakeholder needs to ensure business and user alignment.
        </li>
      </ul>
    ),
  },
  {
    title: "User research & strategy",
    content: (
      <ul className="list-disc pl-5">
        <li className="text-sm font-normal mt-1">
          Regularly conducted usability testing to identify pain points and inform design decisions.
        </li>
        <li className="text-sm font-normal mt-1">
          Facilitated research across diverse markets, leading to localized, user-centered solutions.
        </li>
        <li className="text-sm font-normal mt-1">
          Drove post-launch evaluation and continuous improvement.
        </li>
      </ul>
    ),
  },
  {
    title: "Scalable Systems",
    content: (
      <ul className="list-disc pl-5">
        <li className="text-sm font-normal mt-1">
          Designed scalable templates, icon libraries, and design systems for rapid project delivery.
        </li>
        <li className="text-sm font-normal mt-1">
          Managed simultaneous projects, ensuring timely delivery without sacrificing quality.
        </li>
        <li className="text-sm font-normal mt-1">
          Developed processes that improved onboarding speed and overall efficiency.
        </li>
      </ul>
    ),
  },
  {
    title: "Mentorship & team leadership",
    content: (
      <ul className="list-disc pl-5">
        <li className="text-sm font-normal mt-1">
          Fostered team growth through structured processes, mentorship, and training.
        </li>
        <li className="text-sm font-normal mt-1">
          Led designers and engineers to exceed productivity benchmarks..
        </li>
        <li className="text-sm font-normal mt-1">
          Built collaborative environments focused on creativity and learning.
        </li>
      </ul>
    ),
  },
];

function Strength() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-6 max-w-5xl mx-auto px-4">
      <h2 className="font-bold text-4xl">
        My <span className="text-red-500">Strengths</span>
      </h2>
      <p className="mt-2 mb-6">
        An overview of my approach to achieving exceptional outcomes
      </p>

      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 transition duration-200"
              onClick={() => toggle(index)}
            >
              <span>{item.title}</span>
              <span className="text-xl">{activeIndex === index ? "v" : ">"}</span>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-gray-600 text-white px-4 py-3 overflow-hidden"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Strength;
