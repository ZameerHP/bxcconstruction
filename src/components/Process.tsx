'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      description: 'Understanding your vision, needs, and budget.',
    },
    {
      step: '02',
      title: 'PLAN',
      description: 'Turning your ideas into a clear construction plan.',
    },
    {
      step: '03',
      title: 'PREPARE',
      description: 'Organizing materials, permits, and the construction team.',
    },
    {
      step: '04',
      title: 'BUILD',
      description: 'Bringing the project to life with quality craftsmanship.',
    },
    {
      step: '05',
      title: 'HANDOVER',
      description: 'Final inspections, finishing touches, and your completed project.',
    },
  ]

  return (
    <section id="process" className="bg-bxc-bg py-24 md:py-32 w-full relative overflow-hidden border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-16 md:mb-20 max-w-2xl">
            <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent mb-3">
              OUR PROCESS
            </p>
            <h2 className="text-section font-semibold text-bxc-text tracking-tight">
              Built Step by Step.
            </h2>
          </div>
        </ScrollReveal>

        {/* 5 Clean Minimal Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {steps.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="group h-full bg-white/60 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-bxc-border-light transition-all duration-300 hover:-translate-y-1 hover:border-bxc-accent/50 hover:shadow-xl hover:shadow-black/[0.03] flex flex-col justify-between">
                <div>
                  {/* Step label with subtle accent line */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold font-mono tracking-widest text-bxc-accent">
                      {item.step}
                    </span>
                    <span className="w-6 h-[1px] bg-bxc-border-light group-hover:w-10 group-hover:bg-bxc-accent transition-all duration-300" />
                  </div>

                  <h3 className="text-base font-bold text-bxc-text tracking-wider uppercase mb-3 group-hover:text-bxc-accent transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-sm text-bxc-text/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
