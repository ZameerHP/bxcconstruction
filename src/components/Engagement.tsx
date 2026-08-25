'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'

export default function Engagement() {
  return (
    <section id="engagement" className="bg-bxc-bg py-24 md:py-32 w-full border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-bxc-accent" />
              <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                ENGAGEMENT MODELS
              </span>
            </div>
            <h2 className="text-section font-semibold text-bxc-text tracking-tight">
              Three Flexible Ways to Partner With BXC
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <div className="bg-white rounded-card-lg p-8 md:p-9 border border-bxc-border-light text-center flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <span className="text-xs uppercase tracking-widest text-bxc-accent font-bold mb-2">
                MODEL 01
              </span>
              <h3 className="text-xl font-bold mb-3 text-bxc-text">Feasibility & Engineering</h3>
              <p className="text-xs md:text-sm text-bxc-text/70 leading-relaxed mb-8 flex-grow">
                Zoning verification, architectural feasibility studies, and accurate line-item budget modeling prior to construction commitment.
              </p>
              <MagneticButton
                href="#contact"
                variant="outline"
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold"
              >
                Book Feasibility Study
              </MagneticButton>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-bxc-dark text-bxc-bg border-bxc-accent border-2 rounded-card-lg p-8 md:p-9 text-center flex flex-col h-full scale-[1.03] shadow-2xl shadow-bxc-accent/20 relative hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-block bg-bxc-accent text-bxc-bg text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full shadow-md">
                  RECOMMENDED
                </span>
              </div>
              <span className="text-xs uppercase tracking-widest text-bxc-accent font-bold mb-2 mt-2">
                MODEL 02
              </span>
              <h3 className="text-xl font-bold mb-3 text-bxc-bg">Full Design-Build</h3>
              <p className="text-xs md:text-sm text-bxc-bg/75 leading-relaxed mb-8 flex-grow">
                Single-source contract delivering comprehensive architecture, municipal approvals, engineering, and master construction through to turnkey handover.
              </p>
              <MagneticButton
                href="#contact"
                variant="primary"
                className="w-full py-3.5 text-xs uppercase tracking-wider font-bold shadow-lg"
              >
                Start Design-Build Project
              </MagneticButton>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-white rounded-card-lg p-8 md:p-9 border border-bxc-border-light text-center flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <span className="text-xs uppercase tracking-widest text-bxc-accent font-bold mb-2">
                MODEL 03
              </span>
              <h3 className="text-xl font-bold mb-3 text-bxc-text">Construction Management</h3>
              <p className="text-xs md:text-sm text-bxc-text/70 leading-relaxed mb-8 flex-grow">
                Bring your own architectural plans. We lead trade procurement, site supervision, budget governance, and milestone inspections.
              </p>
              <MagneticButton
                href="#contact"
                variant="outline"
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold"
              >
                Retain Construction Lead
              </MagneticButton>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
