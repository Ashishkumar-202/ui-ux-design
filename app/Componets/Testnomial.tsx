"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Yogesh Kumar",
    title: "Founder at Charges23 Labs",
    text: "Working with Neeraj was a game-changer for our product. He took the time to truly understand our users and translated that into a seamless and modern interface. The end result was not just visually appealing but also significantly improved user engagement."
  },
  {
    name: "Prince",
    title: "Product Manager at Shipclues",
    text: "From wireframes to final UI, Neeraj delivered high-quality work ahead of schedule. His design process was very collaborative, and he was always open to feedback. We couldn’t be happier with how intuitive and clean our platform looks now."
  },
  {
    name: "Priya Mittal",
    title: "Front-End Developer at kapylon",
    text: "Neeraj is the kind of designer every team wants — thoughtful, fast, and always user-focused. His ability to translate vague ideas into beautiful, functional interfaces is incredible. Collaborating with him always pushes the quality of the project higher."
  },
  {
    name: "Rajat Gupta",
    title: "Co-Founder at Ed2100",
    text: "What stands out about Neeraj is his structured design thinking and clear communication. He makes design reviews easy for everyone, even non-designers, and brings a lot of clarity to complex user flows. A true team player."
  },
  {
    name: "Mohit",
    title: "Visual Designer at Sociowash",
    text: "Neeraj brings energy and creative clarity to every project. He’s not only a brilliant designer but also someone who uplifts the entire team with his positive attitude and collaborative spirit. Always a pleasure to work with!"
  },
];

const autoplaySettings = {
  delay: 0,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,
};

function TestimonialSlider({ reverse = false }: { reverse?: boolean }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      speed={2000}
      autoplay={{
        ...autoplaySettings,
        reverseDirection: reverse,
      }}
      className="px-4"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-xl p-6 text-white shadow-md h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.title}</p>
              <p className="mt-4 text-sm leading-relaxed">{item.text}</p>
            </div>
            <p className="mt-4 text-red-400">5.0 ★★★★★</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Testnomial() {
  return (
    <div className="py-16 space-y-12">
      <TestimonialSlider />
      <TestimonialSlider reverse />
    </div>
  );
}

export default Testnomial;
