'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

function ServiceIcon({ type }: { type: string }) {
  const paths: Record<string, string[]> = {
    house: ['m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z', 'M9 22V12h6v10'],
    building: ['M4 21V5l8-3 8 3v16', 'M8 9h1', 'M15 9h1', 'M8 13h1', 'M15 13h1', 'M8 17h1', 'M15 17h1'],
    tower: ['M5 21V3h14v18', 'M9 7h6', 'M9 11h6', 'M9 15h6', 'M3 21h18'],
    hammer: ['m14 4 6 6', 'm17 1 6 6-3 3-6-6Z', 'm2 22 10-10', 'M6 12 2 8l4-4 4 4'],
    wall: ['M4 4h16v16H4Z', 'M4 9h16', 'M4 15h16', 'M10 4v5', 'M14 9v6', 'M10 15v5'],
    tile: ['M4 4h7v7H4Z', 'M13 4h7v7h-7Z', 'M4 13h7v7H4Z', 'M13 13h7v7h-7Z'],
    foundation: ['M3 19h18', 'M5 19v-7h14v7', 'M3 12 12 5l9 7', 'M8 12v7', 'M16 12v7'],
    roof: ['M3 18h18', 'M5 18V9l7-5 7 5v9', 'M9 18v-5h6v5', 'M3 9h18'],
    clipboard: ['M9 4h6', 'M9 3v2h6V3', 'M6 4H4v17h16V4h-2', 'm8 13 2 2 5-5'],
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {(paths[type] || paths.house).map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  )
}

export default function Services() {
  const services = [
    {
      title: 'Custom Homes',
      description: 'Complete custom home construction from foundation to finishing.',
      image: '/images/779842222_1387430090205108_5799004801655720140_n.jpg',
      icon: 'house',
      tag: 'RESIDENTIAL',
    },
    {
      title: 'Residential Construction',
      description: 'New builds, additions, structural work and complete home projects.',
      image: '/images/780086540_1760565428525052_4152121409823587029_n.jpg',
      icon: 'building',
      tag: 'NEW BUILDS',
    },
    {
      title: 'Commercial Construction',
      description: 'Construction and renovation for offices, retail and commercial spaces.',
      image: '/images/780443235_1739838417323113_2356242721593559861_n.jpg',
      icon: 'tower',
      tag: 'COMMERCIAL',
    },
    {
      title: 'Home Renovations',
      description: 'Full renovations, basement finishing, kitchens and bathrooms.',
      image: '/images/782144319_925739119992036_1634993976219471516_n.jpg',
      icon: 'hammer',
      tag: 'RENOVATION',
    },
    {
      title: 'Framing & Drywall',
      description: 'Structural framing, interior walls, drywall, taping and finishing.',
      image: '/images/782876125_907950201938571_8201646372247002772_n.jpg',
      icon: 'wall',
      tag: 'STRUCTURAL',
    },
    {
      title: 'Flooring & Tile',
      description: 'Hardwood, laminate, vinyl, engineered flooring and tile installation.',
      image: '/images/783374092_964415036671558_7671081481764060370_n.jpg',
      icon: 'tile',
      tag: 'FINISHES',
    },
    {
      title: 'Concrete & Foundation',
      description: 'Excavation, foundation work, concrete slabs and structural concrete.',
      image: '/images/784249740_977908725320344_6692216013069105814_n.jpg',
      icon: 'foundation',
      tag: 'FOUNDATION',
    },
    {
      title: 'Roofing & Exterior',
      description: 'Roofing, cladding, siding, soffits, decks and fences.',
      image: '/images/775335805_1749185182797917_1503259357166593370_n.jpg',
      icon: 'roof',
      tag: 'EXTERIOR',
    },
    {
      title: 'General Contracting',
      description: 'Planning, estimates, scheduling, trade coordination and quality control.',
      image: '/images/776495940_2154523122110609_356760332200612717_n.jpg',
      icon: 'clipboard',
      tag: 'MANAGEMENT',
    },
  ]

  return (
    <section id="services" className="bg-bxc-bg py-24 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-bxc-accent" />
                <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  OUR SERVICES
                </p>
              </div>
              <h2 className="text-section font-semibold text-bxc-text tracking-tight">
                Complete Construction Solutions
              </h2>
            </div>
            <p className="text-sm md:text-base text-bxc-text/70 max-w-md">
              From full custom homes to specialized structural trades, we deliver dependable project management and exceptional workmanship.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.07}
        >
          {services.map((service, idx) => (
            <StaggerItem key={idx}>
              <Link
                href="#contact"
                prefetch={false}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  window.history.pushState(null, '', '#contact')
                }}
                className="bg-white rounded-card-lg overflow-hidden border border-bxc-border-light group hover:-translate-y-2 hover:shadow-2xl hover:border-bxc-accent/40 transition-all duration-500 flex flex-col h-full cursor-pointer"
                data-cursor="project"
              >
                {/* Image Container with Ken Burns Hover */}
                <div className="aspect-[16/10] relative overflow-hidden bg-bxc-dark/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-bxc-dark/80 backdrop-blur-md text-bxc-bg border border-white/10">
                      {service.tag}
                    </span>
                  </div>
                </div>

                <div className="p-7 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-bxc-card flex items-center justify-center text-bxc-accent group-hover:bg-bxc-accent group-hover:text-bxc-bg transition-colors duration-300">
                      <ServiceIcon type={service.icon} />
                    </div>
                    <span className="text-xs font-mono font-bold text-bxc-accent/60">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-card-title font-semibold text-bxc-text mb-3 group-hover:text-bxc-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-bxc-text/70 leading-relaxed font-normal mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-bxc-border-light/50 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-bxc-accent font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Request Consultation →
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
