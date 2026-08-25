'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

export default function WhyBXC() {
  const cards = [
    {
      number: '01',
      title: 'Uncompromising Craftsmanship',
      description:
        'Every joint, weld, and finish is executed to a standard most firms reserve for showcase projects. We accept nothing less than perfection.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Engineering-First Approach',
      description:
        'We design for structural integrity and longevity before we design for aesthetics — then we deliver both with architectural rigor.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Radical Transparency',
      description:
        'Real-time project dashboards, weekly site logs, drone capture, and a dedicated executive project lead — always reachable.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'On-Time & Fixed Budget',
      description:
        'Our fixed-scope guaranteed contracts and in-house supply chain mean the number we quote is the exact number you pay.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ]

  return (
    <section id="why-bxc" className="bg-bxc-bg py-24 md:py-32 w-full relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-bxc-accent" />
                <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  OUR PHILOSOPHY
                </p>
              </div>
              <h2 className="text-section font-semibold text-bxc-text tracking-tight">
                The BXC Standard
              </h2>
            </div>
            <p className="text-bxc-text/70 text-sm md:text-base max-w-md">
              We operate at the intersection of architectural beauty, structural precision, and disciplined execution.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="card-3d bg-white/70 backdrop-blur-sm rounded-card-lg p-7 md:p-8 border border-bxc-border-light shadow-sm hover:shadow-2xl hover:border-bxc-accent/50 transition-all duration-500 h-full flex flex-col justify-between group">
                <div className="card-3d-inner">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-bxc-card border border-bxc-border-light flex items-center justify-center text-bxc-accent group-hover:bg-bxc-accent group-hover:text-bxc-bg group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {card.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-bxc-accent/50 group-hover:text-bxc-accent transition-colors">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="text-card-title mb-3 font-semibold text-bxc-text group-hover:text-bxc-accent transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-sm text-bxc-text/70 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-bxc-border-light/40 flex items-center text-xs font-semibold text-bxc-accent tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>DISCOVER EXCELLENCE →</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
