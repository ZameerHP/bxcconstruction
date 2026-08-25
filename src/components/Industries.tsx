'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

const industries = [
  {
    title: 'Luxury Residential',
    desc: 'Custom estates & penthouses',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    title: 'Hospitality & Resorts',
    desc: 'Boutique hotels & venues',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01"/>
        <path d="M16 6h.01"/>
        <path d="M12 6h.01"/>
        <path d="M12 10h.01"/>
        <path d="M12 14h.01"/>
      </svg>
    )
  },
  {
    title: 'Corporate & Office',
    desc: 'Class-A headquarters',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
  {
    title: 'Retail & Mixed-Use',
    desc: 'High-traffic commercial',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
        <path d="M3 6h18"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    )
  },
  {
    title: 'Healthcare Facilities',
    desc: 'Medical & clinical centers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        <path d="M12 5v14"/>
        <path d="M5 12h14"/>
      </svg>
    )
  },
  {
    title: 'Institutional & Public',
    desc: 'Civic & educational builds',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" x2="21" y1="22" y2="22"/>
        <line x1="6" x2="6" y1="18" y2="11"/>
        <line x1="10" x2="10" y1="18" y2="11"/>
        <line x1="14" x2="14" y1="18" y2="11"/>
        <line x1="18" x2="18" y1="18" y2="11"/>
        <polygon points="12 2 20 7 4 7"/>
      </svg>
    )
  }
]

export default function Industries() {
  return (
    <section id="industries" className="w-full bg-bxc-bg py-24 md:py-28 border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-bxc-accent" />
            <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
              SECTORS OF EXPERTISE
            </span>
          </div>
          <h2 className="text-section font-semibold text-bxc-text tracking-tight mb-4">
            Built Across Every Sector That Demands Precision
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12" staggerDelay={0.06}>
          {industries.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="flex flex-col items-center text-center p-6 rounded-card bg-white border border-bxc-border-light hover:border-bxc-accent/50 hover:shadow-xl transition-all duration-300 h-full group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-bxc-card flex items-center justify-center text-bxc-accent mb-4 group-hover:bg-bxc-accent group-hover:text-bxc-bg group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-bxc-text mb-1 group-hover:text-bxc-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-bxc-text/60 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
