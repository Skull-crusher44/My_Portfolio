"use client"

import { useState } from "react"
import { useColorTheme } from "@/contexts/color-theme-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Paintbrush, RotateCcw } from "lucide-react"

const predefinedColors = [
  { name: "Blue", value: "221.2 83.2% 53.3%" },
  { name: "Purple", value: "262.1 83.3% 57.8%" },
  { name: "Green", value: "142.1 76.2% 36.3%" },
  { name: "Red", value: "346.8 77.2% 49.8%" },
  { name: "Orange", value: "24.6 95% 53.1%" },
  { name: "Teal", value: "171 68% 41%" },
  { name: "Pink", value: "330 81% 60%" },
  { name: "Amber", value: "43.3 96.4% 56.3%" },
]

export function ColorThemeSwitcher() {
  const { accentColor, setAccentColor, resetColor } = useColorTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-lg bg-background"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Paintbrush className="h-4 w-4" />
        <motion.span
          className="absolute -top-1 -right-1 flex h-3 w-3 rounded-full"
          style={{ backgroundColor: `hsl(${accentColor})` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </Button>

      {isOpen && (
        <motion.div
          className="flex flex-col gap-2 bg-background rounded-lg p-3 shadow-lg border"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid grid-cols-4 gap-2">
            {predefinedColors.map((color) => (
              <motion.button
                key={color.name}
                className="h-8 w-8 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ backgroundColor: `hsl(${color.value})` }}
                onClick={() => setAccentColor(color.value)}
                title={color.name}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center justify-center w-full mt-1"
            onClick={resetColor}
          >
            <RotateCcw className="mr-2 h-3 w-3" />
            <span className="text-xs">Reset</span>
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}
