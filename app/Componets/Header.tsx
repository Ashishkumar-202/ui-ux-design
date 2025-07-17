"use client";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="mt-10 max-w-5xl mx-auto px-4">
      <motion.div
        className="inline-block border-2 border-gray-500 px-6 ml-2 py-2 bg-white text-gray-800 font-semibold cursor-pointer hover:bg-gray-100 transition duration-200"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>UX/UI Designer</h2>
      </motion.div>

      <motion.div
        className="text-5xl md:text-7xl font-bold text-center mt-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Creating <span className="text-red-500">Thoughtfull</span> digital experiences
      </motion.div>

      <motion.p
        className="mt-4 text-center text-lg px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Specializing in User-Centered design solution that enhance user experience and drive business growth. Let s create something amazing together.
      </motion.p>

      <motion.div
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="border-2 border-black px-6 py-2 bg-white text-black font-medium rounded-md transition duration-200"
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Header;
