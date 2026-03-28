"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import emailjs from "@emailjs/browser";
import SectionHeading from "../ui/SectionHeading";
import personal from "@/data/personal.json";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setError(false);

    emailjs
      .sendForm(
        "service_exygbu8",
        "template_kfmwzt6",
        formRef.current,
        "tD2-PqfgJ8uo6pxHc",
      )
      .then(() => {
        setSubmitted(true);
        setSending(false);
        formRef.current?.reset();
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(() => {
        setError(true);
        setSending(false);
        setTimeout(() => setError(false), 3000);
      });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Let's build something amazing together"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let&apos;s discuss your project
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I&apos;m always open to new opportunities and interesting
                projects. Whether you need a mobile app, web application, or
                full-stack solution, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </div>
                  <div className="text-gray-900 dark:text-white font-medium">
                    {personal.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-500">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </div>
                  <div className="text-gray-900 dark:text-white font-medium">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {personal.social.linkedin && (
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                >
                  <FiLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
              {personal.social.fiverr && (
                <a
                  href={personal.social.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                >
                  <SiFiverr className="w-4 h-4" />
                  Fiverr
                </a>
              )}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  placeholder="Project discussion"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted || sending}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-400 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5 disabled:opacity-80 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <FiCheck className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : error ? (
                  <>
                    <FiAlertCircle className="w-5 h-5" />
                    Failed, try again
                  </>
                ) : sending ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
