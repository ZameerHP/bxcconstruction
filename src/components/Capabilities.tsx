'use client'

import React from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function Capabilities() {
  const capabilities = [
    {
      phase: 'PHASE 01 · STRUCTURAL & FOUNDATION',
      title: 'Precision Structural & Concrete Engineering',
      desc: 'Formwork, foundation slabs, structural steel framing, and commercial partition systems built to microscopic tolerances.',
      image: '/images/user-real-4.jpg',
    },
    {
      phase: 'PHASE 02 · ARCHITECTURAL ENVELOPE',
      title: 'Bespoke Architectural Delivery',
      desc: 'Modern composite and slatted wood cladding, exterior envelopes, and zero-tolerance residential & commercial finishing.',
      image: '/images/user-real-2.jpg',
    },
  ]

  return (
    <section id="capabilities" className="bg-bxc-bg py-24 md:py-32 w-full border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-bxc-accent" />
              <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                WHAT WE DELIVER
              </p>
            </div>
            <h2 className="text-section font-semibold text-bxc-text mb-4 tracking-tight">
              Full-Spectrum Construction Capability
            </h2>
            <p className="text-base md:text-lg text-bxc-text/70 font-normal leading-relaxed">
              From first ground break and structural framing to final interior detailing, BXC manages every phase under a single unified engineering standard.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Side-by-Side Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div
                className="group relative aspect-[4/3] rounded-card-lg overflow-hidden border border-bxc-border-light shadow-xl cursor-pointer"
                data-cursor="project"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient and Blur Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bxc-dark/90 via-bxc-dark/30 to-transparent transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-bxc-accent block mb-2">
                    {item.phase}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-bxc-bg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-bxc-bg/80 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
