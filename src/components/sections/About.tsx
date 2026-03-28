"use client";

import { motion } from "framer-motion";
import { FiDownload, FiGlobe } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import personal from "@/data/personal.json";

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "40+" },
  { label: "Languages Spoken", value: "4" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know who I am and what drives my passion for development" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {personal.bio}
            </p>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
              <FiGlobe className="w-4 h-4" />
              <span>Languages: {personal.languages.join(", ")}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-400 text-white rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 text-center hover:border-emerald-500/50 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
