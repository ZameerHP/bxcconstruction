'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: '01',
      title: 'Discovery & Feasibility',
      description: 'Zoning review, structural assessment, budget modeling, and feasibility analysis.',
    },
    {
      number: '02',
      title: 'Architectural Engineering',
      description: 'Integrated CAD/BIM drawings, structural engineering stamps, and municipal permitting.',
    },
    {
      number: '03',
      title: 'Pre-Construction Procurement',
      description: 'Direct mill sourcing, critical path scheduling, and master trade contractor vetting.',
    },
    {
      number: '04',
      title: 'Precision Construction',
      description: 'Daily site management, milestone structural inspections, and weekly executive reporting.',
    },
    {
      number: '05',
      title: 'Commissioning & Handover',
      description: 'Punch-list perfection, air balance testing, complete warranty manual, and keys in hand.',
    },
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'center center'],
  })

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="bg-bxc-bg py-24 md:py-32 w-full border-t border-bxc-border-light/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-bxc-accent" />
              <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                DISCIPLINED EXECUTION
              </p>
            </div>
            <h2 className="text-section font-semibold text-bxc-text tracking-tight">
              From Concept to Handover in Five Disciplined Phases
            </h2>
            <p className="text-sm md:text-base text-bxc-text/70 mt-4">
              Every phase is governed by stringent milestones and single-point accountability to eliminate delays and budget surprises.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative my-16">
          {/* Background Static Line */}
          <div className="absolute top-6 left-6 right-6 h-[2px] bg-bxc-border-light" />

          {/* Animated Scrubbed Line */}
          <motion.div
            style={{ scaleX: lineScaleX, transformOrigin: 'left' }}
            className="absolute top-6 left-6 right-6 h-[2px] bg-bxc-accent z-0 shadow-glow"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <ScrollReveal key={step.number} delay={idx * 0.08}>
                <div className="flex flex-col items-start text-left group">
                  {/* Step Circle with Pulse */}
                  <div className="w-12 h-12 rounded-full border-2 border-bxc-accent bg-bxc-bg flex items-center justify-center text-sm font-bold text-bxc-accent mb-6 shadow-sm group-hover:bg-bxc-accent group-hover:text-bxc-bg group-hover:scale-110 transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-base text-bxc-text mb-2 pr-2 group-hover:text-bxc-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-bxc-text/70 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative ml-3 mt-12">
          <div className="absolute top-4 bottom-4 left-5 w-[2px] bg-bxc-border-light" />

          <motion.div
            style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
            className="absolute top-4 bottom-4 left-5 w-[2px] bg-bxc-accent z-0"
          />

          <div className="flex flex-col space-y-10 relative z-10">
            {steps.map((step, idx) => (
              <ScrollReveal key={step.number} delay={idx * 0.1}>
                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-full border-2 border-bxc-accent bg-bxc-bg flex items-center justify-center text-xs font-bold text-bxc-accent shrink-0 shadow-sm group-hover:bg-bxc-accent group-hover:text-bxc-bg transition-colors">
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-base text-bxc-text mb-1 group-hover:text-bxc-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-bxc-text/70 leading-relaxed font-normal">
                      {step.description}
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
