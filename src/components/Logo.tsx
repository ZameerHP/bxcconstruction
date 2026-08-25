'use client'

import React from 'react'
import Image from 'next/image'

interface LogoProps {
  dark?: boolean
  hero?: boolean
  navbar?: boolean
  className?: string
}

export default function Logo({ dark = false, hero = false, navbar = false, className = '' }: LogoProps) {
  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="BXC Construction"
        width={300}
        height={90}
        priority
        style={{ width: navbar ? 68 : hero ? 150 : 85, height: 'auto' }}
        className={`${hero ? 'h-16 md:h-20' : navbar ? 'h-4 md:h-5' : 'h-5 md:h-6'} w-auto object-contain transition-all duration-300 ${
          dark ? 'brightness-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]' : 'drop-shadow-sm'
        }`}
      />
    </div>
  )
}
