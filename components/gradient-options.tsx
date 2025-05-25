"use client"

import { SectionHeadingTeal } from "./section-heading-teal"
import { SectionHeadingEmerald } from "./section-heading-emerald"
import { SectionHeadingIndigo } from "./section-heading-indigo"
import { SectionHeadingRose } from "./section-heading-rose"
import { SectionHeadingAmber } from "./section-heading-amber"
import { SectionHeadingSlate } from "./section-heading-slate"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function GradientOptions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-8 text-center">Gradient Heading Options</h1>

      <div className="grid gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card>
            <CardContent className="p-6">
              <SectionHeadingTeal
                title="Teal to Cyan Gradient"
                subtitle="A fresh, modern gradient with teal and cyan tones"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <SectionHeadingEmerald
                title="Emerald to Green Gradient"
                subtitle="A natural, calming gradient with emerald and green tones"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <SectionHeadingIndigo
                title="Indigo to Purple Gradient"
                subtitle="A rich, professional gradient with indigo and purple tones"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <SectionHeadingRose
                title="Rose to Pink Gradient"
                subtitle="A vibrant, energetic gradient with rose and pink tones"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-6">
              <SectionHeadingAmber
                title="Amber to Orange Gradient"
                subtitle="A warm, inviting gradient with amber and orange tones"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <SectionHeadingSlate
                title="Slate to Gray Gradient"
                subtitle="A subtle, sophisticated gradient with slate and gray tones"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
