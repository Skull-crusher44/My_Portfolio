"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Linkedin, ArrowRight, Loader2, Github } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      })
      reset()
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "pankaj44ahuja@gmail.com",
      href: "mailto:pankaj44ahuja.com",
      description: "Drop me a line anytime",
      color: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/pankaj-ahuja-9a7a96286/",
      description: "Professional networking",
      color: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Skull-crusher44",
      href: "https://github.com/Skull-crusher44",
      description: "Open source & projects",
      color: "bg-gray-100 dark:bg-gray-900/40 text-gray-700 dark:text-gray-500",
    }
  ]

  return (
    <section id="contact" className="py-8 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to contact me."
        />

        <div className="grid gap-8 lg:grid-cols-2 w-full max-w-6xl mx-auto mt-8 items-stretch">
          {/* Left Side - Modernized */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full flex flex-col"
          >
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-400">
                Let's Connect
              </h3>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mt-2 mb-6 leading-relaxed">
                I'm always up for a good chat—whether it's about big ideas, new projects, or just sharing stories.<br />
                Don't be a stranger!
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <motion.a
                    href={method.href}
                    target={["LinkedIn", "GitHub", "Instagram"].includes(method.label) ? "_blank" : undefined}
                    rel={["LinkedIn", "GitHub", "Instagram"].includes(method.label) ? "noopener noreferrer" : undefined}
                    className="block group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 transition-all duration-300 group-hover:shadow-md group-hover:border-emerald-300 dark:group-hover:border-emerald-600">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${method.color} shadow-sm group-hover:scale-105 transition-transform duration-300`}
                        >
                          <method.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-slate-900 dark:text-slate-100">{method.label}</h4>
                            <ArrowRight className="h-3 w-3 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400">{method.value}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Spacer to push location note to bottom */}
            <div className="flex-1" />

            {/* Simple location note
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-6">
              <MapPin className="h-4 w-4 inline mr-1" />
              Based in West Lafayette, IN • Available for remote work
            </p> */}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full flex flex-col"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-200/30 dark:from-emerald-900/20 dark:to-green-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

              {/* Form content */}
              <div className="relative p-8">
                <div className="mb-6">
                  <motion.h3
                    className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-400"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    Send Me a Message
                  </motion.h3>
                  <motion.p
                    className="text-sm text-slate-600 dark:text-slate-400 mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    I'll get back to you as soon as possible
                  </motion.p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <div className="relative group">
                        <Input
                          {...register("name")}
                          placeholder="Your Name"
                          className="h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 transition-all duration-300 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-400/20 text-sm"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                        <div className="absolute inset-0 rounded-xl border border-emerald-500 dark:border-emerald-400 opacity-0 scale-105 group-focus-within:opacity-100 group-focus-within:scale-100 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <div className="relative group">
                        <Input
                          {...register("email")}
                          type="email"
                          placeholder="Your Email"
                          className="h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 transition-all duration-300 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-400/20 text-sm"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                        <div className="absolute inset-0 rounded-xl border border-emerald-500 dark:border-emerald-400 opacity-0 scale-105 group-focus-within:opacity-100 group-focus-within:scale-100 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="relative group">
                      <Input
                        {...register("subject")}
                        placeholder="Subject"
                        className="h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 transition-all duration-300 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-400/20 text-sm"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                      )}
                      <div className="absolute inset-0 rounded-xl border border-emerald-500 dark:border-emerald-400 opacity-0 scale-105 group-focus-within:opacity-100 group-focus-within:scale-100 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="relative group">
                      <Textarea
                        {...register("message")}
                        placeholder="Your Message"
                        className="min-h-[150px] p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 transition-all duration-300 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-400/20 text-sm resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                      <div className="absolute inset-0 rounded-xl border border-emerald-500 dark:border-emerald-400 opacity-0 scale-105 group-focus-within:opacity-100 group-focus-within:scale-100 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-lg text-sm ${
                        submitStatus.type === "success"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                      }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="pt-2"
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-medium text-sm flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span>
                          <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </motion.button>

                    <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
                      Your information is protected by my privacy policy
                    </p>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
