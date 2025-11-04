import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import About from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Skills />
        <About />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}