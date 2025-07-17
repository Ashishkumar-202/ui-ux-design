"use client"; // important for framer-motion
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="mt-12 max-w-6xl mx-auto px-6">
      {/* Heading */}
      <div className="font-bold text-black text-3xl mb-8">
        About <span className="text-red-500">Me</span>
      </div>

      {/* Flex layout */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Image */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile-img-Cq1b-8Iq.jpg"
            alt="Profile Picture"
            width={500}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 w-full space-y-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-black text-lg leading-relaxed">
            Hello! Im a passionate UX designer with a background in
            human-computer interaction and a deep understanding of user
            psychology. I believe in creating intuitive, accessible, and
            delightful digital experiences.
          </p>
          <p className="text-black text-lg leading-relaxed">
            With over 9 years of experience in the industry, I ve worked with
            startups and established companies to transform complex problems
            into elegant solutions.
          </p>

          {/* Cards */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {[ 
                {
                  title: "🌍 Global Mindset",
                  desc: "Designing for diverse users across cultures.",
                },
                {
                  title: "💜 User Advocate",
                  desc: "Always championing user needs.",
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="flex-1 bg-white border border-gray-300 shadow-md p-4 rounded-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-lg font-semibold text-black">{card.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white border border-gray-300 shadow-md p-4 rounded-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg font-semibold text-black">🧠 Creative Problem Solver</h3>
              <p className="text-gray-700 text-sm mt-1">
                Finding innovative solutions to complex design challenges.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
