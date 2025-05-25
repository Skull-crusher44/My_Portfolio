"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      className={`space-y-1 ${centered ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-500 dark:via-emerald-400 dark:to-green-400">
        {title}
      </h2>
      {subtitle && <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base">{subtitle}</p>}
    </motion.div>
  )
}
