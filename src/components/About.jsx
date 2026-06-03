import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function About() {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.4 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.4 });

  const handleMouseMove = (event) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    rotateX.set((0.5 - y) * 14);
    rotateY.set((x - 0.5) * 16);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row items-center gap-12 lg:gap-16 pb-10 lg:pb-20" id="about">
      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <motion.div
          ref={cardRef}
            className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
          style={{
            perspective: 1200,
            transformStyle: 'preserve-3d',
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
          }}
          whileHover={{ scale: 1.02 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          onTouchEnd={resetTilt}
        >
          <motion.div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-black/10 via-transparent to-black/5 blur-2xl"
            animate={{ opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute -left-4 top-6 rounded-full border border-black/10 bg-white/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] shadow-lg backdrop-blur-xl"
            animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ translateZ: 40 }}
          >
            Profile
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute -right-4 bottom-10 rounded-full border border-black/10 bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white shadow-lg backdrop-blur-xl"
            animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ translateZ: 28 }}
          >
            Developer
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 mix-blend-screen"
              whileHover={{ opacity: 1, x: [0, 120] }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />

            <motion.img
              src="/assets/me.jpeg"
              alt="About Me Illustration"
              className="h-[420px] w-full object-cover object-top grayscale contrast-125 saturate-0"
              style={{ transform: 'translateZ(20px)' }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />

            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 lg:pl-4 xl:pl-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mb-4 lg:mb-6">
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
