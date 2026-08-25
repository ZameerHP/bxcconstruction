'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const partners = [
  'ARCHITECTURAL DIGEST',
  'CUSTOM HOME BUILDERS ASSOC',
  'ONTARIO GENERAL CONTRACTORS',
  'LEED CERTIFIED',
  'TORONTO LUXURY LIVING',
  'CANADIAN GREEN BUILDING COUNCIL',
]

export default function TrustedBy() {
  return (
    <section className="w-full bg-bxc-bg py-12 md:py-16 border-b border-bxc-border-light/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-bxc-accent" />
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-bxc-text/60">
                INDUSTRY ACCREDITATION & PARTNERS
              </p>
            </div>

            {/* Seamless Ticker for mobile & desktop */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="text-xs md:text-sm font-semibold tracking-wider text-bxc-text/40 hover:text-bxc-accent transition-colors duration-300 select-none cursor-default"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
