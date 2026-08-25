'use client'

import React from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function QualitySafety() {
  const pillars = [
    {
      title: 'Licensed & Comprehensively Insured',
      desc: 'Bonded for single projects with comprehensive commercial liability, builder risk, and workers comp coverage.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'OSHA-30 Certified Site Safety',
      desc: 'Every full-time site superintendent holds active OSHA-30 certification; zero lost-time safety incidents across 319+ builds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M2 18.25V22h20v-3.75" />
          <path d="M12 2v2" />
          <path d="M6 10v2a6 6 0 0 0 12 0v-2" />
          <path d="M19 14h-1" />
          <path d="M6 14H5" />
          <path d="M12 14v4" />
          <path d="M7 6h10c1.1 0 2 .9 2 2v2c0 3.3-2.7 6-6 6s-6-2.7-6-6V8c0-1.1.9-2 2-2Z" />
        </svg>
      ),
    },
    {
      title: 'Structural Milestone Audits',
      desc: 'Rigorous internal and independent engineering checks inspect and verify all foundation pours, steel connections, and drywall finishing.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      ),
    },
  ]

  return (
    <section id="quality" className="w-full bg-bxc-bg py-24 md:py-32 border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text & Pillars */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-[1px] bg-bxc-accent" />
                  <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                    CERTIFIED STANDARDS
                  </span>
                </div>
                <h2 className="text-section font-semibold text-bxc-text mb-8 tracking-tight">
                  Zero-Compromise Standards, Documented at Every Stage
                </h2>

                <div className="space-y-6">
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-bxc-border-light hover:border-bxc-accent/50 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-bxc-card flex items-center justify-center shrink-0 text-bxc-accent group-hover:bg-bxc-accent group-hover:text-bxc-bg transition-colors duration-300">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-bxc-text text-base mb-1 group-hover:text-bxc-accent transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs md:text-sm text-bxc-text/70 leading-relaxed font-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column Supporting Image */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              <div className="group relative aspect-[4/5] rounded-card-lg overflow-hidden border border-bxc-border-light shadow-2xl">
                <Image
                  src="/images/779277441_28280400428319935_8371569718575634018_n.jpg"
                  alt="Site Quality and Craftsmanship"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bxc-dark/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-bxc-accent block mb-1">
                    Quality Protocol
                  </span>
                  <p className="text-lg font-semibold text-bxc-bg">
                    Precision Drywall & Structural Finishing
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
