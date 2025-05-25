"use client"

interface CardHeadingProps {
  title: string
  className?: string
}

export function CardHeading({ title, className = "" }: CardHeadingProps) {
  return (
    <h3
      className={`text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-500 dark:via-emerald-400 dark:to-green-400 ${className}`}
    >
      {title}
    </h3>
  )
}
