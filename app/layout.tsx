import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Pankaj Ahuja",
  description: "Portfolio of Pankaj Ahuja – Software Engineer , Full Stack Developer.",
  openGraph: {
    title: "Pankaj Ahuja",
    description: "Portfolio of Pankaj Ahuja – Software Engineer , Full Stack Developer.",
    url: "https://pankajahuja.vercel.app/",
    siteName: "Pankaj Ahuja",
    images: [
      {
        url: "/hero-picture-2.jpg",
        width: 1200,
        height: 630,
        alt: "Pankaj Ahuja Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Ahuja",
    description: "Portfolio of Pankaj Ahuja – Software Engineer , Full Stack Developer.",
    images: ["/hero-picture-2.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <div className="pt-14">{children}</div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
