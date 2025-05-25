"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { motion, useScroll, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollY } = useScroll()
  const lastClickedSection = useRef<string | null>(null)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Get header height for accurate offset calculations
  const [headerHeight, setHeaderHeight] = useState(80) // Default fallback value

  // Throttle function to limit how often a function can be called
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  useEffect(() => {
    // Measure the actual header height after component mounts
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }

    // Update header height on window resize
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }

    window.addEventListener("resize", updateHeaderHeight)
    return () => window.removeEventListener("resize", updateHeaderHeight)
  }, [])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 10)
    })

    // Function to determine which section is currently in view
    const handleScroll = () => {
      // If we recently clicked a section link, prioritize that section
      if (lastClickedSection.current && clickTimeoutRef.current) {
        return
      }

      const currentScrollY = window.scrollY

      // Special case for the hero section - if we're near the top of the page
      if (currentScrollY < 200) {
        if (activeSection !== "hero") {
          setActiveSection("hero")
        }
        return
      }

      // Get all sections with IDs in the order they appear
      const sectionIds = ["about", "skills", "experience", "projects", "education", "achievements", "contact"]

      // Find the current section based on scroll position
      let newActiveSection = "hero"

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + currentScrollY
          const sectionBottom = sectionTop + rect.height

          // Check if we're in this section (with some buffer for the header)
          if (
            currentScrollY + headerHeight + 10 >= sectionTop &&
            currentScrollY + headerHeight + 10 < sectionBottom
          ) {
            newActiveSection = sectionId
            break
          }
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection)
      }
    }

    // Replace the direct event listener with the throttled version
    const throttledHandleScroll = throttle(handleScroll, 50)
    window.addEventListener("scroll", throttledHandleScroll)

    // Initial check
    setTimeout(handleScroll, 500) // Delay initial check to ensure DOM is fully loaded

    return () => {
      unsubscribe()
      window.removeEventListener("scroll", throttledHandleScroll)
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }
    }
  }, [scrollY, headerHeight, activeSection])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)

    // Debug logging
    console.log("scrollToSection called with:", sectionId);

    // Find the section element
    const section = document.getElementById(sectionId)

    if (!section) {
      console.log("Section not found:", sectionId);
    }

    if (section) {
      // Update active section immediately for better UX
      setActiveSection(sectionId)

      // Set the last clicked section to prioritize it
      lastClickedSection.current = sectionId

      // Clear any existing timeout
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }

      // Set a timeout to clear the last clicked section after scrolling completes
      clickTimeoutRef.current = setTimeout(() => {
        lastClickedSection.current = null
        clickTimeoutRef.current = null
      }, 1000) // 1 second should be enough for scrolling to complete

      // Calculate the target position with a more generous offset
      const offsetPosition = section.offsetTop - headerHeight - 20

      // Perform the scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Update URL without page reload
      window.history.pushState(null, "", `#${sectionId}`)
    }
  }

  const navItems = [
    { name: "about" },
    { name: "skills" },
    { name: "experience" },
    { name: "projects" },
    { name: "education" },
    { name: "achievements" },
    { name: "contact" },
  ]

  // Dynamic gradient background
  const gradientVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-1.5" : "py-3"} bg-white/20 dark:bg-slate-900/20 backdrop-blur-lg border-b-2 border-slate-300 dark:border-slate-700 shadow-xl`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center justify-between md:justify-between">
          <motion.div
            className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-500 dark:via-emerald-400 dark:to-green-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("hero")}
            style={{ cursor: "pointer" }}
            data-section="hero"
          >
            PA
          </motion.div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Desktop navigation - now centered */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((section) => (
              <motion.a
                key={section.name}
                href={`#${section.name}`}
                data-section={section.name}
                className={`text-sm font-medium transition-colors capitalize relative ${
                  activeSection === section.name
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-foreground hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
                {activeSection === section.name && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Theme toggle moved to the right */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md mt-3 rounded-lg shadow-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col p-3">
                {navItems.map((section) => (
                  <motion.button
                    key={section.name}
                    onClick={() => scrollToSection(section.name)}
                    data-section={section.name}
                    className={`py-2 text-xs font-medium text-left transition-colors capitalize ${
                      activeSection === section.name
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-foreground hover:text-emerald-600 dark:hover:text-emerald-400"
                    }`}
                    whileHover={{ x: 3 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.name}
                    {activeSection === section.name && (
                      <motion.div
                        className="absolute left-0 w-1 h-full bg-emerald-500 dark:bg-emerald-400 rounded-full"
                        layoutId="activeMobileSection"
                      />
                    )}
                  </motion.button>
                ))}
                <div className="py-2 flex items-center gap-2">
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
