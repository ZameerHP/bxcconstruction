'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      description: 'Understanding your vision, needs, and budget.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      ),
    },
    {
      step: '02',
      title: 'PLAN',
      description: 'Turning your ideas into a clear construction plan.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      step: '03',
      title: 'PREPARE',
      description: 'Organizing materials, permits, and the construction team.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
    },
    {
      step: '04',
      title: 'BUILD',
      description: 'Bringing the project to life with quality craftsmanship.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20"></path>
          <path d="M5 20V8l7-5 7 5v12"></path>
          <path d="M9 20v-6h6v6"></path>
          <line x1="12" y1="3" x2="12" y2="8"></line>
        </svg>
      ),
    },
    {
      step: '05',
      title: 'HANDOVER',
      description: 'Final inspections, finishing touches, and your completed project.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2l-2 2m-1.5 1.5L10 13l-4 4-2-2 4-4 7.5-7.5"></path>
          <circle cx="18.5" cy="5.5" r="3.5"></circle>
          <path d="M15 9l-2-2"></path>
        </svg>
      ),
    },
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'center 45%'],
  })

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="bg-bxc-bg py-28 md:py-36 w-full relative overflow-hidden border-t border-bxc-border-light/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-20 md:mb-24 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-bxc-accent" />
              <p className="text-eyebrow uppercase tracking-eyebrow font-semibold text-bxc-accent">
                OUR PROCESS
              </p>
            </div>
            <h2 className="text-section font-semibold text-bxc-text tracking-tight relative inline-block">
              Built Step by Step.
            </h2>
          </div>
        </ScrollReveal>

        {/* Desktop Horizontal Connecting Timeline */}
        <div className="hidden lg:block relative my-8">
          {/* Static Background Guideline */}
          <div className="absolute top-6 left-12 right-12 h-[2px] bg-bxc-border-light z-0" />

          {/* Animated Scroll-Scrubbed Gold Progress Line */}
          <motion.div
            style={{ scaleX: lineScaleX, transformOrigin: 'left' }}
            className="absolute top-6 left-12 right-12 h-[2px] bg-gradient-to-r from-bxc-accent via-[#c9a36a] to-bxc-accent z-0 shadow-[0_0_12px_rgba(176,141,87,0.5)]"
          />

          {/* 5 Steps on the line */}
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => (
              <ScrollReveal key={item.step} delay={idx * 0.12}>
                <div className="flex flex-col items-center text-center group cursor-default">
                  {/* Step Circular Node on the Line */}
                  <div className="w-12 h-12 rounded-full border-2 border-bxc-accent bg-bxc-dark text-bxc-accent flex items-center justify-center text-xs font-mono font-bold mb-8 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-bxc-accent group-hover:text-bxc-bg group-hover:shadow-[0_0_20px_rgba(176,141,87,0.4)]">
                    {item.step}
                  </div>

                  {/* Step Card with Layered Depth */}
                  <div className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-bxc-border-light card-premium flex flex-col items-center text-center min-h-[220px]">
                    <div className="w-10 h-10 rounded-xl bg-bxc-card border border-bxc-border-light text-bxc-accent flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-bxc-accent-hover">
                      {item.icon}
                    </div>

                    <h3 className="text-sm font-bold text-bxc-text tracking-wider uppercase mb-2.5 group-hover:text-bxc-accent transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-xs text-bxc-text/70 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Connecting Timeline */}
        <div className="block lg:hidden relative ml-3 mt-12">
          {/* Static Vertical Line */}
          <div className="absolute top-6 bottom-6 left-6 w-[2px] bg-bxc-border-light z-0" />

          {/* Animated Vertical Line */}
          <motion.div
            style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
            className="absolute top-6 bottom-6 left-6 w-[2px] bg-bxc-accent z-0 shadow-[0_0_8px_rgba(176,141,87,0.5)]"
          />

          <div className="flex flex-col space-y-10 relative z-10">
            {steps.map((item, idx) => (
              <ScrollReveal key={item.step} delay={idx * 0.1}>
                <div className="flex items-start gap-6 group">
                  {/* Node */}
                  <div className="w-12 h-12 rounded-full border-2 border-bxc-accent bg-bxc-dark text-bxc-accent flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-md transition-all duration-300 group-hover:bg-bxc-accent group-hover:text-bxc-bg">
                    {item.step}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-bxc-border-light card-premium">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-bxc-card border border-bxc-border-light text-bxc-accent flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-bold text-bxc-text tracking-wider uppercase group-hover:text-bxc-accent transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-bxc-text/70 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
