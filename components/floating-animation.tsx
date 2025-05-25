"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingAnimationProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  yOffset?: number
  disabled?: boolean
}

export function FloatingAnimation({
  children,
  className = "",
  duration = 4,
  delay = 0,
  yOffset = 10,
  disabled = true,
}: FloatingAnimationProps) {
  if (disabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -yOffset, 0] }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
