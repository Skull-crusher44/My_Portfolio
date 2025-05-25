"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { CardHeading } from "./card-heading"
import { MapPin, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Role {
  position: string
  period: string
  responsibilities: string[]
}

interface Experience {
  company: string
  companyDetail: string
  position: string
  location: string
  period: string
  responsibilities: string[]
  roles: Role[]
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "CerebrumX",
      companyDetail: "(Connected Car Data & Mobility Intelligence)",
      position: "Software Development Intern",
      location: "Gurugram",
      period: "May 2023 – Present",
      responsibilities: [
        "Developing and maintaining full-stack web applications using Java, Spring , Spring Boot, React",
        "Implementing RESTful APIs and integrating connected vehicle data solutions",
        "Collaborating with cross-functional teams to enhance vehicle data analytics platform",
        "Contributing to the development of scalable cloud-based solutions for automotive data processing",
      ],
      roles: [],
    },
    
  ]

  return (
    <section id="experience" className="py-8 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading title="Professional Experience" subtitle="My career journey and professional accomplishments" />

        <div className="mt-8 max-w-4xl mx-auto">
          {/* Timeline items */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Individual timeline segment for each company */}
                <div className="absolute left-6 top-0 h-full">
                  {/* Show line if it's not the last item OR if it has sub-roles */}
                  {(index < experiences.length - 1 || exp.roles.length > 0) && (
                    <div className="absolute left-0 top-10 bottom-0 w-0.5 bg-emerald-500/30 dark:bg-emerald-400/30"></div>
                  )}
                </div>

                <div className="pl-14 md:pl-16 relative">
                  {/* Timeline dot - perfectly centered */}
                  <div className="absolute left-6 top-1.5 w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 -ml-1.5 border-4 border-white dark:border-slate-900 z-10"></div>

                  {/* Company name and details */}
                  <div className="mb-3">
                    <div className="flex flex-col gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <img
                            src={`/${exp.company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}.jpeg`}
                            alt={`${exp.company} logo`}
                            className={`inline-block w-7 h-7 mr-1 rounded-md object-contain border border-slate-200 dark:border-slate-700 shadow-sm${exp.company === "Optum, United Health Group" ? " bg-white" : " bg-white/70"}`}
                          />
                          <CardHeading title={exp.company} />
                          <span className="text-xs text-muted-foreground">{exp.companyDetail}</span>
                        </div>
                        {exp.position && <p className="text-sm font-medium mt-0.5">{exp.position}</p>}
                      </div>

                      {/* Modern location and date display */}
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 px-2 py-0.5 text-xs font-normal bg-background/50 hover:bg-background"
                        >
                          <MapPin className="h-3 w-3 text-emerald-500 dark:text-emerald-400" />
                          {exp.location}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 px-2 py-0.5 text-xs font-normal bg-background/50 hover:bg-background"
                        >
                          <Calendar className="h-3 w-3 text-emerald-500 dark:text-emerald-400" />
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  {exp.responsibilities.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mt-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  )}

                  {/* Roles */}
                  {exp.roles.length > 0 && (
                    <div className="space-y-5 mt-4">
                      {exp.roles.map((role, roleIndex) => (
                        <motion.div
                          key={roleIndex}
                          className="relative pl-6 border-l border-dashed border-emerald-300 dark:border-emerald-700 ml-1"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {/* Sub-timeline dot */}
                          <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-500 -ml-1 border-2 border-white dark:border-slate-900 z-10"></div>

                          <div className="flex flex-col gap-2 mb-3">
                            <h4 className="text-sm font-medium">{role.position}</h4>
                            <Badge
                              variant="outline"
                              className="flex items-center gap-1 w-fit px-2 py-0.5 text-xs font-normal bg-background/50 hover:bg-background"
                            >
                              <Calendar className="h-3 w-3 text-emerald-500 dark:text-emerald-400" />
                              {role.period}
                            </Badge>
                          </div>
                          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                            {role.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex}>{resp}</li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
