"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useMotionValue, useSpring, useTransform } from "framer-motion"
import type { MotionValue } from "framer-motion"

interface UseTiltEffectProps {
  scale?: number
  rotationIntensity?: number
  perspective?: number
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  glareOpacity?: number
  glarePosition?: string
  glareSize?: string
  borderRadius?: string
  reset?: boolean
  transitionDuration?: number
  transitionEasing?: string
}

interface TiltCardProps {
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  transformStyle: string
  perspective: number
  scale: MotionValue<number>
  boxShadow: MotionValue<string>
  ref: React.RefObject<HTMLDivElement>
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  handleMouseLeave: () => void
}

export function useTiltEffect({
  scale = 1.05,
  rotationIntensity = 1,
  perspective = 1000,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  glareOpacity = 0.2,
  glarePosition = "50% 50%",
  glareSize = "100%",
  borderRadius = "0.5rem",
  reset = true,
  transitionDuration = 150,
  transitionEasing = "cubic-bezier(0.4, 0, 0.2, 1)",
}: UseTiltEffectProps = {}): TiltCardProps {
  const ref = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)

  // Motion values for rotation
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  // Spring animations for smooth movement
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  // Scale effect on hover
  const cardScale = useMotionValue(1)
  const springScale = useSpring(cardScale, springConfig)

  // Dynamic shadow based on tilt
  const boxShadow = useTransform([springRotateX, springRotateY], ([latestRotateX, latestRotateY]) => {
    const shadowX = (latestRotateY / tiltMaxAngleY) * 5
    const shadowY = (latestRotateX / tiltMaxAngleX) * -5
    return hover
      ? `${shadowX}px ${shadowY}px 25px rgba(0, 0, 0, 0.1), 
           ${shadowX / 2}px ${shadowY / 2}px 10px rgba(0, 0, 0, 0.05)`
      : "0px 0px 0px rgba(0, 0, 0, 0)"
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const centerX = rect.left + width / 2
    const centerY = rect.top + height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Calculate rotation based on mouse position
    const rotateXValue = (mouseY / height) * tiltMaxAngleX * -1 * rotationIntensity
    const rotateYValue = (mouseX / width) * tiltMaxAngleY * rotationIntensity

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
    cardScale.set(scale)
    setHover(true)
  }

  const handleMouseLeave = () => {
    if (reset) {
      rotateX.set(0)
      rotateY.set(0)
      cardScale.set(1)
      setHover(false)
    }
  }

  // Clean up motion values on unmount
  useEffect(() => {
    return () => {
      rotateX.destroy()
      rotateY.destroy()
      cardScale.destroy()
    }
  }, [rotateX, rotateY, cardScale])

  return {
    rotateX: springRotateX,
    rotateY: springRotateY,
    transformStyle: "preserve-3d",
    perspective,
    scale: springScale,
    boxShadow,
    ref,
    handleMouseMove,
    handleMouseLeave,
  }
}
