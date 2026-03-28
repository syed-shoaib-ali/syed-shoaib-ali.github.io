"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import GradientBlob from "../ui/GradientBlob";
import personal from "@/data/personal.json";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <GradientBlob className="w-96 h-96 bg-emerald-500 top-20 -left-48" />
      <GradientBlob className="w-80 h-80 bg-cyan-400 bottom-20 -right-40" />
      <GradientBlob className="w-64 h-64 bg-teal-500 top-1/2 left-1/2 -translate-x-1/2" />

      {/* Particle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,100,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Floating Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="relative"
          >
            {/* Gradient ring */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-teal-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-950">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center"><span class="text-6xl md:text-8xl font-bold text-white">${personal.shortName[0]}</span></div>`;
                  }}
                />
              </div>
            </div>

            {/* Available badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white dark:bg-gray-900 rounded-full shadow-md border border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Available</span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <FiMapPin className="w-4 h-4" />
                <span>{personal.location}</span>
                <span className="mx-2">|</span>
                <span className="text-green-500 font-medium">Available for hire</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  {personal.shortName}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-3 font-medium">
                {personal.title}
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-xl">
                {personal.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-400 text-white rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                View My Work
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
            >
              {personal.social.linkedin && (
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all">
                  <FiLinkedin className="w-5 h-5" />
                </a>
              )}
              {personal.social.github && (
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <FiGithub className="w-5 h-5" />
                </a>
              )}
              {personal.social.fiverr && (
                <a href={personal.social.fiverr} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-950 transition-all">
                  <SiFiverr className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <a href="#about" className="text-gray-400 hover:text-emerald-500 transition-colors">
              <FiArrowDown className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
