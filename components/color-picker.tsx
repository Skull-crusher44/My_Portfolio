"use client"

import { useState } from "react"
import { Paintbrush, Check, RotateCcw } from "lucide-react"
import { useColorTheme } from "@/contexts/color-theme-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

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

export function ColorPicker() {
  const { accentColor, setAccentColor, resetColor } = useColorTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Paintbrush className="h-4 w-4" />
          <span className="sr-only">Change accent color</span>
          <motion.span
            className="absolute -top-1 -right-1 flex h-3 w-3 rounded-full"
            style={{ backgroundColor: `hsl(${accentColor})` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex flex-col space-y-1 p-2">
          <p className="text-xs font-medium text-muted-foreground">Accent Color</p>
          <div className="grid grid-cols-4 gap-2">
            {predefinedColors.map((color) => (
              <button
                key={color.name}
                className="relative flex h-8 w-8 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ backgroundColor: `hsl(${color.value})` }}
                onClick={() => {
                  setAccentColor(color.value)
                  setIsOpen(false)
                }}
                title={color.name}
              >
                {accentColor === color.value && (
                  <Check className="h-4 w-4 text-white drop-shadow-[0_0_1px_rgba(0,0,0,0.5)]" />
                )}
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center justify-center"
          onClick={() => {
            resetColor()
            setIsOpen(false)
          }}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          <span>Reset to default</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
