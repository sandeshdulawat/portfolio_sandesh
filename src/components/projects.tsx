"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  categoryBadges: string[];
  rating: string;
  statusTag: string;
  techStack: string;
  description: string;
  leftMetric: string;
  leftMetricLabel: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: "bnks.io",
    title: "bnks.io",
    categoryBadges: ["FinTech / PWA", "Full Stack"],
    rating: "4.9",
    statusTag: "Live Product",
    techStack: "PHP 8.3 • Chart.js • PWA • Hostinger CDN • HTTP/3",
    description:
      "A progressive web app (PWA) financial analytics and banking platform featuring interactive Chart.js visualizations, HTTP/3 protocol, and cloud CDN performance.",
    leftMetric: "FinTech PWA",
    leftMetricLabel: "Live Production",
    image: "/projects/bnks.io.webp",
    githubUrl: "https://github.com/sandeshdulawat",
    liveUrl: "https://bnks.io",
  },
  {
    id: "lionsclub",
    title: "Lions Club",
    categoryBadges: ["Community App", "Full Stack"],
    rating: "5.0",
    statusTag: "Featured",
    techStack: "React • JavaScript • Auth.js • Tailwind • Firebase",
    description:
      "A web application built for Lions Club featuring secure Auth.js user authentication, member directory, and community service management.",
    leftMetric: "Community Web App",
    leftMetricLabel: "Live Production",
    image: "/projects/lionsclub.webp",
    githubUrl: "https://github.com/sandeshdulawat",
    liveUrl: "https://tranquil-haupia-724cda.netlify.app/",
  },
  {
    id: "coreconceptinteriors",
    title: "Core Concept Interiors",
    categoryBadges: ["Interior Design", "WordPress / CMS"],
    rating: "4.9",
    statusTag: "Live Product",
    techStack: "WordPress • PHP 8.3 • MySQL • LiteSpeed • HTTP/3",
    description:
      "A high-performance interior design platform featuring dynamic project showcases, LiteSpeed web server optimization, and custom WordPress theme integration.",
    leftMetric: "Client Website",
    leftMetricLabel: "Live Production",
    image: "/projects/coreconceptintrior.webp",
    githubUrl: "https://github.com/sandeshdulawat",
    liveUrl: "https://coreconceptinteriors.in/home/",
  },
  {
    id: "kaladesignstudio",
    title: "Kala Design Studio",
    categoryBadges: ["Design Agency", "WordPress / GSAP"],
    rating: "5.0",
    statusTag: "Featured",
    techStack: "WordPress • Elementor • GSAP • Swiper • LottieFiles",
    description:
      "A modern digital design agency website featuring high-end GSAP scroll animations, interactive Lottie micro-interactions, and Elementor integration.",
    leftMetric: "Design Agency",
    leftMetricLabel: "Live Production",
    image: "/projects/kaladesignstudio.webp",
    githubUrl: "https://github.com/sandeshdulawat",
    liveUrl: "https://kaladesignstudio.com/",
  },
  {
    id: "koohlab",
    title: "Koohlab",
    categoryBadges: ["Workflow / Node", "Full Stack"],
    rating: "5.0",
    statusTag: "Featured",
    techStack: "React.js • React Flow • FastAPI • Supabase • Zustand • Tailwind",
    description:
      "An interactive node-based workflow automation platform and visual canvas editor built with React Flow, FastAPI backend, Zustand state, and Supabase database.",
    leftMetric: "Interactive Canvas",
    leftMetricLabel: "Live Production",
    image: "/projects/koohlab.webp",
    githubUrl: "https://github.com/sandeshdulawat",
    liveUrl: "https://koohlab.netlify.app/",
  },
  {
    id: "templeofsungudi",
    title: "Temple of Sungudi",
    categoryBadges: ["E-Commerce / Heritage", "Full Stack"],
    rating: "4.9",
    statusTag: "Live Product",
    techStack: "Next.js 16 • React • Tailwind CSS • Firebase • zustand",
    description:
      "A heritage e-commerce web application celebrating traditional Sungudi craft, built with Next.js App Router, Tailwind CSS, Lucide icons, and deployed on Netlify.",
    leftMetric: "Heritage Store",
    leftMetricLabel: "Live Production",
    image: "/projects/templeofsungudi1.webp",
    githubUrl: "https://github.com/sandeshdulawat",
    liveUrl: "https://courageous-valkyrie-89ff68.netlify.app/",
  },
  {
    id: "valmont",
    title: "Valmont & Co.",
    categoryBadges: ["Luxury / 3D AR", "Full Stack"],
    rating: "4.9",
    statusTag: "Featured",
    techStack: "Next.js 16 • Three.js • MySQL • Framer Motion • Netlify",
    description:
      "A luxury bespoke sculptural furniture platform featuring 3D studio turntables, WebAR view-in-room visualization, and interactive AI room styling.",
    leftMetric: "3D / AR Store",
    leftMetricLabel: "Live Production",
    image: "/projects/valmont.webp",
    githubUrl: "https://github.com/sandeshdulawat",
    liveUrl: "https://joyful-narwhal-727053.netlify.app/",
  },
  {
    id: "roveconcept",
    title: "Rove Concepts",
    categoryBadges: ["Luxury / E-Com", "Full Stack"],
    rating: "5.0",
    statusTag: "Featured",
    techStack: "Next.js 16 • React • Tailwind CSS • MySQL • Zustand • Lucide",
    description:
      "A refined luxury lifestyle & e-commerce furniture platform featuring modern catalog browsing, Zustand state management, MySQL database integration, and high-performance Next.js Turbopack architecture.",
    leftMetric: "Luxury E-Com",
    leftMetricLabel: "Live Production",
    image: "/projects/roveconcept.webp",
    githubUrl: "https://github.com/sandeshdulawat",
    liveUrl: "https://astonishing-malasada-4bea09.netlify.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
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

export default function Projects() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="w-full mt-16 md:mt-20"
    >
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-1 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Selected Projects
          </h2>
        </div>

        <a
          href="https://github.com/sandeshdulawat"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors bg-white border border-neutral-200/80 px-4 py-2 rounded-full shadow-2xs hover:shadow-xs"
        >
          <span>View All on GitHub</span>
          <span>↗</span>
        </a>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="bg-white rounded-[32px] p-4 border border-neutral-100 shadow-xs flex flex-col justify-between group hover:shadow-md transition-all duration-300"
          >
            {/* Top Image Banner Area */}
            <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden mb-5 bg-neutral-100 border border-neutral-100/80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlaid Category Badges (Top Left) */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                {project.categoryBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white font-medium text-xs shadow-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Overlaid Rating Badge (Top Right) */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white font-semibold text-xs inline-flex items-center gap-1 shadow-xs">
                  <span className="text-amber-300">★</span>
                  <span>{project.rating}</span>
                </span>
              </div>

              {/* Overlaid Carousel Indicator Dots (Bottom Center) */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
                <span className="w-2 h-2 rounded-full bg-white/40 shadow-xs" />
                <span className="w-2 h-2 rounded-full bg-white/40 shadow-xs" />
                <span className="w-2 h-2 rounded-full bg-white/40 shadow-xs" />
                <span className="w-2 h-2 rounded-full bg-white/40 shadow-xs" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="px-2 pb-2 flex flex-col flex-1 justify-between">
              <div>
                {/* Title & Status Pill */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight group-hover:text-cyan-700 transition-colors">
                    {project.title}
                  </h3>

                  <span className="px-3 py-1 rounded-full border border-neutral-200 text-xs font-medium text-neutral-700 bg-neutral-50/80">
                    {project.statusTag}
                  </span>
                </div>

                {/* Subtitle / Tech Stack */}
                <p className="text-xs font-medium text-neutral-400 mt-1 mb-2.5">
                  {project.techStack}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-500 font-normal leading-relaxed line-clamp-2 mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer Row (Price/Metric on left, CTA Button on right) */}
              <div className="flex items-center justify-between gap-3 pt-2 border-t border-neutral-100">
                <div>
                  <span className="text-base sm:text-lg font-bold text-neutral-900 block leading-tight">
                    {project.leftMetric}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-400 block">
                    {project.leftMetricLabel}
                  </span>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-neutral-800 text-white font-medium text-xs px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors shadow-xs group-hover:shadow-md"
                >
                  <span>View Project</span>
                  <span className="text-sm leading-none">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
