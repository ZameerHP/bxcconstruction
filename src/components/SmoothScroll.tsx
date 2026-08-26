'use client'

import React, { useEffect, useRef, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Ultra-smooth, buttery 60-120fps Lenis configuration
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (target && target.hash && target.href) {
        // Check if the link points to the current page
        const targetUrl = new URL(target.href)
        if (targetUrl.pathname === window.location.pathname) {
          e.preventDefault()
          if (lenisRef.current) {
            lenisRef.current.scrollTo(target.hash, {
              duration: 1.5,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            })
            // Update URL hash without native jump
            window.history.pushState(null, '', target.hash)
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Handle pathname changes and hashes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash) {
        const target = document.querySelector(hash)
        if (target && lenisRef.current) {
          lenisRef.current.scrollTo(target as HTMLElement, { immediate: true })
          return true
        }
      }
      return false
    }

    // Give Next.js a tick to render the new page
    setTimeout(() => {
      if (!handleHash()) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true })
        } else {
          window.scrollTo(0, 0)
        }
      }
    }, 100)
  }, [pathname])

  return <>{children}</>
}
