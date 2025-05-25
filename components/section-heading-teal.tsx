"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeadingTeal({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      className={`space-y-1 ${centered ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300">
        {title}
      </h2>
      {subtitle && <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base">{subtitle}</p>}
    </motion.div>
  )
}
