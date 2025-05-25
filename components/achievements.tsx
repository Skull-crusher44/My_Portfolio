"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users, Code, Brain, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { CardHeading } from "./card-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Achievement {
  icon: any;
  title: string;
  description: string;
  date: string;
}

interface CodingProfile {
  icon: any;
  title: string;
  description: string;
  profileUrl: string;
  iconColor: string;
  bgColor: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      icon: Code,
      title: "Code for Good Hackathon",
      description: "Participated in Code for Good hackathon by JP Morgan Chase & Co. Collaborated with a team to analyze and address a real-world problem posed by the NGO, delivering an innovative and user-friendly platform.",
      date: "2024"
    },
    {
      icon: Award,
      title: "Gold Medal - International Mathematics Olympiad",
      description: "Achieved Gold Medal in International Mathematics Olympiad Contest.",
      date: "2015"
    },
    {
      icon: Users,
      title: "Core Team Member - Programming Club",
      description: "Mentored juniors in data structures and algorithms as part of the college's Programming Club.",
      date: "03/2024-Present"
    },
    {
      icon: Brain,
      title: "Chegg Expert",
      description: "Helped students by solving complex computer science problems in algorithms and data structures, maintaining high accuracy rate.",
      date: "09/2023-Present"
    }
  ]

  const codingProfiles: CodingProfile[] = [
    {
      icon: Code,
      title: "LeetCode",
      description: "Solved 400+ DSA questions",
      profileUrl: "https://leetcode.com/u/Skull_crusher44/",
      iconColor: "text-yellow-700 dark:text-yellow-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/40",
    },
    {
      icon: Code,
      title: "GeeksForGeeks",
      description: "Regular contributor and problem solver",
      profileUrl: "https://www.geeksforgeeks.org/user/pankajahuja988/",
      iconColor: "text-green-700 dark:text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/40",
    },
    {
      icon: Code,
      title: "CodeForces",
      description: "Competitive programming enthusiast",
      profileUrl: "https://codeforces.com/profile/Skull6393",
      iconColor: "text-red-700 dark:text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900/40",
    },
    {
      icon: Code,
      title: "CodeChef",
      description: "Active participant in contests",
      profileUrl: "https://www.codechef.com/users/skull_crusher4",
      iconColor: "text-orange-700 dark:text-orange-500",
      bgColor: "bg-orange-100 dark:bg-orange-900/40",
    }
  ]

  return (
    <section id="achievements" className="py-8 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Achievements & Profiles"
          subtitle="Recognition, leadership roles, and coding profiles"
        />

        <Tabs defaultValue="achievements" className="w-full max-w-6xl mx-auto mt-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="profiles">Coding Profiles</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="overflow-hidden h-full transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl bg-white dark:bg-slate-800">
                      <div className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-500 dark:to-green-400 h-3"></div>
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <motion.div
                          className="rounded-full p-2.5 mb-3 bg-emerald-100 dark:bg-emerald-900/40"
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <achievement.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </motion.div>
                        <CardHeading title={achievement.title} className="mb-2" />
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        <Badge variant="outline" className="mt-3 text-xs">
                          {achievement.date}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profiles" className="space-y-6">
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {codingProfiles.map((profile, index) => (
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
                    <Card className="overflow-hidden h-full transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl bg-white dark:bg-slate-800">
                      <div className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-500 dark:to-green-400 h-3"></div>
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <motion.div
                            className={`rounded-full p-3 mb-3 ${profile.bgColor}`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          >
                            <profile.icon className={`h-6 w-6 ${profile.iconColor}`} />
                          </motion.div>
                          <CardHeading title={profile.title} className="mb-1 text-center" />
                          <p className="text-xs text-muted-foreground mb-3">{profile.description}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full h-7 text-xs"
                            onClick={() => window.open(profile.profileUrl, "_blank")}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
