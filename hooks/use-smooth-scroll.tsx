"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling with animation
    const handleSmoothScroll = (e: MouseEvent) => {
      // Only process clicks on anchor links
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement

      if (!anchor) return

      const targetId = anchor.getAttribute("href")
      if (!targetId || targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (!targetElement) return

      e.preventDefault()

      // Scroll to the target element smoothly
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update URL without page reload
      window.history.pushState(null, "", targetId)
    }

    // Add event listener to the document
    document.addEventListener("click", handleSmoothScroll)

    // Clean up
    return () => {
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])
}
