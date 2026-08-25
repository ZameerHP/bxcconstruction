'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

const testimonials = [
  {
    quote:
      'BXC delivered our 14,000 sq ft custom estate two weeks ahead of schedule, with zero change-order surprises. Unmatched discipline and craftsmanship.',
    author: 'Richard Voss',
    role: 'Private Estate Owner · Bridle Path',
    initials: 'RV',
  },
  {
    quote:
      'Their in-house engineering team caught a critical cantilever structural flaw our initial architect missed — saved us over six figures and 3 months.',
    author: 'Amanda Cole',
    role: 'Managing Partner · Cole Hospitality Group',
    initials: 'AC',
  },
  {
    quote:
      'The weekly drone logs and transparent cost reporting alone made them stand leagues above other luxury general contractors we interviewed.',
    author: 'David Kim',
    role: 'Development Director · Meridian Urban',
    initials: 'DK',
  },
  {
    quote:
      'White-glove from initial structural feasibility to the final handover manual. This is what true design-build excellence looks like.',
    author: 'Sophia Marchetti',
    role: 'Principal · Marchetti Luxury Holdings',
    initials: 'SM',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bxc-bg py-24 md:py-32 w-full border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-bxc-accent" />
                <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  CLIENT VOICES
                </span>
              </div>
              <h2 className="text-section font-semibold text-bxc-text tracking-tight">
                Reputations Built on Trust
              </h2>
            </div>
            <p className="text-sm md:text-base text-bxc-text/70 max-w-md">
              Read how clients experience our uncompromising standards across residential and commercial developments.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-card-lg p-8 md:p-10 border border-bxc-border-light h-full flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:border-bxc-accent/40 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-bxc-accent fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-bxc-text/85 leading-relaxed mb-8 italic font-normal">
                    “{testimonial.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-bxc-border-light/50">
                  <div className="w-11 h-11 rounded-full bg-bxc-dark text-bxc-accent flex items-center justify-center text-xs font-bold shadow-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-bxc-text">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-bxc-text/60 font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
