"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex items-center justify-between py-4 px-6 md:px-10 rounded-[28px] bg-white/80 backdrop-blur-md border border-neutral-200/60 shadow-xs mb-8 md:mb-12"
    >
      {/* Brand Logo */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-3 group cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white font-extrabold text-base shadow-sm group-hover:scale-105 transition-transform duration-300">
          S
        </div>
        <span className="font-bold tracking-widest text-neutral-900 text-sm md:text-base uppercase">
          SANDESH DULAWAT
        </span>
      </div>

      {/* Action Button */}
      <motion.button
        onClick={() => {
          const el = document.getElementById("contact");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm md:text-base px-6 py-2.5 rounded-full transition-colors shadow-sm cursor-pointer"
      >
        Book a call
      </motion.button>
    </motion.header>
  );
}
