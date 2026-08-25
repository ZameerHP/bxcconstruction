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
    },
    {
      number: '02',
      title: 'RELIABLE WORK',
      description:
        'Clear planning, professional teams, and consistent communication throughout your project.',
    },
    {
      number: '03',
      title: 'QUALITY MATERIALS',
      description:
        'We use trusted materials selected for durability, performance, and lasting results.',
    },
    {
      number: '04',
      title: 'OUR COMMITMENT',
      description:
        'We stay focused on your timeline, budget, and expectations from start to finish.',
    },
  ]

  return (
    <section id="why-bxc" className="bg-bxc-bg py-24 md:py-32 w-full relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-16 md:mb-20 max-w-3xl">
            <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent mb-3">
              WHY CHOOSE US
            </p>
            <h2 className="text-section font-semibold text-bxc-text tracking-tight mb-4">
              Built With Purpose. Delivered With Care.
            </h2>
            <p className="text-sm md:text-base text-bxc-text/75 leading-relaxed">
              We combine skilled craftsmanship, reliable project management, and quality materials to deliver work you can be proud of.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Clean Minimal Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {cards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="group h-full bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-9 border border-bxc-border-light transition-all duration-300 hover:-translate-y-1.5 hover:border-bxc-accent/50 hover:shadow-xl hover:shadow-black/[0.04] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-bold font-mono tracking-wider text-bxc-accent">
                      {card.number}
                    </span>
                    <span className="w-8 h-[1px] bg-bxc-border-light group-hover:w-14 group-hover:bg-bxc-accent transition-all duration-300" />
                  </div>

                  <h3 className="text-base font-bold text-bxc-text tracking-wider uppercase mb-3.5 group-hover:text-bxc-accent transition-colors duration-200">
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
