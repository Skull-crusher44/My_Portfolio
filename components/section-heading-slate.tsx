"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeadingSlate({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      className={`space-y-1 ${centered ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-600 to-gray-600 dark:from-slate-500 dark:via-slate-400 dark:to-gray-400">
        {title}
      </h2>
      {subtitle && <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base">{subtitle}</p>}
    </motion.div>
  )
}
