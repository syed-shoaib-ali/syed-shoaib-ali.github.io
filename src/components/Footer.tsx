"use client";

import { FiLinkedin, FiGithub, FiHeart } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import personal from "@/data/personal.json";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            &copy; {year} {personal.name}. Built with <FiHeart className="w-3 h-3 text-red-500 inline" /> and Next.js
          </p>
          <div className="flex items-center gap-4">
            {personal.social.linkedin && (
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            )}
            {personal.social.github && (
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {personal.social.fiverr && (
              <a href={personal.social.fiverr} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                <SiFiverr className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
