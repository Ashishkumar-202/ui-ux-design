"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const workItems = [
  {
    title: "Shipclues",
    description:
      "Redesigned the dashboard to improve user retention and overall engagement",
    tag: "Web",
    image: "/Estimated-Monthly-Traffic_Q320.jpg",
  },
  {
    title: "Dairy Saathip",
    description:
      "Led the redesign of customer and driver apps to boost delivery efficiency and user satisfaction for Dairy Saathi.",
    tag: "Mobile ",
    image: "/Estimated-Monthly-Traffic_Q320.jpg",
  },
  {
    title: "ed2100",
    description:
      "Led the entire UX process for ed2100—from user research to wireframes, high-fidelity designs, and interactive prototypes.",
    tag: "Web and Mobile",
    image: "/Estimated-Monthly-Traffic_Q320.jpg",
  },
  {
    title: "Sequence",
    description:
      "Built end-to-end designs for Sequence XT across mobile, tablet, and web to streamline safety and compliance management.",
    tag: "Web, Ipad & Mobile",
    image: "/Estimated-Monthly-Traffic_Q320.jpg",
  },
];

function Work() {
  return (
    <div className="mt-6 max-w-5xl mx-auto px-4">
      <div className="font-bold text-4xl text-black mt-3 mb-6">
        Selected <span className="text-red-500">Work</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-black">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm">{item.description}</p>

            {/* Tag */}
            <span className="inline-block mt-3 px-3 py-1 text-xs bg-red-100 text-red-600 rounded-full">
              {item.tag}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Button with animation */}
      <motion.div
        className="mt-8 mb-3 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <button className="border-2 border-black px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition duration-200">
          View My Work
        </button>
      </motion.div>
    </div>
  );
}

export default Work;
