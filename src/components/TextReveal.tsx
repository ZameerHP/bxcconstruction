'use client'

import React, { useRef, useEffect, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TextRevealProps {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  delay?: number
  staggerAmount?: number
  scrub?: boolean
}

export default function TextReveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  staggerAmount = 0.03,
  scrub = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container || hasAnimated.current) return

    const text = container.textContent || ''
    if (!text.trim()) return

    // Split text into words, then each word into characters
    const words = text.split(' ')
    container.innerHTML = ''

    const wordSpans: HTMLElement[] = []
    words.forEach((word, wIdx) => {
      const wordWrapper = document.createElement('span')
      wordWrapper.style.display = 'inline-block'
      wordWrapper.style.overflow = 'hidden'
      wordWrapper.style.verticalAlign = 'bottom'
      wordWrapper.style.paddingBottom = '0.08em'

      const wordInner = document.createElement('span')
      wordInner.style.display = 'inline-block'
      wordInner.textContent = word
      wordInner.style.willChange = 'transform'

      wordWrapper.appendChild(wordInner)
      container.appendChild(wordWrapper)
      wordSpans.push(wordInner)

      if (wIdx < words.length - 1) {
        const space = document.createTextNode('\u00A0')
        container.appendChild(space)
      }
    })

    // Set initial state
    gsap.set(wordSpans, {
      y: '110%',
      opacity: 0,
    })

    const triggerConfig = scrub
      ? {
          trigger: container,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 1,
        }
      : {
          trigger: container,
          start: 'top 85%',
          once: true,
        }

    gsap.to(wordSpans, {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      stagger: staggerAmount,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: triggerConfig,
      onComplete: () => {
        hasAnimated.current = true
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === container) st.kill()
      })
    }
  }, [delay, staggerAmount, scrub])

  return (
    <Tag ref={containerRef as React.RefObject<any>} className={className}>
      {children}
    </Tag>
  )
}
