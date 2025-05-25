"use client"

import { SectionHeading } from "./section-heading"
import { Code, Database, Cloud, BarChart, GitBranch, BrainCircuit, FileSpreadsheet, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Redux"],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "API Design",
        "Authentication",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "Git",
        "GitHub",
        "Vercel",
        "Netlify",
        "Cloud Deployment",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: BarChart,
      skills: ["VS Code", "Postman", "npm","Bitbucket", "Chrome DevTools", "Figma"],
    },
    {
      title: "Development Practices",
      icon: GitBranch,
      skills: [
        "Version Control",
        "Code Review",
        "Unit Testing",
        "Integration Testing",
        "Responsive Design",
        "Web Performance",
        "SEO",
        "Accessibility",
      ],
    },
    {
      title: "Software Architecture",
      icon: BrainCircuit,
      skills: [
        "Microservices",
        "REST Architecture",
        "State Management",
        "Component Design",
        "System Design",
        "API Integration",
      ],
    },
    // {
    //   title: "Project Management",
    //   icon: FileSpreadsheet,
    //   skills: ["Agile", "Scrum", "JIRA", "Trello", "Technical Documentation", "Team Collaboration"],
    // },
    {
      title: "Additional Skills",
      icon: Lightbulb,
      skills: [
        "Problem Solving",
        "Clean Code",
        "Code Optimization",
        "Cross-browser Compatibility",
        "Technical Leadership",
      ],
    },
  ]

  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      <motion.div
        className="container px-4 md:px-6 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          title="Technical Expertise"
          subtitle="A comprehensive overview of my technical skills and professional competencies"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden min-h-[220px] shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-md bg-green-100 dark:bg-green-900/20">
                    <category.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-base font-bold text-green-800 dark:text-green-300">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
