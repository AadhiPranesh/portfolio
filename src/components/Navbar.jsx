import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen || !pendingScrollTarget) {
      return;
    }

    const scrollTimer = window.setTimeout(() => {
      const section = document.getElementById(pendingScrollTarget);
      if (section) {
        const targetY = section.offsetTop - (window.innerWidth < 1024 ? 90 : 110);
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 650;
        const startTime = performance.now();

        const easeInOutCubic = (progress) =>
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const animateScroll = (now) => {
          const elapsed = Math.min((now - startTime) / duration, 1);
          window.scrollTo(0, startY + distance * easeInOutCubic(elapsed));

          if (elapsed < 1) {
            window.requestAnimationFrame(animateScroll);
          }
        };

        window.requestAnimationFrame(animateScroll);
      }
      setPendingScrollTarget(null);
    }, 150);

    return () => window.clearTimeout(scrollTimer);
  }, [isOpen, pendingScrollTarget]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const targetY = section.offsetTop - (window.innerWidth < 1024 ? 90 : 110);
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 650;
      const startTime = performance.now();

      const easeInOutCubic = (progress) =>
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const animateScroll = (now) => {
        const elapsed = Math.min((now - startTime) / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(elapsed));

        if (elapsed < 1) {
          window.requestAnimationFrame(animateScroll);
        }
      };

      window.requestAnimationFrame(animateScroll);
    }
    setIsOpen(false);
  };

  const handleMenuItemClick = (id) => {
    setPendingScrollTarget(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 bg-white px-4 sm:px-5 lg:px-28 py-4 transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="h-8 sm:h-9 cursor-pointer"
          src="/assets/logo.svg"
          alt="Logo"
        />

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href=""
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.a>

        <motion.button
          type="button"
          className="relative z-[60] lg:hidden text-2xl p-1"
          onClick={() => setIsOpen((open) => !open)}
          whileHover={{ scale: 1.2 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-50">
            <motion.button
              type="button"
              className="absolute inset-0 h-full w-full bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu backdrop"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-x-0 top-0 h-full w-full bg-white shadow-lg"
            >
              <button
                type="button"
                className="absolute top-5 right-5 text-2xl"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <HiX />
              </button>
              <ul className="flex flex-col items-start px-8 pt-12 h-full gap-y-6 font-semibold text-lg">
                {["about", "skills", "projects", "contact"].map((section) => (
                  <motion.li
                    key={section}
                    className="border-b border-black/20 pb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                      <button type="button" onClick={() => handleMenuItemClick(section)}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </motion.li>
                ))}
                <motion.a
                  href=""
                  className="relative inline-block px-4 py-2 font-semibold group"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
                    Resume <TbDownload size={16} />
                  </span>
                </motion.a>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
