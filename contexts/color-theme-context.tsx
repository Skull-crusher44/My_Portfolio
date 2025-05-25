"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type ColorThemeProviderProps = {
  children: React.ReactNode
}

type ColorThemeContextType = {
  accentColor: string
  setAccentColor: (color: string) => void
  resetColor: () => void
}

const defaultAccentColor = "221.2 83.2% 53.3%" // Default blue color
const colorThemeStorageKey = "portfolio-accent-color"

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined)

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  const [accentColor, setAccentColorState] = useState<string>(defaultAccentColor)

  // Load saved color from localStorage on initial render
  useEffect(() => {
    const savedColor = localStorage.getItem(colorThemeStorageKey)
    if (savedColor) {
      setAccentColorState(savedColor)
      applyAccentColor(savedColor)
    }
  }, [])

  const applyAccentColor = (color: string) => {
    // Update CSS variables for both light and dark mode
    document.documentElement.style.setProperty("--primary", color)

    // Calculate a darker version for the ring color
    const [h, s, l] = color.split(" ")
    const darkerL = Number.parseFloat(l) - 5 + "%"
    document.documentElement.style.setProperty("--ring", `${h} ${s} ${darkerL}`)
  }

  const setAccentColor = (color: string) => {
    setAccentColorState(color)
    applyAccentColor(color)
    localStorage.setItem(colorThemeStorageKey, color)
  }

  const resetColor = () => {
    setAccentColorState(defaultAccentColor)
    applyAccentColor(defaultAccentColor)
    localStorage.removeItem(colorThemeStorageKey)
  }

  return (
    <ColorThemeContext.Provider value={{ accentColor, setAccentColor, resetColor }}>
      {children}
    </ColorThemeContext.Provider>
  )
}

export const useColorTheme = () => {
  const context = useContext(ColorThemeContext)
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider")
  }
  return context
}
