"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    accentColor: string; // Tailwind border & text accent class
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Javascript", accentColor: "border-emerald-500/40 text-emerald-700 bg-emerald-50/50" },
      { name: "Typescript", accentColor: "border-blue-500/40 text-blue-700 bg-blue-50/50" },
      { name: "React", accentColor: "border-sky-500/40 text-sky-700 bg-sky-50/50" },
      { name: "Next.js", accentColor: "border-neutral-300 text-neutral-800 bg-neutral-50/80" },
      { name: "Tailwind CSS", accentColor: "border-amber-500/40 text-amber-700 bg-amber-50/50" },
      { name: "Shadcn UI", accentColor: "border-neutral-300 text-neutral-800 bg-neutral-50/80" },
      { name: "Zustand", accentColor: "border-amber-600/40 text-amber-800 bg-amber-50/50" },
      { name: "Zod", accentColor: "border-indigo-500/40 text-indigo-700 bg-indigo-50/50" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", accentColor: "border-emerald-500/40 text-emerald-700 bg-emerald-50/50" },
      { name: "Express", accentColor: "border-neutral-300 text-neutral-800 bg-neutral-50/80" },
      { name: "Prisma ORM", accentColor: "border-indigo-500/40 text-indigo-700 bg-indigo-50/50" },
      { name: "Auth.js", accentColor: "border-purple-500/40 text-purple-700 bg-purple-50/50" },
      { name: "REST APIs", accentColor: "border-blue-500/40 text-blue-700 bg-blue-50/50" },
      { name: "GraphQL", accentColor: "border-pink-500/40 text-pink-700 bg-pink-50/50" },
      { name: "WebSockets", accentColor: "border-amber-500/40 text-amber-700 bg-amber-50/50" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", accentColor: "border-blue-500/40 text-blue-700 bg-blue-50/50" },
      { name: "MongoDB", accentColor: "border-emerald-500/40 text-emerald-700 bg-emerald-50/50" },
      { name: "Redis", accentColor: "border-rose-500/40 text-rose-700 bg-rose-50/50" },
      { name: "Supabase", accentColor: "border-emerald-600/40 text-emerald-800 bg-emerald-50/50" },
      { name: "Neon", accentColor: "border-teal-500/40 text-teal-700 bg-teal-50/50" },
      { name: "SQLite", accentColor: "border-sky-500/40 text-sky-700 bg-sky-50/50" },
      { name: "Turso", accentColor: "border-cyan-500/40 text-cyan-700 bg-cyan-50/50" },
      { name: "Firebase", accentColor: "border-amber-500/40 text-amber-700 bg-amber-50/50" },
    ],
  },
  {
    title: "Devops",
    skills: [
      { name: "Git", accentColor: "border-orange-500/40 text-orange-700 bg-orange-50/50" },
      { name: "Linux", accentColor: "border-amber-500/40 text-amber-700 bg-amber-50/50" },
      { name: "Docker", accentColor: "border-sky-500/40 text-sky-700 bg-sky-50/50" },
      { name: "GitHub Actions", accentColor: "border-blue-500/40 text-blue-700 bg-blue-50/50" },
      { name: "AWS", accentColor: "border-amber-600/40 text-amber-800 bg-amber-50/50" },
      { name: "Vercel", accentColor: "border-neutral-300 text-neutral-800 bg-neutral-50/80" },
      { name: "Cloudflare", accentColor: "border-orange-600/40 text-orange-800 bg-orange-50/50" },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "OpenAI API", accentColor: "border-emerald-500/40 text-emerald-700 bg-emerald-50/50" },
      { name: "Gemini API", accentColor: "border-blue-500/40 text-blue-700 bg-blue-50/50" },
      { name: "Claude API", accentColor: "border-amber-600/40 text-amber-800 bg-amber-50/50" },
      { name: "MCP", accentColor: "border-purple-500/40 text-purple-700 bg-purple-50/50" },
      { name: "RAG", accentColor: "border-teal-500/40 text-teal-700 bg-teal-50/50" },
      { name: "AI Agents", accentColor: "border-indigo-500/40 text-indigo-700 bg-indigo-50/50" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", accentColor: "border-amber-600/40 text-amber-800 bg-amber-50/50" },
      { name: "Firebase", accentColor: "border-amber-500/40 text-amber-700 bg-amber-50/50" },
      { name: "Supabase", accentColor: "border-emerald-600/40 text-emerald-800 bg-emerald-50/50" },
      { name: "Cloudflare Workers", accentColor: "border-orange-600/40 text-orange-800 bg-orange-50/50" },
      { name: "Vercel", accentColor: "border-neutral-300 text-neutral-800 bg-neutral-50/80" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", accentColor: "border-neutral-300 text-neutral-800 bg-neutral-50/80" },
      { name: "Figma", accentColor: "border-purple-500/40 text-purple-700 bg-purple-50/50" },
      { name: "Postman", accentColor: "border-orange-500/40 text-orange-700 bg-orange-50/50" },
      { name: "Bruno", accentColor: "border-yellow-500/40 text-yellow-800 bg-yellow-50/50" },
      { name: "VS Code", accentColor: "border-blue-500/40 text-blue-700 bg-blue-50/50" },
      { name: "Docker Desktop", accentColor: "border-sky-500/40 text-sky-700 bg-sky-50/50" },
    ],
  },
  {
    title: "Architecture",
    skills: [
      { name: "REST API", accentColor: "border-blue-500/40 text-blue-700 bg-blue-50/50" },
      { name: "GraphQL", accentColor: "border-pink-500/40 text-pink-700 bg-pink-50/50" },
      { name: "Microservices", accentColor: "border-emerald-500/40 text-emerald-700 bg-emerald-50/50" },
      { name: "Caching", accentColor: "border-rose-500/40 text-rose-700 bg-rose-50/50" },
      { name: "Authentication", accentColor: "border-indigo-500/40 text-indigo-700 bg-indigo-50/50" },
      { name: "System Design", accentColor: "border-sky-500/40 text-sky-700 bg-sky-50/50" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
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

export default function Skills() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full mt-16 md:mt-20"
    >
      {/* Section Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
          What I know
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-[32px] p-6 border border-neutral-100 shadow-xs flex flex-col min-h-[220px] transition-shadow hover:shadow-md"
          >
            {/* Category Title */}
            <h3 className="text-xl font-bold text-neutral-900 mb-5">
              {category.title}
            </h3>

            {/* Skill Pills Container */}
            <div className="flex flex-wrap gap-2 items-start">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-2 py-1 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 cursor-default ${skill.accentColor}`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
