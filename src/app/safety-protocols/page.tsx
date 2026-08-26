'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import AnimationProvider from '@/components/AnimationProvider'

export default function SafetyProtocolsPage() {
  const safetyPillars = [
    {
      num: '01',
      title: 'OSHA-30 Certified Leadership',
      desc: 'Every full-time BXC site superintendent holds active OSHA-30 construction safety certification, ensuring direct enforcement of provincial and federal occupational health and safety regulations across every active build.',
    },
    {
      num: '02',
      title: 'Mandatory PPE & Site Access Control',
      desc: '100% compliance with CSA-approved Personal Protective Equipment (hard hats, steel-toe footwear, high-visibility apparel, eye and respiratory protection). Controlled perimeter security prevents unauthorized site entry.',
    },
    {
      num: '03',
      title: 'Structural Milestone Audits',
      desc: 'Independent and internal engineering checks inspect and verify all foundation pours, structural steel assemblies, load-bearing framing, and drywall assemblies prior to subsequent trade work.',
    },
    {
      num: '04',
      title: 'Subcontractor Safety Compliance',
      desc: 'All trade partners and specialty subcontractors must provide verified WSIB clearance certificates, comprehensive commercial general liability insurance, and execute BXC Site Safety Compliance Deeds prior to step-on.',
    },
  ]

  return (
    <AnimationProvider>
      <SmoothScroll>
        <CustomCursor />
        <div className="relative w-full min-h-screen bg-bxc-bg text-bxc-text selection:bg-bxc-accent selection:text-bxc-bg">
          <Navbar />
          <main className="pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              {/* Breadcrumb & Header */}
              <div className="mb-12">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-bxc-accent uppercase tracking-widest hover:text-bxc-accent-hover transition-colors mb-6"
                >
                  <span>←</span> Return to Homepage
                </Link>
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-6 h-[1px] bg-bxc-accent" />
                  <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                    CERTIFIED PROTOCOLS
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-semibold text-bxc-text tracking-tight mb-4">
                  Site Safety & Compliance Standards
                </h1>
                <p className="text-sm text-bxc-text/60">
                  Documented Zero-Compromise Protocols for Active Residential & Commercial Job Sites
                </p>
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {safetyPillars.map((p) => (
                  <div
                    key={p.num}
                    className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-bxc-accent mb-2 block">
                        PROTOCOL {p.num}
                      </span>
                      <h3 className="text-lg font-bold text-bxc-text mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-bxc-text/75 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* In-Depth Policies */}
              <div className="prose prose-stone max-w-none text-bxc-text/80 leading-relaxed space-y-8 text-sm md:text-base">
                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    1. Site Safety Training & Daily Toolbox Talks
                  </h2>
                  <p>
                    Before starting work each morning, BXC project superintendents conduct mandatory site-specific safety briefings with all active trades. These sessions review daily crane maneuvers, excavation hazards, overhead structural work, weather conditions, and emergency egress corridors.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    2. PPE Standards & Environmental Hazard Controls
                  </h2>
                  <p className="mb-3">
                    BXC enforces strict personal protective equipment protocols on 100% of our active projects:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-bxc-text/75">
                    <li><strong className="text-bxc-text">Head & Foot Protection:</strong> CSA Type 2 hard hats and Green Triangle Grade 1 protective footwear at all times.</li>
                    <li><strong className="text-bxc-text">Fall Protection:</strong> 100% tie-off mandatory on scaffolding, high-elevation staging, and roof perimeters exceeding 2.4 meters (8 feet).</li>
                    <li><strong className="text-bxc-text">Air Quality & Dust Containment:</strong> HEPA-filtered air scrubbers, negative pressure enclosures during demolition, and zero-silica wet-cutting procedures.</li>
                  </ul>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    3. Incident Reporting & Zero-Tolerance Policy
                  </h2>
                  <p>
                    BXC operates with an uncompromising zero-lost-time record across 319+ completed builds. Any unsafe condition, near-miss, or minor incident is documented in real-time within our digital site safety logs. Immediate corrective measures are executed, and work is halted in any zone failing to meet provincial safety thresholds.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    4. Insurance, Bonding & Licensing Credentials
                  </h2>
                  <p className="mb-4">
                    BXC Construction Inc. maintains comprehensive commercial general liability insurance, builder&apos;s risk coverage, and project performance bonding. For certificates of insurance or safety pre-qualification packets, contact our safety director:
                  </p>
                  <div className="bg-bxc-card p-5 rounded-xl border border-bxc-border-light text-xs md:text-sm font-mono space-y-1">
                    <p className="font-bold text-bxc-text">BXC Construction Inc. — Health & Safety Division</p>
                    <p className="text-bxc-text/75">123 Construction Avenue, Suite 400, Toronto, ON M5V 2T6</p>
                    <p className="text-bxc-accent">Email: info@bxcconstruction.ca</p>
                    <p className="text-bxc-text/75">Phone: +1 (437) 450-5507 / +1 (437) 973-4229</p>
                  </div>
                </section>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </AnimationProvider>
  )
}
