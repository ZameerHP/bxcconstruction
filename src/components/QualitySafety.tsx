'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function QualitySafety() {
  const pillars = [
    {
      num: '01',
      title: 'Licensed & Comprehensively Insured',
      desc: 'Bonded for single projects with comprehensive commercial liability, builder risk, and workers comp coverage.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'OSHA-30 Certified Site Safety',
      desc: 'Every full-time site superintendent holds active OSHA-30 certification; zero lost-time safety incidents across 319+ builds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
      num: '03',
      title: 'Structural Milestone Audits',
      desc: 'Rigorous internal and independent engineering checks inspect and verify all foundation pours, steel connections, and drywall finishing.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M8 11h6" />
          <path d="M11 8v6" />
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="quality" className="w-full bg-bxc-dark py-24 md:py-32 text-bxc-bg border-y border-bxc-border-dark relative overflow-hidden">
      {/* Background Architectural Grid Pattern / Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(176,141,87,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-bxc-accent/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Eyebrow and Heading Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-bxc-accent/80" />
            <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
              CERTIFIED STANDARDS
            </span>
            <span className="w-8 h-[1px] bg-bxc-accent/80" />
          </div>
          <h2 className="text-section font-semibold text-white tracking-tight">
            Zero-Compromise Standards, Documented at Every Stage
          </h2>
        </motion.div>

        {/* 3 Equal-Width Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-16"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              variants={cardVariants}
              className="relative bg-[#161918] rounded-card-lg p-8 md:p-9 border border-bxc-accent/[0.15] shadow-card-dark flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:border-bxc-accent/45 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_35px_rgba(176,141,87,0.14)]"
            >
              {/* Oversized Ghost Numeral */}
              <span className="absolute top-5 right-6 text-6xl md:text-7xl font-extralight text-bxc-accent/[0.08] select-none pointer-events-none transition-all duration-500 group-hover:text-bxc-accent/[0.16] group-hover:scale-105 tracking-tighter">
                {pillar.num}
              </span>

              <div>
                {/* Icon Badge with Subtle Continuous Glowing Ring */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  {/* Subtle Continuous Breathing Halo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.25, 0.6, 0.25],
                    }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.4,
                    }}
                    className="absolute -inset-2 rounded-full bg-bxc-accent/30 blur-md pointer-events-none group-hover:opacity-100 group-hover:scale-130 transition-all duration-300"
                  />

                  {/* Circular Gold-Outlined Badge */}
                  <div className="relative w-14 h-14 rounded-full border border-bxc-accent/60 bg-[#1A1E1D] flex items-center justify-center text-bxc-accent group-hover:bg-bxc-accent group-hover:text-bxc-dark transition-all duration-300 shadow-[0_0_18px_rgba(176,141,87,0.18)] group-hover:shadow-[0_0_30px_rgba(176,141,87,0.45)]">
                    {pillar.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-200">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-[15px] text-white/70 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Subtle Accent Edge on Hover */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-bxc-accent/70 font-medium">
                  Audited & Verified
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-bxc-accent/60 group-hover:bg-bxc-accent group-hover:scale-125 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Trust-Badge Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 px-6 py-3 rounded-full bg-bxc-accent/[0.08] border border-bxc-accent/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-bxc-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-bxc-accent tracking-wide">
              OSHA-30 Certified
            </span>
            <span className="text-bxc-accent/40 font-bold">•</span>
            <span className="text-xs sm:text-sm font-medium text-bxc-accent tracking-wide">
              Fully Insured
            </span>
            <span className="text-bxc-accent/40 font-bold">•</span>
            <span className="text-xs sm:text-sm font-medium text-bxc-accent tracking-wide">
              319+ Builds Delivered
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
