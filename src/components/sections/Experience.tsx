"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiExternalLink } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import experience from "@/data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="My professional journey and career milestones" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-cyan-400 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[22px] top-1 w-[13px] h-[13px] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 ring-4 ring-white dark:ring-gray-950" />

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:border-emerald-500/30 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <FiBriefcase className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 hover:underline flex items-center gap-1"
                  >
                    {exp.company} <FiExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 dark:text-gray-400">{exp.location}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {exp.startDate} &mdash; {exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
