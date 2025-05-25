
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ExternalLink, Github, ChevronDown, ChevronUp, Award } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  interface Project {
    title: string;
    description: string;
    image: string;
    repoUrl?: string;
    liveUrl?: string;
    showRepo: boolean;
    showLive: boolean;
  }

  const projects: Project[] = [
    {
      title: "Connected Vehicle Data Platform",
      description:
        "Currently developing a comprehensive web platform at CerebrumX for processing and analyzing connected vehicle data. Building full-stack features using React.js and Node.js, implementing RESTful APIs, and creating scalable cloud-based solutions for automotive data processing.",
      image: "/project4.webp",
      showRepo: false,
      showLive: false,
    },
    {
      title: "SummarizeX - AI Video Processing Tool",
      description:
        "Developed a MERN-based AI tool for video transcription, summarization, and mind map generation. Integrated OpenAI's Whisper API, GPT models, FFmpeg, and D3.js for seamless automation. Optimized video processing with FFmpeg, Multer, and WebSockets for real-time progress tracking.",
      image: "/project1.webp",
      repoUrl: "https://github.com/Skull-crusher44",
      liveUrl: "#",
      showRepo: true,
      showLive: true,
    },
    {
      title: "GoatCare Connect - NGO Management System",
      description:
        "Built a web application for managing goat distribution and monitoring in tribal communities with offline support. Features include admin dashboard for beneficiary management, visitor profiles, and analytics, plus offline data entry with photo verification and sync capabilities.",
      image: "/project2.webp",
      repoUrl: "https://github.com/Skull-crusher44",
      liveUrl: "#",
      showRepo: true,
      showLive: true,
    },
    {
      title: "Codeforces Profile Analyzer",
      description:
        "Developed a web app to analyze and compare Codeforces profiles, providing detailed statistics and performance insights. Integrated Codeforces API for data retrieval and Chart.js for visualization, reducing analysis time by 70%. Created an intuitive interface for enhanced user experience.",
      image: "/project3.webp",
      repoUrl: "https://github.com/Skull-crusher44",
      liveUrl: "#",
      showRepo: true,
      showLive: true,
    }
  ]
  return (
    <section id="projects" className="py-8 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="Showcasing my professional and personal projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => {
            const isExpanded = expandedCards[index]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden h-full transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl bg-white dark:bg-slate-800 flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-500 dark:to-green-400 h-1"></div>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold mb-2 text-emerald-700 dark:text-emerald-400">{project.title}</h3>

                      <div className="relative">
                        <div className="text-sm text-gray-600 dark:text-gray-300 transition-all duration-300">
                          {isExpanded ? (
                            <span>{project.description}</span>
                          ) : (
                            <span
                              className="block overflow-hidden"
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical" as const,
                              }}
                            >
                              {project.description}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => toggleCard(index)}
                          className="w-full flex justify-center items-center mt-2 py-1 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                          aria-label={isExpanded ? "Show less" : "Show more"}
                        >
                          {isExpanded ? "Show less" : "Show more"}
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.showLive && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 text-xs h-8"
                            onClick={() => window.open(project.liveUrl, "_blank")}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live Demo
                          </Button>
                        )}
                        {project.showRepo && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 text-xs h-8"
                            onClick={() => window.open(project.repoUrl, "_blank")}
                          >
                            <Github className="h-3.5 w-3.5" />
                            Repository
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
