"use client";

import { motion } from "framer-motion";

export default function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`absolute rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none ${className}`}
    />
  );
}
