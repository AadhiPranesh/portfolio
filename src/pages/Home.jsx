import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="pt-20 lg:pt-24" id="home">
      <div className="flex justify-between py-8 lg:py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse gap-8 lg:gap-10">

        <motion.div
          className="w-full lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-[2rem] sm:text-4xl lg:text-5xl leading-tight flex flex-col mt-4 lg:mt-0 gap-2 lg:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
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
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Full Stack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based in <span className="font-extrabold">Tamil Nadu.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-4 lg:mt-5 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I am a Computer Science student with a strong interest in building practical and meaningful digital solutions. I enjoy working on projects that solve real-world problems and continuously help me grow as a developer. I am focused on improving my skills, exploring new ideas, and contributing to impactful work in the tech industry.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-4 lg:gap-x-5 mt-8 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
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
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full max-w-[620px] mx-auto object-contain" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
