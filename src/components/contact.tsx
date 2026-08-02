"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || result.error) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const }}
      className="w-full mt-16 md:mt-24 mb-10 scroll-mt-8"
    >
      {/* Purple Gradient Card Frame */}
      <div className="w-full rounded-[36px] sm:rounded-[40px] p-6 sm:p-10 md:p-16 bg-gradient-to-br from-[#7084ff] via-[#8574ff] to-[#6351f7] text-white shadow-md relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 leading-[1.15]">
            Contact with me to sizzle your project
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/90 font-normal max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            Feel free to contact me if having any questions. I&apos;m available for new projects or just for chatting.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Input Row: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={loading}
                  className="w-full bg-white/15 backdrop-blur-md rounded-2xl px-5 py-4 text-sm border border-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/70 text-white shadow-2xs transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={loading}
                  className="w-full bg-white/15 backdrop-blur-md rounded-2xl px-5 py-4 text-sm border border-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/70 text-white shadow-2xs transition-all disabled:opacity-50"
                />
              </div>
            </div>

            {/* Textarea: Work Description */}
            <div>
              <textarea
                placeholder="Work Description..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                disabled={loading}
                className="w-full bg-white/15 backdrop-blur-md rounded-[24px] p-5 text-sm border border-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/70 text-white shadow-2xs transition-all resize-none min-h-[140px] disabled:opacity-50"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-200 text-sm font-medium bg-red-500/20 rounded-xl px-4 py-2 text-center">
                {errorMessage}
              </p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-base py-4 rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending Message...
                </span>
              ) : submitted ? (
                <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Message Sent Successfully!
                </span>
              ) : (
                <span>Submit</span>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
