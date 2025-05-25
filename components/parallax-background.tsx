"use client"

import type React from "react"

interface ParallaxBackgroundProps {
  className?: string
  speed?: number
  children?: React.ReactNode
}

export function ParallaxBackground({ className = "", children }: ParallaxBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">{children}</div>
    </div>
  )
}
