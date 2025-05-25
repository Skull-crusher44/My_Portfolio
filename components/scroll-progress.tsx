"use client"

import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 dark:bg-emerald-400 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
