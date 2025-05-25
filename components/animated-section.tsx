"use client"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  id: string
  className?: string
  delay?: number
}

export function AnimatedSection({ children, id, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <section id={id} className={`py-12 relative overflow-hidden ${className}`}>
      {children}
    </section>
  )
}
