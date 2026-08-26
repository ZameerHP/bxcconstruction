'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

export default function QualitySafety() {
  const pillars = [
    {
      title: 'Licensed & Comprehensively Insured',
      desc: 'Bonded for single projects with comprehensive commercial liability, builder risk, and workers comp coverage.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'OSHA-30 Certified Site Safety',
      desc: 'Every full-time site superintendent holds active OSHA-30 certification; zero lost-time safety incidents across 319+ builds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M8 11h6" />
          <path d="M11 8v6" />
        </svg>
      ),
    },
  ]

  return (
    <section id="quality" className="w-full bg-bxc-bg py-24 md:py-32 border-t border-bxc-border-light/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-bxc-accent" />
                <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  CERTIFIED STANDARDS
                </span>
              </div>
              <h2 className="text-section font-semibold text-bxc-text mb-10 tracking-tight">
                Zero-Compromise Standards, Documented at Every Stage
              </h2>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.15} className="space-y-0 relative">
              {pillars.map((pillar, idx) => (
                <StaggerItem key={idx}>
                  <div className={`relative flex items-start gap-5 md:gap-6 p-5 md:p-6 group transition-all duration-300 hover:bg-bxc-accent/[0.03] ${idx !== pillars.length - 1 ? 'border-b border-bxc-border-light/50' : ''}`}>
                    {/* Ghost Numeral */}
                    <span className="absolute top-1/2 -translate-y-1/2 right-6 text-7xl md:text-8xl font-black text-bxc-accent/[0.04] select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                      0{idx + 1}
                    </span>
                    
                    {/* Icon Badge */}
                    <div className="relative shrink-0 mt-1">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-bxc-accent/40 flex items-center justify-center text-bxc-accent group-hover:bg-bxc-accent group-hover:text-bxc-bg transition-colors duration-300 relative z-10 bg-bxc-bg">
                        {pillar.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 pr-10 md:pr-16">
                      <h3 className="font-bold text-bxc-text text-base mb-2 group-hover:text-bxc-accent transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-bxc-text/70 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column Supporting Image */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Image Container with Clip Path Reveal */}
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-card-lg overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-bxc-accent/30 w-full"
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-bxc-accent/20 z-10 rounded-card-lg pointer-events-none" />
              <Image
                src="/images/782144319_925739119992036_1634993976219471516_n.jpg"
                alt="Quality Standards"
                fill
                className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>

            {/* Floating Credential Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:-left-6 lg:translate-x-0 z-20 bg-bxc-dark text-bxc-bg py-3.5 px-5 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-bxc-accent/40 flex items-center gap-3.5 whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-bxc-accent/15 flex items-center justify-center text-bxc-accent shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="text-[13px] font-medium tracking-wide">
                OSHA-30 Certified <span className="text-bxc-accent mx-1.5">•</span> Fully Insured
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
