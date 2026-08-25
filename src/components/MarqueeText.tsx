'use client'

import React from 'react'

interface MarqueeTextProps {
  items: string[]
  speed?: number
  reverse?: boolean
  className?: string
  separator?: string
}

export default function MarqueeText({
  items,
  reverse = false,
  className = '',
  separator = '✦',
}: MarqueeTextProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `

  return (
    <div
      className={`relative w-full overflow-hidden py-4 select-none border-y border-bxc-border-light/40 dark:border-bxc-border-dark/40 bg-bxc-dark text-bxc-bg/90 ${className}`}
    >
      <div className="flex w-fit whitespace-nowrap">
        <div
          className={`flex shrink-0 items-center gap-6 text-xs md:text-sm font-semibold tracking-widest uppercase ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}
        >
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
        </div>
        <div
          aria-hidden="true"
          className={`flex shrink-0 items-center gap-6 text-xs md:text-sm font-semibold tracking-widest uppercase ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}
        >
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
        </div>
      </div>
    </div>
  )
}
