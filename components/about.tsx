"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { SectionHeading } from "./section-heading"
import { Briefcase, Camera, ShoppingBasketIcon as Basketball, Utensils, Music, Globe, User, Dog } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState<"professional" | "personal">("professional")
  const [activeImage, setActiveImage] = useState<number | null>(null)

  // Personal photos with categories
  const personalPhotos = [
    {
      url: "/Snowie.jpg",
      caption: "My furry companion Snowie",
      category: "pets",
      color: "from-emerald-500 to-green-400",
    },
    {
      url: "/basketball-player.png",
      caption: "Playing basketball on weekends",
      category: "sports",
      color: "from-blue-500 to-sky-400",
    },
    {
      url: "/traveling-person-camera.png",
      caption: "Exploring new places with my camera",
      category: "travel",
      color: "from-amber-500 to-yellow-400",
    },
    {
      url: "/restaurant-dining.png",
      caption: "Trying out new cuisines",
      category: "food",
      color: "from-orange-500 to-amber-400",
    },
    {
      url: "/placeholder-x9n8h.png",
      caption: "Dancing at a cultural event",
      category: "dance",
      color: "from-pink-500 to-rose-400",
    },
  ]

  // Personal interests with icons
  const interests = [
    { name: "Photography", icon: Camera, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
    {
      name: "Sports",
      icon: Basketball,
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
    },
    { name: "Dance", icon: Music, color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400" },
    { name: "Travel", icon: Globe, color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400" },
    {
      name: "Food Exploration",
      icon: Utensils,
      color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
    },
    { name: "Dog Lover", icon: Dog, color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
  ]

  return (
    <motion.div
      className="container px-4 md:px-6 pt-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionHeading title="About Me" subtitle="Professional background that shape who I am" />

      {/* Custom Toggle Switch */}
      <div className="flex justify-center mt-8 mb-10">
        <div className="bg-white dark:bg-slate-800 p-1 rounded-full shadow-md flex">
          <motion.button
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "professional"
                ? "text-white"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab("professional")}
            whileHover={{ scale: activeTab === "professional" ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Professional</span>
            </span>
            {activeTab === "professional" && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-500 dark:to-green-400 rounded-full"
                layoutId="activeTabBackground"
                transition={{ type: "spring", bounce: 0.2, duration: 0.22 }}
              />
            )}
          </motion.button>

          {/* <motion.button
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "personal"
                ? "text-white"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab("personal")}
            whileHover={{ scale: activeTab === "personal" ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              <span>Personal</span>
            </span>
            {activeTab === "personal" && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-500 dark:to-green-400 rounded-full"
                layoutId="activeTabBackground"
                transition={{ type: "spring", bounce: 0.2, duration: 0.22 }}
              />
            )}
          </motion.button> */}
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === "professional" ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm overflow-hidden relative"
            >
              {/* Subtle decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-500/5 rounded-full blur-3xl"></div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2.5 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 dark:from-emerald-500/10 dark:to-green-500/10">
                  <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-500 dark:to-green-400 bg-clip-text text-transparent">
                  Professional Journey
                </h3>
              </div>

              {/* Introduction */}
              <motion.div
                className="relative z-10 mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Full Stack Developer & Software Engineer
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Building innovative web solutions and scalable software applications
                </p>
              </motion.div>

              {/* Skills showcase */}
              <motion.div
                className="relative z-10 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "Node.js", "JavaScript", "Java", "Spring", "Spring Boot", "BitBucket", "REST APIs","postgres","SQL","Python", "Aws"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-200 dark:border-emerald-800"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Elegant divider */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 dark:via-emerald-400/30 to-transparent my-6"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              />

              {/* Key points with icons */}
              <motion.div
                className="relative z-10 space-y-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2"></div>
                    <div>
                      <h5 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">
                        Industry Experience
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Automotive, Software Development, and Web Technologies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2"></div>
                    <div>
                      <h5 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Technical Solutions</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Full-stack web applications and RESTful APIs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2"></div>
                    <div>
                      <h5 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Business Impact</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Scalable applications and improved user experiences
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2"></div>
                    <div>
                      <h5 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Current Focus</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Connected Vehicle Data Solutions & Web Development
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Simple highlight */}
              <motion.div
                className="relative p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/20 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700/50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  I thrive in collaborative environments where I can leverage my full-stack development skills and
                  technical expertise to build innovative solutions and create exceptional user experiences.
                </p>
              </motion.div>
            </motion.div>
          )
            : (
              
            // <motion.div
            //   key="personal"
            //   initial={{ opacity: 0, y: 10 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   exit={{ opacity: 0, y: -10 }}
            //   transition={{ duration: 0.2, ease: "easeOut" }}
            //   className="max-w-4xl mx-auto"
            // >
            //   <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            //     {/* Horizontal photo arrangement with overlap */}
            //     <div className="flex justify-center -space-x-6 mb-8 mt-8 overflow-hidden px-4 relative z-10">
            //       <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 hover:scale-105 transition-transform relative">
            //         <img src="/Kayaking2.jpg" alt="Kayaking" className="w-full h-full object-cover object-bottom" />
            //       </div>
            //       <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 hover:scale-105 transition-transform relative">
            //         <img src="/Mackinac.jpg" alt="Mackinac" className="w-full h-full object-cover" />
            //       </div>
            //       <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 hover:scale-105 transition-transform relative">
            //         <img src="/Snowie-new.jpg" alt="Snowie" className="w-full h-full object-cover" />
            //       </div>
            //       <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 hover:scale-105 transition-transform relative">
            //         <img src="/Chopta.jpg" alt="Chopta" className="w-full h-full object-cover" />
            //       </div>
            //       <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 hover:scale-105 transition-transform relative">
            //         <img src="/Dance.jpg" alt="Dance" className="w-full h-full object-cover" />
            //       </div>
            //     </div>

            //     {/* Name and tagline */}
            //     <div className="text-center mb-8">
            //       <h3 className="text-4xl md:text-5xl font-bold mb-4">
            //         <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            //           Pankaj Ahuja
            //         </span>
            //       </h3>
            //       <p className="text-xl text-slate-600 dark:text-slate-300 font-medium tracking-wide">
            //         Chasing light, rhythm, and the next great story.
            //       </p>
            //     </div>

            //     {/* Bio text */}
            //     <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            //       <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base">
            //         I'm always on the move—whether I'm chasing a ball on the court, hitting the road for a spontaneous
            //         drive, or exploring new places with my camera in hand. Sports like basketball, badminton,
            //         pickleball, cricket, and billiards keep my competitive spirit alive, while dancing and photography
            //         let me express my creative side. I'm a dog lover, an avid traveler, and someone who finds joy in
            //         simple adventures like cycling through quiet streets or capturing golden-hour moments. For me, life
            //         is all about energy, exploration, and making memories that matter.
            //       </p>
            //     </div>
            //   </div>
              // </motion.div>
              null // reomove null when you want to show personal tab content
            )
          }
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
