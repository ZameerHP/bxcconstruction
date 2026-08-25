'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ProblemSection() {
  const problems = [
    {
      title: 'Cost Overruns & Surprises',
      conventional: 'Loose estimates and endless change orders that inflate budgets by 30-50%.',
      bxcWay: 'Fixed-price, fully itemized contracts guaranteed before breaking ground.',
    },
    {
      title: 'Missed Deadlines',
      conventional: 'Subcontractor chaos, delayed material delivery, and constant excuses.',
      bxcWay: 'Dedicated in-house site managers, critical path scheduling, and liquidated damage guarantees.',
    },
    {
      title: 'Fragmented Communication',
      conventional: 'Finger-pointing between architects, engineers, and general contractors.',
      bxcWay: 'A unified Design-Build team with one direct point of executive contact.',
    },
  ]

  return (
    <section className="w-full bg-bxc-dark py-24 md:py-32 text-bxc-bg relative overflow-hidden grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-bxc-accent" />
              <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                THE INDUSTRY REALITY
              </p>
            </div>
            <h2 className="text-section font-semibold text-bxc-bg mb-4 tracking-tight">
              Why Traditional Construction Is Broken — And How BXC Fixes It
            </h2>
            <p className="text-bxc-bg/70 text-base md:text-lg">
              Most projects fail before the foundation is poured due to misaligned incentives and fragmented teams. We engineered a better way.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.12}>
              <div className="bg-bxc-dark-secondary/70 backdrop-blur-md rounded-card-lg p-7 md:p-8 border border-white/10 hover:border-bxc-accent/50 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-semibold text-bxc-bg mb-6 group-hover:text-bxc-accent transition-colors">
                    {item.title}
                  </h3>

                  {/* Conventional Way */}
                  <div className="mb-6 p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                    <p className="text-[11px] uppercase font-bold tracking-wider text-red-400 mb-1 flex items-center gap-1.5">
                      <span>✕</span> Typical Industry Standard
                    </p>
                    <p className="text-xs text-bxc-bg/70 leading-relaxed">
                      {item.conventional}
                    </p>
                  </div>

                  {/* BXC Way */}
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/25">
                    <p className="text-[11px] uppercase font-bold tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                      <span>✓</span> The BXC Guarantee
                    </p>
                    <p className="text-xs text-bxc-bg/90 leading-relaxed font-medium">
                      {item.bxcWay}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
