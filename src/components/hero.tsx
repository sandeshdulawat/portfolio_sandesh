"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import GitHubContributionGraph from "./github-calendar";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch"
    >
      {/* Left Column: Headline & Intro */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-6 flex flex-col justify-between space-y-8 lg:pr-4"
      >
        <div className="space-y-6">
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d6f5f2] text-[#087f8c] font-semibold text-xs md:text-sm tracking-wide shadow-xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#087f8c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#087f8c]"></span>
            </span>
            <span>AVAILABLE FOR WORK</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08]"
          >
            Hi, I’m a <br />
            Full Stack <br />
            Developer
            <span className="inline-block text-3xl sm:text-4xl lg:text-5xl font-normal align-super text-neutral-400 ml-1">
              ©
            </span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-500 text-base sm:text-lg max-w-md font-normal leading-relaxed"
          >
            build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
          </motion.p>
        </div>

        {/* Contact Us CTA Button */}
        <motion.div variants={itemVariants} className="pt-2">
          <motion.button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-base px-8 py-3.5 rounded-full shadow-md transition-colors inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>Contact Us</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Column: Bento Grid Layout */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr"
      >
        {/* Bento Card 1: Sandesh Dulawat GitHub Contribution Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white rounded-[32px] p-6 border border-neutral-100 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[260px]"
        >
          {/* Header text */}
          <div className="z-10 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Sandesh Dulawat
              </h3>
              <a
                href="https://github.com/sandeshdulawat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-cyan-600 hover:text-cyan-700 transition-colors mt-0.5 inline-flex items-center gap-1"
              >
              </a>
            </div>
            <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
          </div>

          {/* GitHub Heatmap Grid Area */}
          <div className="my-3 relative w-full h-36 rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50 flex items-center justify-center p-2 group">
            <GitHubContributionGraph />
          </div>

          {/* Badges Footer */}
          <div className="flex items-center justify-between gap-2 z-10 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-[11px] font-medium shadow-xs">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GITHUB ACTIVITY</span>
            </div>

            <div className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-semibold border border-emerald-100 shadow-2xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE DATA</span>
            </div>
          </div>
        </motion.div>

        {/* Bento Card 2: Profile Portrait Image */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-[32px] overflow-hidden shadow-sm border border-neutral-100 relative min-h-[260px] group cursor-pointer"
        >
          <Image
            src="/avatar.webp"
            alt="Designer Portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>

        {/* Bento Card 3: Merged Full-Stack Tech Stack & Impact Metrics (Purple Gradient) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-[32px] p-6 bg-gradient-to-br from-[#7084ff] via-[#8574ff] to-[#6351f7] text-white flex flex-col justify-between shadow-md relative overflow-hidden min-h-[220px]"
        >
          {/* Subtle light mesh blur */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-indigo-400/30 rounded-full blur-xl pointer-events-none" />

          {/* Top Header */}
          <div className="flex items-center justify-between relative z-10">
            <p className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide">
              Full-Stack Tech & Impact ⚡
            </p>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-xs">
              Production Ready
            </span>
          </div>

          {/* Tech Stack Pills Row */}
          <div className="flex flex-wrap items-center gap-1.5 py-2 relative z-10">
            <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-medium text-[11px] flex items-center gap-1 shadow-2xs hover:bg-white/25 transition-colors">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 18.232l-5.632-8.08v8.08H10.15V5.768h1.832l5.584 8.08V5.768h1.784v12.464h-1.784z" />
              </svg>
              <span>Next.js</span>
            </span>

            <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-medium text-[11px] flex items-center gap-1 shadow-2xs hover:bg-white/25 transition-colors">
              <span className="font-bold text-[10px] bg-white text-[#6351f7] w-3 h-3 rounded-[2px] inline-flex items-center justify-center leading-none">TS</span>
              <span>TypeScript</span>
            </span>

            <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-medium text-[11px] flex items-center gap-1 shadow-2xs hover:bg-white/25 transition-colors">
              <svg className="w-3 h-3 fill-current text-emerald-300" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Node.js</span>
            </span>

            <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-medium text-[11px] flex items-center gap-1 shadow-2xs hover:bg-white/25 transition-colors">
              <svg className="w-3 h-3 fill-current text-cyan-200" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2zm0 14c-3.87 0-7-1.34-7-2v-2.14c1.84 1.13 4.8 1.64 7 1.64s5.16-.51 7-1.64V17c0 .66-3.13 2-7 2zm0-5c-3.87 0-7-1.34-7-2v-2.14c1.84 1.13 4.8 1.64 7 1.64s5.16-.51 7-1.64V12c0 .66-3.13 2-7 2z" />
              </svg>
              <span>Postgres</span>
            </span>

            <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-medium text-[11px] flex items-center gap-1 shadow-2xs hover:bg-white/25 transition-colors">
              <svg className="w-3 h-3 fill-current text-sky-200" viewBox="0 0 24 24">
                <path d="M13.983 11.078c.404-.77.925-1.433 1.547-1.954.722-.605 1.57-.96 2.502-.96 1.094 0 1.93.435 2.52 1.3.498.733.748 1.666.748 2.802 0 .54-.08 1.14-.24 1.8h-6.286c.046.733.275 1.306.687 1.72.412.413.98.62 1.705.62.614 0 1.137-.137 1.57-.413.433-.275.768-.656 1.004-1.14l1.83.916c-.45.872-1.078 1.54-1.884 2.006-.807.468-1.77.702-2.89.702-1.54 0-2.775-.48-3.704-1.442-.93-.96-1.395-2.26-1.395-3.9 0-1.65.46-2.98 1.38-3.99.92-1.01 2.12-1.516 3.6-1.516 1.43 0 2.58.468 3.45 1.404.87.937 1.3 2.185 1.3 3.747 0 .15-.01.35-.03.6H13.983z" />
              </svg>
              <span>Docker</span>
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 pt-1 relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/15 flex flex-col justify-between">
              <span className="text-lg font-extrabold tracking-tight text-white">99.9%</span>
              <span className="text-[9px] font-medium text-white/80 uppercase tracking-wider mt-0.5">Uptime</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/15 flex flex-col justify-between">
              <span className="text-lg font-extrabold tracking-tight text-white">50+</span>
              <span className="text-[9px] font-medium text-white/80 uppercase tracking-wider mt-0.5">APIs Built</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/15 flex flex-col justify-between">
              <span className="text-lg font-extrabold tracking-tight text-white">&lt;80ms</span>
              <span className="text-[9px] font-medium text-white/80 uppercase tracking-wider mt-0.5">Latency</span>
            </div>
          </div>
        </motion.div>

        {/* Bento Card 4: Social Links Grid */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-neutral-100/60 rounded-[32px] p-5 flex items-center justify-center border border-neutral-200/50 shadow-xs min-h-[170px]"
        >
          <div className="grid grid-cols-3 gap-3.5 w-full max-w-[210px]">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, rotate: index % 2 === 0 ? 3 : -3 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-12 h-12 rounded-full bg-white shadow-xs border border-neutral-100 flex items-center justify-center cursor-pointer transition-shadow hover:shadow-md"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/sandeshdulawat",
    icon: (
      <svg className="w-5 h-5 fill-[#181717]" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sandesh-dulawat",
    icon: (
      <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/sandeshdulawat",
    icon: (
      <svg className="w-4 h-4 fill-[#0f1419]" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Dev.to",
    url: "https://dev.to/sandeshdulawat",
    icon: (
      <svg className="w-5 h-5 fill-[#0A0A0A]" viewBox="0 0 448 512">
        <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM143.43 291.95c0 14.51-4.84 26.12-14.52 34.83-9.68 8.71-22.74 13.06-39.18 13.06H54.79V172.18h34.94c16.44 0 29.5 4.35 39.18 13.06 9.68 8.71 14.52 20.32 14.52 34.83v71.88zm89.91-105.74v34.83h-34.94v26.12h30.54v34.83h-30.54v26.12h34.94v34.83h-74.24V172.18h74.24zm128.26 0l-39.27 167.09h-30.54l-39.27-167.09h34.94l23.56 113.25 23.56-113.25h27.02z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sandeshdulawat",
    icon: (
      <svg className="w-5 h-5 fill-[#E4405F]" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:sdulawat.work@gmail.com",
    icon: (
      <svg className="w-5 h-5 fill-[#EA4335]" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];
