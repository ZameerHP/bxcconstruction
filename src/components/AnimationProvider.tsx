'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimationProviderProps {
  children: React.ReactNode
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Default GSAP settings for premium feel
    gsap.defaults({
      ease: 'power3.out',
      duration: 0.8,
    })

    // Refresh ScrollTrigger after page load
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
