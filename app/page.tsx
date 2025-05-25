"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen">
      <div id="hero-section" className="section-primary">
        <section id="hero">
          <Hero />
        </section>
      </div>
      <SectionDivider />
      <div id="about-section" className="section-secondary">
        <section id="about" className="py-8">
          <About />
        </section>
      </div>
      <SectionDivider invert />
      <div id="skills-section" className="section-primary">
        <section id="skills" className="py-8">
          <Skills />
        </section>
      </div>
      <SectionDivider />
      <div id="experience-section" className="section-secondary">
        <section id="experience" className="py-8">
          <Experience />
        </section>
      </div>
      <SectionDivider invert />
      <div id="projects-section" className="section-primary">
        <section id="projects" className="py-8">
          <Projects />
        </section>
      </div>
      <SectionDivider />
      <div id="education-section" className="section-secondary">
        <section id="education" className="py-8">
          <Education />
        </section>
      </div>
      <SectionDivider invert />
      <div id="achievements-section" className="section-primary">
        <section id="achievements" className="py-8">
          <Achievements />
        </section>
      </div>
      <SectionDivider />
      <div id="contact-section" className="section-secondary">
        <section id="contact" className="py-8">
          <Contact />
        </section>
      </div>
      <SectionDivider invert />
      <div className="section-primary">
        <Footer />
      </div>
    </main>
  )
}
