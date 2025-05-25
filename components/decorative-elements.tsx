"use client"

import { motion } from "framer-motion"

interface DecorativeShapeProps {
  className?: string
  delay?: number
  duration?: number
  isHeading?: boolean
}

export function DecorativeCircle({ className = "", delay = 0, duration = 20, isHeading = true }: DecorativeShapeProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        background: `linear-gradient(135deg, hsl(var(--color-${isHeading ? "heading" : "body"})), hsl(var(--color-${isHeading ? "heading" : "body"}) / 0.8))`,
        opacity: 0.15,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ delay, duration: 1 }}
    >
      <motion.div
        className="w-full h-full rounded-full"
        style={{
          background: `linear-gradient(135deg, hsl(var(--color-${isHeading ? "heading" : "body"})), hsl(var(--color-${isHeading ? "heading" : "body"}) / 0.8))`,
          opacity: 0.1,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

export function DecorativeSquare({ className = "", delay = 0, duration = 25, isHeading = true }: DecorativeShapeProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        background: `linear-gradient(135deg, hsl(var(--color-${isHeading ? "heading" : "body"})), hsl(var(--color-${isHeading ? "heading" : "body"}) / 0.8))`,
        opacity: 0.15,
      }}
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 0.15, rotate: 360 }}
      transition={{
        opacity: { delay, duration: 1 },
        rotate: { duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
      }}
    />
  )
}

export function ColorfulBlob({
  className = "",
  isHeading = true,
  delay = 0,
  size = "md",
  blur = "md",
}: {
  className?: string
  isHeading?: boolean
  delay?: number
  size?: "sm" | "md" | "lg" | "xl"
  blur?: "sm" | "md" | "lg" | "xl"
}) {
  const sizeClasses = {
    sm: "w-[10vw] h-[10vw]",
    md: "w-[20vw] h-[20vw]",
    lg: "w-[30vw] h-[30vw]",
    xl: "w-[40vw] h-[40vw]",
  }

  const blurClasses = {
    sm: "blur-sm",
    md: "blur-md",
    lg: "blur-lg",
    xl: "blur-xl",
  }

  const colorClasses = {
    true: "bg-emerald-400 dark:bg-emerald-600", // heading color (emerald)
    false: "bg-green-400 dark:bg-green-600", // body color (green)
  }

  return (
    <motion.div
      className={`absolute rounded-full ${sizeClasses[size]} ${blurClasses[blur]} ${
        colorClasses[String(isHeading) as keyof typeof colorClasses]
      } opacity-10 ${className}`}
      animate={{
        x: [0, 20, 0],
        y: [0, 15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
      }}
    />
  )
}
