"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Linkedin, Mail, Github, ChevronDown, Instagram } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Typewriter intro component
function HeroIntro({ onDone }: { onDone: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const fullText = "Namaste! This is me - job ready.";
  const altEnding = "(ish)";

  useEffect(() => {
    let i = 0;
    let phase: 'typing' | 'backspacing' | 'altTyping' = 'typing';
    let altIndex = 0;
    let interval: NodeJS.Timeout;

    const type = () => {
      if (phase === 'typing') {
        if (i <= fullText.length) {
          setDisplayed(fullText.slice(0, i));
          i++;
          interval = setTimeout(type, 110);
        } else {
          phase = 'backspacing';
          interval = setTimeout(type, 400);
        }
      } else if (phase === 'backspacing') {
        // Remove the period
        setDisplayed(fullText.slice(0, fullText.length - 1));
        phase = 'altTyping';
        altIndex = 0;
        interval = setTimeout(type, 250);
      } else if (phase === 'altTyping') {
        if (altIndex <= altEnding.length) {
          setDisplayed(fullText.slice(0, fullText.length - 1) + altEnding.slice(0, altIndex));
          altIndex++;
          if (altIndex <= altEnding.length) {
            interval = setTimeout(type, 110);
          } else {
            setDoneTyping(true);
            setTimeout(onDone, 700);
          }
        }
      }
    };
    type();
    return () => clearTimeout(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: doneTyping ? 0 : 1 }}
      transition={{ opacity: { duration: 0.7, ease: "easeInOut" } }}
      style={{ pointerEvents: doneTyping ? "none" : "auto" }}
    >
      <span className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400">
        {displayed}
        <span className="inline-block w-2 h-20 align-middle bg-emerald-500 animate-pulse ml-1" style={{visibility: doneTyping ? 'hidden' : 'visible'}}></span>
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const { scrollY } = useScroll()
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  if (!mounted) return null

  return (
    <section id="hero" className="relative min-h-screen bg-white dark:bg-slate-900 overflow-hidden">
      {showIntro && <HeroIntro onDone={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/20"></div>

            {/* Geometric pattern overlay (no dots) */}
            <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="geometric" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20L20 0L40 20L20 40Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#geometric)" />
              </svg>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
              <Image
                src="/grid-pattern.png"
                alt="Grid Pattern"
                fill
                className="object-cover opacity-50 dark:opacity-30"
                priority
              />
            </div>

            {/* Modern decorative elements */}
            <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-emerald-300/10 dark:bg-emerald-700/10 blur-3xl"></div>
            <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-green-300/10 dark:bg-green-700/10 blur-3xl"></div>
          </div>

          <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between pt-4 pb-4 mt-20">
              {/* Left content area */}
              <motion.div
                className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <div className="max-w-xl">
                  {/* Modern name presentation */}
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400">
                      Pankaj Ahuja
                    </span>
                  </h1>

                  {/* Modern tagline with highlight */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 0.08 }}
                  >
                    <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                      Building innovative
                      <span className="relative inline-block mx-2">
                        <span className="relative z-10">web solutions</span>
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-3 bg-emerald-200 dark:bg-emerald-900/60 -z-10"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          style={{ transformOrigin: 'left' }}
                        />
                      </span>
                    </p>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                      Passionate Full Stack Developer and Software Engineer with expertise in modern web technologies.
                      Committed to crafting efficient, scalable solutions and delivering exceptional user experiences
                      through clean, maintainable code.
                    </p>

                    {/* Modern button group */}
                    <div className="flex flex-wrap gap-4 mb-12">
                      <Button
                        asChild
                        className="rounded-full px-8 py-6 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 border-0 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-700/20"
                      >
                        <a href="/resume.pdf" download>
                          Download Resume
                          <Download className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={scrollToProjects}
                        className="rounded-full px-8 py-6 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm"
                      >
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Modern stats display */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">2</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Months Experience</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">5+</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Projects</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">8+</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Technologies</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right profile image area */}
              <motion.div
                className="w-full lg:w-1/2 flex justify-center lg:justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <div className="relative">
                  {/* Profile image with visible gradient border and shadow */}
                  <div className="relative w-[300px] h-[400px] sm:w-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Gradient border using pseudo-element */}
                    <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r from-emerald-500 to-green-400 dark:from-emerald-400 dark:to-green-300 z-10">
                      {/* Inner container for image */}
                      <div className="absolute inset-0 rounded-[calc(1.5rem-3px)] overflow-hidden">
                        <Image src="/hero-picture.jpg" alt="Pankaj Ahuja" fill className="object-cover" priority />
                      </div>
                    </div>
                  </div>

                  {/* Modern social links */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 p-3 px-6 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 z-30">
                    <a
                      href="https://www.linkedin.com/in/pankaj-ahuja-9a7a96286/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:pankajahuja44@gmail.com"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                    <a
                      href="https://github.com/Skull-crusher44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Modern scroll indicator with animation */}
          <motion.div
            ref={scrollRef}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
            style={{ opacity: scrollIndicatorOpacity }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span className="text-xs text-slate-500 dark:text-slate-400 mb-2">Scroll to explore</span>
            <motion.div
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md backdrop-blur-sm"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            </motion.div>
          </motion.div>

          {/* Wavy section divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
            <svg
              className="relative block w-full h-[120px] drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white dark:fill-slate-900"
                style={{ filter: 'drop-shadow(0 12px 24px rgba(16, 185, 129, 0.25))' }}
              ></path>
            </svg>
          </div>
        </>
      )}
    </section>
  )
}
