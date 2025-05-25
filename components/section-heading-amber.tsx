"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeadingAmber({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      className={`space-y-1 ${centered ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 dark:from-amber-400 dark:via-amber-300 dark:to-orange-300">
        {title}
      </h2>
      {subtitle && <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base">{subtitle}</p>}
    </motion.div>
  )
}
