"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  onClick?: () => void
}

export function AnimatedButton({ children, className, variant, size, asChild, onClick }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button className={className} variant={variant} size={size} asChild={asChild} onClick={onClick}>
        {children}
      </Button>
    </motion.div>
  )
}
