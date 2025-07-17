"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Gem, TabletSmartphone, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: <Zap className="text-red-500 w-6 h-6" />,
    title: "UX Research",
    description:
      "User interviews, usability testing, and creating actionable insights to inform design decisions.",
  },
  {
    icon: <Gem className="text-red-500 w-6 h-6" />,
    title: "UI Design",
    description:
      "Creating visually appealing interfaces with attention to detail, accessibility, and brand consistency.",
  },
  {
    icon: <TabletSmartphone className="text-red-500 w-6 h-6" />,
    title: "Prototyping",
    description:
      "Building interactive prototypes that effectively communicate design concepts and user flows.",
  },
  {
    icon: <Lightbulb className="text-red-500 w-6 h-6" />,
    title: "Design Systems",
    description:
      "Developing scalable design systems that ensure consistency across products and platforms.",
  },
];

function Skil() {
  return (
    <div className="mt-6 max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-black mb-8">
        MY <span className="text-red-500">SKILLS</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="rounded-xl p-6 text-white shadow-md bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-black">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skil;
