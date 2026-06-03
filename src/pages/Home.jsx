import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const riseFade = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const heroRef = useRef(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 180, damping: 18, mass: 0.4 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 180, damping: 18, mass: 0.4 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const glowParallaxY = useTransform(scrollYProgress, [0, 1], [0, -55]);

  const handleTiltMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    tiltX.set((0.5 - y) * 14);
    tiltY.set((x - 0.5) * 18);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <div ref={heroRef} className="relative overflow-hidden pt-20 lg:pt-24" id="home">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[-6rem] h-72 w-72 rounded-full bg-[#F97316]/20 blur-3xl"
        style={{ y: glowParallaxY }}
        animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5rem] top-28 h-80 w-80 rounded-full bg-black/10 blur-3xl"
        style={{ y: glowParallaxY }}
        animate={{ x: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex justify-between py-8 lg:py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse gap-8 lg:gap-10">

        <motion.div
          className="w-full lg:w-[45%]"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="text-[2rem] sm:text-4xl lg:text-5xl leading-tight flex flex-col mt-4 lg:mt-0 gap-2 lg:gap-5"
            variants={staggerContainer}
          >
            <motion.h2 variants={riseFade}>
              Hello, {" "}
              <span className="inline-block max-w-full break-words whitespace-normal">
                <TypeAnimation
                  sequence={[
                    "I am AADHI PRANESH SS",
                    1000,
                  ]}
                  speed={10}
                  style={{ fontWeight: 600 }}
                  repeat={Infinity}
                />
              </span>
            </motion.h2>
            <motion.h2 variants={riseFade}>
              <span className="font-extrabold">Full Stack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2 variants={riseFade}>
              Based in <span className="font-extrabold">Tamil Nadu.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-4 lg:mt-5 leading-relaxed"
            variants={riseFade}
          >
            I am a Computer Science student with a strong interest in building practical and meaningful digital solutions. I enjoy working on projects that solve real-world problems and continuously help me grow as a developer. I am focused on improving my skills, exploring new ideas, and contributing to impactful work in the tech industry.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-4 lg:gap-x-5 mt-8 lg:mt-14"
            variants={staggerContainer}
          >
            {[
              { Icon: BiLogoGmail, href: "mailto:ssaadhipranesh@gmail.com" },
              { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/s-saadhi-pranesh-ssap2310/" },
              { Icon: BsGithub, href: "https://github.com/AadhiPranesh/" }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                variants={riseFade}
                whileHover={{ scale: 1.08, y: -3, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:w-[55%] w-full"
          style={{ y: imageParallaxY }}
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-x-8 top-12 h-[75%] rounded-full bg-white/40 blur-2xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.55, 0.8, 0.55] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <motion.div
            className="relative mx-auto max-w-[620px] will-change-transform"
            style={{
              rotateX: smoothTiltX,
              rotateY: smoothTiltY,
              translateZ: 0,
              transformStyle: "preserve-3d",
            }}
            animate={{ y: [0, -10, 0], rotateZ: [0, 0.8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
            onMouseMove={handleTiltMove}
            onMouseLeave={resetTilt}
            onTouchEnd={resetTilt}
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] border border-black/10 bg-white/25 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              style={{ translateZ: -20 }}
            />
            <img className="relative z-10 h-full w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.18)]" src="/assets/hero-vector.svg" alt="Hero Vector" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
