import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { TbExternalLink } from 'react-icons/tb';

const projects = [
  {
    id: 1,
    title: "Sekar Industries",
    description:
      "A modern full-stack application for Sekar Industries with React frontend, Express/Mongo backend, admin analytics, and email-based password reset OTP.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    techColor: "#61DAFB",
    github: "https://github.com/AadhiPranesh/sekar-industries",
    live: "https://sekar-industries-3.onrender.com/",
    tag: "Full-Stack",
  },
  {
    id: 2,
    title: "Kanban Board",
    description:
      "A visual project management tool inspired by Trello. Drag and drop tasks across customizable columns to track progress and organize workflows efficiently.",
    tech: ["CSS", "JavaScript", "HTML"],
    techColor: "#7B61FF",
    github: "https://github.com/AadhiPranesh/kanban-board",
    live: "https://kanbanboard-snowy-eight.vercel.app/",
    tag: "Public",
  },
  {
    id: 3,
    title: "Legal AI Assistant",
    description:
      "An AI-powered legal assistant providing context-aware guidance using RAG. Integrated WhatsApp automation via n8n for real-time messaging, backed by a scalable Node.js architecture for efficient AI query processing.",
    tech: ["React", "Node.js", "LangChain", "LLaMA", "n8n", "WhatsApp API"],
    techColor: "#10B981",
    github: "https://github.com/AadhiPranesh/Legal_AI_Assitance",
    live: "#",
    tag: "AI + Automation",
  },
  {
    id: 4,
    title: "Attendance Tracking System",
    description:
      "A mini-project for tracking student or employee attendance. Features a clean UI to mark, view, and manage attendance records efficiently with real-time updates.",
    tech: ["HTML", "CSS", "JavaScript"],
    techColor: "#E34F26",
    github: "https://github.com/AadhiPranesh/Attendance-Tracking-System",
    live: "#",
    tag: "Mini-Project",
  },
  {
    id: 5,
    title: "Car Rental",
    description:
      "A mini-project car rental platform that allows users to browse, book, and manage vehicle rentals. Includes car listings, booking flow, and a simple admin management view.",
    tech: ["JavaScript", "HTML", "CSS"],
    techColor: "#F7DF1E",
    github: "https://github.com/AadhiPranesh/car-rental",
    live: "#",
    tag: "Mini-Project",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-black px-5 lg:px-28 py-12 lg:py-20" id="projects">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12 lg:mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl lg:text-4xl text-white">
          My <span className="font-extrabold">Projects</span>
        </h2>
        <p className="text-[#71717A] mt-3 text-sm lg:text-base max-w-xl mx-auto">
          A collection of my public work — from full-stack applications to mini-projects, each built to solve a real problem.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            onHoverStart={() => setHovered(project.id)}
            onHoverEnd={() => setHovered(null)}
            className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer"
            style={{
              boxShadow:
                hovered === project.id
                  ? "0 0 0 1.5px rgba(255,255,255,0.25), 0 8px 40px rgba(0,0,0,0.5)"
                  : "0 2px 16px rgba(0,0,0,0.3)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Top accent bar */}
            <motion.div
              className="h-1 w-full"
              style={{ background: project.techColor }}
              animate={{ scaleX: hovered === project.id ? 1 : 0.4, originX: 0 }}
              transition={{ duration: 0.3 }}
            />

            <div className="p-6 flex flex-col h-full gap-4">
              {/* Header row */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/20 text-white/50 mb-2 inline-block">
                    {project.tag}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                </div>
                <span className="text-3xl font-extrabold text-white/10 leading-none shrink-0">
                  {String(project.id).padStart(2, "0")}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#71717A] text-sm leading-relaxed flex-1">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BsGithub size={15} />
                  GitHub
                </motion.a>
                {project.live !== "#" && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TbExternalLink size={15} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
