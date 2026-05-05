import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row items-center gap-10 lg:gap-0" id="about">
      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <div className="p-4 border-4 border-black rounded-3xl bg-white">
          <img 
            src="/assets/me.jpeg" 
            alt="About Me Illustration"
            className="w-60 h-80 lg:w-72 lg:h-96 rounded-2xl object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 lg:pl-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am a passionate Computer Science student with a strong interest in building meaningful and practical digital solutions. I enjoy working on projects that challenge my thinking and allow me to apply my knowledge in real-world scenarios.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I believe in continuous learning and consistently work on improving my problem-solving skills, logical thinking, and overall development approach. I focus on creating applications that are not only functional but also efficient and user-friendly.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Through hands-on experience and active involvement in projects, I am developing a strong foundation and preparing myself to contribute effectively in the technology industry.
        </p>
      </motion.div>
    </div>
  );
}
