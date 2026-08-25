'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

export default function WhyBXC() {
  const cards = [
    {
      number: '01',
      title: 'QUALITY CRAFTSMANSHIP',
      description:
        'We pay attention to every detail, from the foundation to the final finish.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'RELIABLE WORK',
      description:
        'Clear planning, professional teams, and consistent communication throughout your project.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'QUALITY MATERIALS',
      description:
        'We use trusted materials selected for durability, performance, and lasting results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      number: '04',
      title: 'OUR COMMITMENT',
      description:
        'We stay focused on your timeline, budget, and expectations from start to finish.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
    },
  ]

  return (
    <section id="why-bxc" className="bg-bxc-bg py-28 md:py-36 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-16 md:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-bxc-accent" />
              <p className="text-eyebrow uppercase tracking-eyebrow font-semibold text-bxc-accent">
                WHY CHOOSE US
              </p>
            </div>
            <h2 className="text-section font-semibold text-bxc-text tracking-tight mb-4">
              Built With Purpose. Delivered With Care.
            </h2>
            <p className="text-sm md:text-base text-bxc-text/75 leading-relaxed max-w-2xl">
              We combine skilled craftsmanship, reliable project management, and quality materials to deliver work you can be proud of.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Elevated Cards with Ghost Numbers & Distinct Icons */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {cards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="relative overflow-hidden group h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-9 border border-bxc-border-light card-premium flex flex-col justify-between">
                {/* Large Ultra-Lightweight Ghost Numeral in Background */}
                <span className="absolute -top-3 -right-2 text-7xl md:text-8xl font-mono font-extrabold text-bxc-accent/10 select-none pointer-events-none group-hover:text-bxc-accent/20 transition-colors duration-500">
                  {card.number}
                </span>

                <div className="relative z-10">
                  {/* Distinct Thin-Line Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-bxc-card border border-bxc-border-light text-bxc-accent flex items-center justify-center mb-8 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-bxc-accent group-hover:text-bxc-bg">
                    {card.icon}
                  </div>

                  <h3 className="text-base font-bold text-bxc-text tracking-wider uppercase mb-2.5 group-hover:text-bxc-accent transition-colors duration-200">
                    {card.title}
                  </h3>

                  <p className="text-sm text-bxc-text/70 leading-relaxed font-normal">
                    {card.description}
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
