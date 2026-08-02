import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/sandeshdulawat"),
  title: {
    default: "Sandesh Dulawat — Full Stack Web Developer",
    template: "%s | Sandesh Dulawat",
  },
  description:
    "Sandesh Dulawat is a Full Stack Web Developer specializing in Next.js, TypeScript, React, Node.js, and cloud applications. Explore projects, technical skills, and production engineering impact.",
  keywords: [
    "Sandesh Dulawat",
    "sandeshdulawat",
    "Sandesh Dulawat Portfolio",
    "Sandesh Dulawat Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Software Engineer",
    "Web Developer India",
  ],
  authors: [{ name: "Sandesh Dulawat", url: "https://github.com/sandeshdulawat" }],
  creator: "Sandesh Dulawat",
  publisher: "Sandesh Dulawat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/sandeshdulawat",
    title: "Sandesh Dulawat — Full Stack Web Developer",
    description:
      "Full Stack Web Developer building exceptional digital experiences with Next.js, React, Node.js, and TypeScript.",
    siteName: "Sandesh Dulawat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Dulawat — Full Stack Developer",
    description:
      "Full Stack Web Developer crafting fast, accessible, visually appealing, and responsive web applications.",
    creator: "@sandeshdulawat",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandesh Dulawat",
  alternateName: "sandeshdulawat",
  url: "https://github.com/sandeshdulawat",
  jobTitle: "Full Stack Web Developer",
  sameAs: [
    "https://github.com/sandeshdulawat",
    "https://www.linkedin.com/in/sandesh-dulawat",
    "https://x.com/sandeshdulawat",
    "https://dev.to/sandeshdulawat",
    "https://www.instagram.com/sandeshdulawat",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Tailwind CSS",
    "REST APIs",
    "GraphQL",
    "Full Stack Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans min-h-screen bg-[#e8eae9] text-neutral-900 selection:bg-cyan-200 selection:text-cyan-900"
      >
        {children}
      </body>
    </html>
  );
}
