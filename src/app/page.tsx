import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#e8eae9] p-3 sm:p-6 md:px-24 md:py-10 flex flex-col items-center justify-center font-sans antialiased">
        {/* Main Canvas Frame */}

        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />

      </main>
    </SmoothScroll>
  );
}
