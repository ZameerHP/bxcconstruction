'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

const areas = [
  'Toronto',
  'Mississauga',
  'Brampton',
  'Vaughan',
  'Richmond Hill',
  'Hamilton',
  'GTA',
  'Ontario',
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-bxc-bg py-20 md:py-24 w-full border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-bxc-accent" />
              <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                WHERE WE WORK
              </p>
              <span className="w-6 h-[1px] bg-bxc-accent" />
            </div>
            <h2 className="text-section font-semibold text-bxc-text tracking-tight">
              Proudly Serving the Greater Toronto Area
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 max-w-5xl mx-auto"
          staggerDelay={0.05}
        >
          {areas.map((area, idx) => (
            <StaggerItem key={idx}>
              <div className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-card bg-white border border-bxc-border-light hover:border-bxc-accent hover:shadow-md transition-all duration-300 group cursor-default text-center">
                <span className="text-bxc-accent text-xs group-hover:scale-110 transition-transform">
                  📍
                </span>
                <span className="text-xs md:text-sm font-semibold text-bxc-text group-hover:text-bxc-accent transition-colors">
                  {area}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
