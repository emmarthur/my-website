'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, children, hover = true, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700",
        hover && "hover:shadow-xl transition-shadow cursor-pointer",
        className
      )}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}

