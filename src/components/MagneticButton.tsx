'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
  strength?: number
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
  strength = 0.35,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * strength, y: middleY * strength })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyle =
    variant === 'primary'
      ? 'btn-bronze shadow-lg shadow-bxc-accent/20'
      : variant === 'outline'
      ? 'btn-outline-bronze'
      : 'text-bxc-text hover:text-bxc-accent'

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.2 }}
      className="inline-block"
    >
      <span
        className={`inline-flex items-center justify-center rounded-pill font-medium transition-all ${baseStyle} ${className}`}
      >
        {children}
      </span>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-block focus:outline-none">
        {content}
      </Link>
    )
  }

  return (
    <button suppressHydrationWarning onClick={onClick} className="inline-block focus:outline-none bg-transparent p-0 border-none">
      {content}
    </button>
  )
}
