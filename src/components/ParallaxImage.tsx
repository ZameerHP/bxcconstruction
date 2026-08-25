'use client'

import React, { useRef, useEffect, ReactNode } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  scale?: boolean
  children?: ReactNode
  priority?: boolean
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.2,
  scale = true,
  children,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    tl.fromTo(
      image,
      {
        y: `-${speed * 100}%`,
        scale: scale ? 1.15 : 1,
      },
      {
        y: `${speed * 100}%`,
        scale: scale ? 1 : 1,
        ease: 'none',
      }
    )

    return () => {
      tl.kill()
    }
  }, [speed, scale])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imageRef} className="absolute inset-[-15%] w-[130%] h-[130%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  )
}
