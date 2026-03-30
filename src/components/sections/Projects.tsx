"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import projects from "@/data/projects.json";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const selectedProject = projects.find((p) => p.id === selectedId);

  // Lock body scroll when modal is open
  if (typeof document !== "undefined") {
    document.body.style.overflow = selectedId ? "hidden" : "";
  }

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="A showcase of applications I've built for clients worldwide" />
        <div className="flex justify-center -mt-6 mb-8">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-full px-5 py-2">
            Most of my work is bound under NDA — these are select projects I can share.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-400 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedId(project.id)}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-emerald-500/10 to-cyan-400/10 dark:from-emerald-500/20 dark:to-cyan-400/20 flex items-center justify-center overflow-hidden">
                  {"status" in project && project.status === "coming-soon" && (
                    <span className="absolute top-3 right-3 z-10 text-xs font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-500 px-3 py-1 rounded-full shadow-md">
                      Coming Soon
                    </span>
                  )}
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity">
                    {project.title.split(" ").map(w => w[0]).join("")}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-medium text-amber-500 bg-amber-50 dark:bg-amber-950 px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded project modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-950 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-200 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-52 bg-gradient-to-br from-emerald-500/10 to-cyan-400/10 dark:from-emerald-500/20 dark:to-cyan-400/20 flex items-center justify-center">
                {"status" in selectedProject && selectedProject.status === "coming-soon" && (
                  <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-500 px-3 py-1 rounded-full shadow-md">
                    Coming Soon
                  </span>
                )}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent opacity-40">
                  {selectedProject.title.split(" ").map(w => w[0]).join("")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="text-xs font-medium text-amber-500 bg-amber-50 dark:bg-amber-950 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech stack */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                  Access to most apps requires credentials from the project owner, as they were built for specific clients.
                </p>

                {/* Links */}
                {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                  <div className="flex gap-3 pt-2">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-400 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                      >
                        <FiGithub className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
