'use client'

import React from 'react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

// NOTE: Real team names provided. Placeholder roles assigned below — adjust if updated titles are specified.
const team = [
  {
    name: 'Shams',
    role: 'Founder & Owner',
    initials: 'S',
  },
  {
    name: 'Alim',
    role: 'Project Manager',
    initials: 'A',
  },
  {
    name: 'Sikandar',
    role: 'Site Supervisor',
    initials: 'S',
  },
  {
    name: 'Ali',
    role: 'Lead Carpenter',
    initials: 'A',
  },
  {
    name: 'Mobin',
    role: 'Estimator',
    initials: 'M',
  },
  {
    name: 'Mustafa',
    role: 'General Contractor',
    initials: 'M',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-bxc-bg py-24 md:py-32 w-full border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-bxc-accent" />
                <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  OUR TEAM
                </p>
              </div>
              <h2 className="text-section font-semibold text-bxc-text tracking-tight">
                Leadership & Master Craftsmen
              </h2>
            </div>
            <p className="text-sm md:text-base text-bxc-text/70 max-w-md">
              Our dedicated professionals bring decades of on-site excellence and precision project governance to every build.
            </p>
          </div>
        </ScrollReveal>

        {/* 3x2 Grid on Desktop (3 columns, 2 rows), 2-col on Tablet, 1-col on Mobile */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.08}
        >
          {team.map((member, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-card-lg p-8 border border-bxc-border-light shadow-sm hover:shadow-xl hover:border-bxc-accent/50 transition-all duration-300 flex flex-col justify-between h-full group">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-bxc-dark text-bxc-accent font-bold text-xl flex items-center justify-center shadow-md group-hover:bg-bxc-accent group-hover:text-bxc-bg transition-colors duration-300">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bxc-text group-hover:text-bxc-accent transition-colors relative inline-block">
                      <span className="animated-underline">{member.name}</span>
                    </h3>
                    <p className="text-xs uppercase font-semibold text-bxc-accent tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-bxc-border-light/50 flex items-center justify-between text-xs text-bxc-text/60">
                  <span>BXC Construction Team</span>
                  <span className="text-bxc-accent font-semibold">Verified Builder</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
