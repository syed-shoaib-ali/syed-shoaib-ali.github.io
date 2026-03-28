"use client";

import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import personal from "@/data/personal.json";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

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

        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
