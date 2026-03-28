"use client";

import { motion } from "framer-motion";
import { FiSmartphone, FiGlobe, FiLayout, FiServer } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import services from "@/data/services.json";

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <FiSmartphone className="w-7 h-7" />,
  globe: <FiGlobe className="w-7 h-7" />,
  palette: <FiLayout className="w-7 h-7" />,
  server: <FiServer className="w-7 h-7" />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What I Do" subtitle="End-to-end development services to bring your vision to life" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">&#8226;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
