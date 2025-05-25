"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface GradientOption {
  id: string
  name: string
  gradient: string
  darkGradient: string
}

const gradientOptions: GradientOption[] = [
  {
    id: "teal-cyan",
    name: "Teal to Cyan",
    gradient: "from-teal-500 via-teal-400 to-cyan-400",
    darkGradient: "from-teal-400 via-teal-300 to-cyan-300",
  },
  {
    id: "emerald-green",
    name: "Emerald to Green",
    gradient: "from-emerald-600 via-emerald-500 to-green-500",
    darkGradient: "from-emerald-500 via-emerald-400 to-green-400",
  },
  {
    id: "indigo-purple",
    name: "Indigo to Purple",
    gradient: "from-indigo-600 via-indigo-500 to-purple-500",
    darkGradient: "from-indigo-500 via-indigo-400 to-purple-400",
  },
  {
    id: "rose-pink",
    name: "Rose to Pink",
    gradient: "from-rose-600 via-rose-500 to-pink-500",
    darkGradient: "from-rose-500 via-rose-400 to-pink-400",
  },
  {
    id: "amber-orange",
    name: "Amber to Orange",
    gradient: "from-amber-500 via-amber-400 to-orange-400",
    darkGradient: "from-amber-400 via-amber-300 to-orange-300",
  },
  {
    id: "slate-gray",
    name: "Slate to Gray",
    gradient: "from-slate-700 via-slate-600 to-gray-600",
    darkGradient: "from-slate-500 via-slate-400 to-gray-400",
  },
]

export function GradientShowcase() {
  const [selectedGradient, setSelectedGradient] = useState<string | null>(null)

  const handleSelectGradient = (gradientId: string) => {
    setSelectedGradient(gradientId)
    // In a real implementation, this would update the global theme
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Select a Gradient Style</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gradientOptions.map((option) => (
          <motion.div
            key={option.id}
            className={`relative rounded-lg border-2 p-4 cursor-pointer ${
              selectedGradient === option.id ? "border-blue-500 dark:border-blue-400" : "border-transparent"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelectGradient(option.id)}
          >
            <h3
              className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${option.gradient} dark:${option.darkGradient}`}
            >
              {option.name}
            </h3>
            <p className="text-sm mt-2">Sample heading text with this gradient</p>
            {selectedGradient === option.id && (
              <div className="absolute top-2 right-2 bg-blue-500 dark:bg-blue-400 rounded-full p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          disabled={!selectedGradient}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
        >
          Apply Selected Gradient
        </Button>
      </div>
    </div>
  )
}
