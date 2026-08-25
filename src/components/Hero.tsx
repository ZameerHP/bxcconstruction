'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import ArchitecturalCanvas from '@/components/ArchitecturalCanvas'
import MagneticButton from '@/components/MagneticButton'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const words = ['Engineering', 'the', 'Extraordinary.']

  const wordContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const wordItemVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pb-14 md:pb-20 pt-28 md:pt-36 overflow-hidden bg-bxc-dark"
    >
      {/* 3D Blueprint Interactive Particle Canvas */}
      <ArchitecturalCanvas />

      {/* Cinematic Architectural Background with Ken Burns & Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[120%] -top-[10%]"
      >
        <div className="relative w-full h-full animate-ken-burns">
          <Image
            src="/images/hero-facade.jpg"
            alt="BXC Construction Modern Architectural Build"
            fill
            priority
            className="object-cover object-center brightness-[0.75] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Multi-layered cinematic shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F0F] via-[#0E0F0F]/60 to-[#0E0F0F]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F0F]/85 via-[#0E0F0F]/40 to-transparent" />
      </motion.div>

      {/* Hero Foreground Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 mt-auto mb-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Headline & Description */}
          <div className="lg:col-span-8">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-bxc-accent animate-pulse" />
              <p className="text-[11px] uppercase tracking-[0.16em] font-medium text-bxc-accent">
                PREMIUM DESIGN-BUILD CONSTRUCTION
              </p>
            </motion.div>

            {/* Masked Headline Word-by-Word Reveal */}
            <motion.h1
              variants={wordContainerVariants}
              initial="hidden"
              animate={mounted ? 'visible' : 'hidden'}
              className="text-hero font-semibold text-bxc-bg mb-6 tracking-tight flex flex-wrap gap-x-3 md:gap-x-5 gap-y-1"
            >
              {words.map((word, idx) => (
                <span key={idx} className="overflow-hidden inline-block pb-2">
                  <motion.span
                    variants={wordItemVariants}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-bxc-bg/85 font-normal max-w-2xl leading-relaxed mb-8"
            >
              From ground-up luxury estates to landmark commercial builds — BXC Construction delivers uncompromising craftsmanship, precision engineering, and absolute transparency.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              <MagneticButton
                href="#contact"
                variant="primary"
                className="px-7 py-3 text-xs uppercase tracking-wider font-semibold shadow-lg shadow-bxc-accent/25"
              >
                Start Your Project →
              </MagneticButton>

              <Link
                href="#projects"
                className="text-xs font-semibold uppercase tracking-wider text-bxc-bg/90 hover:text-bxc-accent transition-colors duration-200 inline-flex items-center gap-2 group py-2"
              >
                <span>View Portfolio</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Floating Trust Card */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="w-full max-w-sm glass-dark rounded-card-lg p-6 border border-white/10 shadow-2xl backdrop-blur-md hover:border-bxc-accent/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex -space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E5E0D8] flex items-center justify-center text-[11px] font-bold text-bxc-text border border-bxc-bg shadow-sm">
                    RV
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D1C9BC] flex items-center justify-center text-[11px] font-bold text-bxc-text border border-bxc-bg shadow-sm">
                    AC
                  </div>
                  <div className="w-8 h-8 rounded-full bg-bxc-accent text-bxc-bg flex items-center justify-center text-[11px] font-bold border border-bxc-bg shadow-sm">
                    DK
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3 h-3 text-bxc-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-semibold text-bxc-bg ml-1">4.9/5</span>
                </div>
              </div>

              <p className="font-semibold text-bxc-bg text-sm mb-1">500+ Luxury Projects Delivered</p>
              <p className="text-xs text-bxc-bg/60 mb-4">100% On-Time & Fixed-Budget Guarantee</p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-bxc-bg/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Accepting Q3/Q4 Projects
                </span>
                <span className="text-bxc-accent font-semibold">Toronto & GTA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative z-10 flex justify-center items-center w-full"
      >
        <Link
          href="#services"
          aria-label="Scroll to services"
          className="flex flex-col items-center gap-1.5 text-bxc-bg/50 hover:text-bxc-accent transition-colors duration-200 group"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">EXPLORE</span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center p-1 group-hover:border-bxc-accent/50 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-1 rounded-full bg-bxc-accent"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  )
}
