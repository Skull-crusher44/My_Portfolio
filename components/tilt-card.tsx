"use client"

import { useRef, type ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltAmount?: number
  glareOpacity?: number
  perspective?: number
  disabled?: boolean
}

export function TiltCard({ children, className = "", disabled = false }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={cardRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
