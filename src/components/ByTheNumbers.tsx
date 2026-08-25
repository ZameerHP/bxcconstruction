'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'

export default function ByTheNumbers() {
  const ref1 = useCountUp({ end: 319, suffix: '+' })
  const ref2 = useCountUp({ end: 4, suffix: '+' })

  return (
    <section id="stats" className="w-full bg-bxc-dark py-24 md:py-32 text-bxc-bg border-t border-bxc-border-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-bxc-accent" />
              <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                TRACK RECORD
              </span>
              <span className="w-6 h-[1px] bg-bxc-accent" />
            </div>
            <h2 className="text-section font-semibold text-bxc-bg tracking-tight">
              Built on Experience. Proven by Results.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 319+ Completed Projects */}
          <StaggerItem>
            <div className="bg-bxc-dark-secondary/70 backdrop-blur-md rounded-card-lg p-8 border border-white/10 text-center shadow-xl hover:border-bxc-accent/50 transition-all duration-300 group flex flex-col items-center justify-center min-h-[170px]">
              <div className="text-4xl md:text-5xl font-bold text-bxc-accent mb-2 tracking-tight">
                <span ref={ref1}>0+</span>
              </div>
              <div className="text-xs text-bxc-bg/70 uppercase tracking-widest font-semibold">
                Completed Projects
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: 4+ Years Experience */}
          <StaggerItem>
            <div className="bg-bxc-dark-secondary/70 backdrop-blur-md rounded-card-lg p-8 border border-white/10 text-center shadow-xl hover:border-bxc-accent/50 transition-all duration-300 group flex flex-col items-center justify-center min-h-[170px]">
              <div className="text-4xl md:text-5xl font-bold text-bxc-accent mb-2 tracking-tight">
                <span ref={ref2}>0+</span>
              </div>
              <div className="text-xs text-bxc-bg/70 uppercase tracking-widest font-semibold">
                Years Experience
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: 2022 Established */}
          <StaggerItem>
            <div className="bg-bxc-dark-secondary/70 backdrop-blur-md rounded-card-lg p-8 border border-white/10 text-center shadow-xl hover:border-bxc-accent/50 transition-all duration-300 group flex flex-col items-center justify-center min-h-[170px]">
              <div className="text-4xl md:text-5xl font-bold text-bxc-accent mb-2 tracking-tight">
                2022
              </div>
              <div className="text-xs text-bxc-bg/70 uppercase tracking-widest font-semibold">
                Established
              </div>
            </div>
          </StaggerItem>

          {/* Card 4: Licensed Construction Company */}
          <StaggerItem>
            <div className="bg-bxc-dark-secondary/70 backdrop-blur-md rounded-card-lg p-8 border border-white/10 text-center shadow-xl hover:border-bxc-accent/50 transition-all duration-300 group flex flex-col items-center justify-center min-h-[170px]">
              <div className="w-12 h-12 rounded-full border-2 border-bxc-accent text-bxc-accent flex items-center justify-center mb-2.5 shadow-glow">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="text-xs text-bxc-bg/90 uppercase tracking-widest font-semibold">
                Licensed Construction Company
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
