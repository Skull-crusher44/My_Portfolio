"use client"

import { useState, useEffect } from "react"

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-ignore
      navigator.msMaxTouchPoints > 0

    setIsTouch(isTouchDevice)
  }, [])

  return isTouch
}
