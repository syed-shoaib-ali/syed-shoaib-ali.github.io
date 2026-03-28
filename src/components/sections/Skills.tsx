"use client";

import { motion } from "framer-motion";
import { FiSmartphone, FiMonitor, FiServer, FiCloud, FiTool } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import skills from "@/data/skills.json";

const iconMap: Record<string, React.ReactNode> = {
  mobile: <FiSmartphone className="w-5 h-5" />,
  frontend: <FiMonitor className="w-5 h-5" />,
  backend: <FiServer className="w-5 h-5" />,
  cloud: <FiCloud className="w-5 h-5" />,
  tools: <FiTool className="w-5 h-5" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills & Technologies" subtitle="The tools and technologies I use to bring products to life" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center text-white">
                  {iconMap[group.icon]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: gi * 0.1 + si * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
