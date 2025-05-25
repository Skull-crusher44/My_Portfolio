"use client"

import { SectionHeading } from "./section-heading"
import { GraduationCap, Calendar, MapPin, Award, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const education = [
    {
      institution: "Maulana Azad National Institute of Technology",
      school: "Department of Computer Science and Engineering",
      degree: "B.Tech Computer Science and Engineering",
      location: "Bhopal, MP (India)",
      period: "2022-Present",
      gpa: "CGPA: 9.05",
      positions: [],
      courses: [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Database Management",
        "Computer Networks"
      ],
      achievements: [],
      year: "Present",
      level: "Bachelor's",
    },
    {
      institution: "RVN School",
      school: "Board of Higher Education, Rajasthan",
      degree: "Higher Secondary Education",
      location: "Rajasthan, India",
      period: "2021",
      gpa: "Percentage: 96",
      positions: [],
      courses: [],
      achievements: [],
      year: "2021",
      level: "Higher Secondary",
    },
    {
      institution: "NCA School",
      school: "Board of Secondary Education, Rajasthan",
      degree: "Secondary Education",
      location: "Rajasthan, India",
      period: "2019",
      gpa: "",
      positions: [],
      courses: [],
      achievements: [],
      year: "2019",
      level: "Secondary",
    }
  ]

  return (
    <div className="container px-4 md:px-6 pt-6">
      <SectionHeading
        title="Education"
        subtitle="Academic qualifications and achievements"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 w-full max-w-6xl mx-auto"
      >
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-green-500 transform -translate-y-1/2"></div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {index != 2 && (
                  <div className="hidden md:block absolute top-1/2 right-[-24px] w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400 transform -translate-y-1/2 z-10 border-4 border-white dark:border-slate-900 shadow-lg">
                    <div className="absolute inset-1 rounded-full bg-white dark:bg-slate-900"></div>
                  </div>
                )}

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl bg-white dark:bg-slate-800 flex flex-col">
                    <div className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-500 dark:to-green-400 h-3"></div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="space-y-4 flex-1 flex flex-col">
                        {/* Header */}
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-full">
                            <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                                {edu.institution} <span className="text-sm font-normal">({edu.year})</span>
                              </h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{edu.school}</p>
                            <p className="text-base font-medium mt-1">{edu.degree}</p>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-3 flex-1 flex flex-col">
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                              <span>{edu.period}</span>
                            </div>
                            {edu.gpa && (
                              <div className="flex items-center gap-1">
                                <Award className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                                <span>GPA: {edu.gpa}</span>
                              </div>
                            )}
                          </div>

                          {/* Positions */}
                          {edu.positions && edu.positions.length > 0 && (
                            <div>
                              <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2">
                                Positions Held:
                              </p>
                              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                {edu.positions.map((position, i) => (
                                  <li key={i}>{position}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Courses */}
                          <div className="flex-1 flex flex-col justify-end">
                            {edu.courses.length > 0 && (
                              <div>
                                <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2">
                                  Key Courses:
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {edu.courses.map((course, i) => (
                                    <Badge
                                      key={i}
                                      variant="outline"
                                      className="text-[10px] py-0.5 px-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700"
                                    >
                                      {course}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Achievements */}
                            {edu.achievements.length > 0 ? (
                              <div className="mt-3">
                                <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                  Achievements:
                                </p>
                                <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-300">
                                  {edu.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <div className="mt-3 h-6"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Arrow between cards (desktop only) */}
            <div className="hidden md:flex absolute top-1/2 left-[33%] transform -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ x: [0,10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowRight className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
            </motion.div>
          </div>
          <div className="hidden md:flex absolute top-1/2 right-[30%] transform -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ x: [0,10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowRight className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
