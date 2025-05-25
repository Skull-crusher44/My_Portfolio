"use client"

import { Linkedin, Mail, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t py-4 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-3 md:h-14 md:flex-row">
        <motion.p
          className="text-center text-xs leading-loose text-muted-foreground md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          © 2024 Pankaj Ahuja. All rights reserved.
        </motion.p>
        <div className="flex gap-3">
          <motion.a
            href="https://www.linkedin.com/in/pankaj-ahuja-9a7a96286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/Skull-crusher44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="mailto:pankaj44ahuja@gmail.com"
            className="text-muted-foreground hover:text-green-500 dark:hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
