"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import reviews from "@/data/reviews.json";

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => {
    setAutoplay(false);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  };
  const next = () => {
    setAutoplay(false);
    setCurrent((c) => (c + 1) % reviews.length);
  };

  const review = reviews[current];

  return (
    <section id="reviews" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Client Reviews" subtitle="What clients say about working with me" />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  {review.name[0]}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{review.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {review.role} &bull; {review.country}
                </p>
                <p className="text-xs text-emerald-500 mt-1">
                  Project: {review.project} &bull; via {review.platform}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoplay(false); setCurrent(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-gradient-to-r from-emerald-500 to-cyan-400"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
