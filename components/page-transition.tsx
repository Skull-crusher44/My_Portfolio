"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function PageTransition() {
  const [isNavigating, setIsNavigating] = useState(false)
  const [targetSection, setTargetSection] = useState("")

  useEffect(() => {
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const navButton = target.closest("button[data-section]") as HTMLButtonElement

      if (navButton) {
        const section = navButton.dataset.section
        if (section) {
          setIsNavigating(true)
          setTargetSection(section)

          // Reset after animation completes
          setTimeout(() => {
            setIsNavigating(false)
          }, 700)
        }
      }
    }

    document.addEventListener("click", handleNavigation)
    return () => document.removeEventListener("click", handleNavigation)
  }, [])

  return (
    <>
      {isNavigating && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/30 backdrop-blur-sm"
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{
              scale: [0, 1.5, 3],
              borderRadius: ["100%", "50%", "0%"],
            }}
            transition={{
              duration: 0.7,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.8],
            }}
            transition={{
              duration: 0.7,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
          >
            {targetSection.charAt(0).toUpperCase() + targetSection.slice(1)}
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
