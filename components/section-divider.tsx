"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  className?: string
  invert?: boolean
}

export function SectionDivider({ className = "", invert = false }: SectionDividerProps) {
  return (
    <motion.div
      className={`h-px w-full overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`w-full h-px ${
          invert
            ? "bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
            : "bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
        }`}
      />
    </motion.div>
  )
}
