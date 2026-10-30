"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Download, ArrowUpRight, Cpu, FileSpreadsheet, Layers, ShieldCheck, Sparkles } from "lucide-react";

interface DesktopApp {
  id: string;
  title: string;
  eyebrow: string;
  categoryBadges: string[];
  statusTag: string;
  techStack: string;
  description: string;
  highlightText: string;
  leftMetric: string;
  leftMetricLabel: string;
  githubUrl: string;
  primaryAction: {
    label: string;
    url: string;
    icon: "download" | "external";
  };
  secondaryAction?: {
    label: string;
    url: string;
  };
  screenshots: {
    label: string;
    src: string;
    description: string;
  }[];
  capabilities: string[];
}

const desktopApps: DesktopApp[] = [
  {
    id: "sha256-hex",
    title: "SHA-256 Converter & Generator",
    eyebrow: "HEX Enterprise Utility",
    categoryBadges: ["Desktop App", "Windows x64", "Cryptography"],
    statusTag: "Production Tool",
    techStack: "Python • Multi-threading • Batch Cryptography • CSV Stream • Tkinter / GUI",
    description:
      "High-performance native desktop software engineered to generate SHA-256 cryptographic hashes for massive datasets with 100+ crore CSV records. Features multi-threaded batch folder hashing, detained record exclusions, and a dedicated reverse Hash Matcher engine.",
    highlightText: "100+ Crore CSV Records Capacity",
    leftMetric: "100+ Crore Records",
    leftMetricLabel: "Big Data Multi-Stream",
    githubUrl: "https://github.com/sandeshdulawat",
    primaryAction: {
      label: "View Source / Tool",
      url: "https://github.com/sandeshdulawat",
      icon: "external",
    },
    screenshots: [
      {
        label: "Single File",
        src: "/projects/sha256-single.png",
        description: "Single CSV hashing with detained record exclusion & '91' prepend",
      },
      {
        label: "Folder Batch",
        src: "/projects/sha256-folder.png",
        description: "Batch multi-file folder stream processing for massive datasets",
      },
      {
        label: "Hash Matcher",
        src: "/projects/sha256-matcher.png",
        description: "Reverse lookup engine matching mobile number lists with SHA-256 hashes",
      },
    ],
    capabilities: [
      "100+ Crore Row Processing",
      "Batch Folder Stream",
      "Reverse Hash Matcher",
      "Detained Exclusion Filter",
    ],
  },
  {
    id: "koohlab-desktop",
    title: "Koohlab Desktop Studio",
    eyebrow: "AI Node Canvas & Automation",
    categoryBadges: ["Desktop App", "Windows .exe", "AI Studio"],
    statusTag: "GitHub Release",
    techStack: "Electron • React Flow • FastAPI • Supabase • Zustand • Tailwind",
    description:
      "Standalone Windows desktop application (.exe) edition of Koohlab. Empowers developers and digital creators with an infinite node-based visual canvas for multi-model AI generation, interactive prompt chaining, real-time minimap navigation, and persistent workspace states.",
    highlightText: "Windows .exe GitHub Release",
    leftMetric: "Standalone .exe",
    leftMetricLabel: "Desktop Edition",
    githubUrl: "https://github.com/sandeshdulawat/koohlab-downloads/releases",
    primaryAction: {
      label: "Download .exe (v0.1.0)",
      url: "https://github.com/sandeshdulawat/koohlab-downloads/releases/download/koohlab/Koohlab.Setup.0.1.0.exe",
      icon: "download",
    },
    secondaryAction: {
      label: "Live Web App",
      url: "https://koohlab.netlify.app/",
    },
    screenshots: [
      {
        label: "Node Canvas",
        src: "/projects/koohlab-exe.png",
        description: "Full desktop window with AI node graph, presets, and minimap",
      },
    ],
    capabilities: [
      "Offline / Standalone .exe",
      "Infinite Node Canvas",
      "Multi-Model AI Pipelines",
      "Real-time Workspace State",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DesktopApps() {
  const [activeTab, setActiveTab] = useState<Record<string, number>>({
    "sha256-hex": 0,
    "koohlab-desktop": 0,
  });

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="w-full mt-16 md:mt-20"
      id="desktop-applications"
    >
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1 flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5" />
            Native Software & Tools
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Desktop Applications
          </h2>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-white border border-neutral-200/80 px-4 py-2 rounded-full shadow-2xs">
          <Cpu className="w-3.5 h-3.5 text-indigo-600" />
          <span>High Performance Native Executables</span>
        </div>
      </div>

      {/* Grid of 2 Desktop Apps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {desktopApps.map((app) => {
          const currentScreenshotIndex = activeTab[app.id] ?? 0;
          const currentScreenshot = app.screenshots[currentScreenshotIndex] || app.screenshots[0];

          return (
            <motion.div
              key={app.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-white rounded-[32px] p-5 sm:p-6 border border-neutral-100 shadow-xs flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Top Desktop Frame / Preview Area */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[24px] overflow-hidden mb-5 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-200/60 shadow-inner flex flex-col justify-between">
                  {/* Fake macOS / Windows Window Titlebar Overlay */}
                  <div className="absolute top-0 left-0 right-0 h-9 bg-neutral-950/80 backdrop-blur-md border-b border-white/10 z-20 flex items-center justify-between px-3.5">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-[11px] font-mono text-neutral-400 ml-2 font-medium tracking-tight truncate max-w-[150px] sm:max-w-none">
                        {app.title} — {currentScreenshot.label}
                      </span>
                    </div>

                    {/* Windows .exe Tag */}
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-[10px] font-mono uppercase font-bold tracking-wider">
                        {app.id === "sha256-hex" ? "WIN x64" : ".EXE RELEASE"}
                      </span>
                    </div>
                  </div>

                  {/* Screenshot Image with Smooth Tab Crossfade */}
                  <div className="relative w-full h-full pt-9 pb-2 flex items-center justify-center p-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentScreenshot.src}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full h-full rounded-[14px] overflow-hidden bg-neutral-900 flex items-center justify-center"
                      >
                        <Image
                          src={currentScreenshot.src}
                          alt={`${app.title} - ${currentScreenshot.label}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Overlaid Bottom Bar: Multi-Screenshot Tabs (if > 1) */}
                  {app.screenshots.length > 1 && (
                    <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between gap-2 pointer-events-auto">
                      <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-950/85 backdrop-blur-md border border-white/15 shadow-lg">
                        {app.screenshots.map((s, idx) => (
                          <button
                            key={s.label}
                            type="button"
                            onClick={() =>
                              setActiveTab((prev) => ({
                                ...prev,
                                [app.id]: idx,
                              }))
                            }
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${currentScreenshotIndex === idx
                                ? "bg-white text-neutral-950 shadow-sm"
                                : "text-neutral-400 hover:text-white"
                              }`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>

                      <span className="hidden sm:inline-flex text-[11px] font-medium text-neutral-400 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        {currentScreenshot.description}
                      </span>
                    </div>
                  )}

                  {/* Highlight Banner if single screenshot (Koohlab) */}
                  {app.screenshots.length === 1 && (
                    <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-indigo-400/30 text-indigo-300 font-semibold text-[11px] shadow-md">
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        <span>Interactive Node Graph Engine</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Header Information */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block mb-0.5">
                        {app.eyebrow}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {app.title}
                      </h3>
                    </div>

                    <span className="px-3 py-1 rounded-full border border-neutral-200 text-xs font-medium text-neutral-700 bg-neutral-50/80 shrink-0">
                      {app.statusTag}
                    </span>
                  </div>

                  {/* Highlight pill (e.g. 100+ Crore CSV / Windows .exe) */}
                  <div className="my-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-900 shadow-2xs">
                      {app.id === "sha256-hex" ? (
                        <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      ) : (
                        <Download className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      )}
                      <span>{app.highlightText}</span>
                    </span>
                  </div>

                  {/* Tech stack */}
                  <p className="text-xs font-medium text-neutral-400 mt-1 mb-2.5">
                    {app.techStack}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 font-normal leading-relaxed mb-4">
                    {app.description}
                  </p>

                  {/* Capabilities Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {app.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-neutral-700 text-[11px] font-medium"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-neutral-100">
                <div>
                  <span className="text-base sm:text-lg font-bold text-neutral-900 block leading-tight">
                    {app.leftMetric}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-400 block">
                    {app.leftMetricLabel}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {app.secondaryAction && (
                    <a
                      href={app.secondaryAction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 font-medium text-xs px-3.5 py-2.5 rounded-full inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{app.secondaryAction.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={app.primaryAction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs px-4 py-2.5 rounded-full inline-flex items-center justify-center gap-1.5 transition-colors shadow-xs group-hover:shadow-md"
                  >
                    {app.primaryAction.icon === "download" ? (
                      <Download className="w-3.5 h-3.5 text-indigo-300" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                    )}
                    <span>{app.primaryAction.label}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
