'use client'

import React, { useState } from 'react'
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

interface ServiceImage {
  src: string
  label: string
}

interface ServiceItem {
  title: string
  description: string
  image: string
  images?: ServiceImage[]
  icon: string
  tag: string
}

function ServiceCard({ service, idx }: { service: ServiceItem; idx: number }) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0)
  const hasMultipleImages = Boolean(service.images && service.images.length > 1)
  const imageList: ServiceImage[] = service.images || [{ src: service.image, label: service.title }]

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1))
  }

  const scrollToContact = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    const target = document.getElementById('contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', '#contact')
    }
  }

  return (
    <div
      className="bg-white rounded-card-lg overflow-hidden border border-bxc-border-light group hover:-translate-y-2 hover:shadow-2xl hover:border-bxc-accent/40 transition-all duration-500 flex flex-col h-full relative"
    >
      {/* Image Container with Multi-image Slider */}
      <div className="aspect-[16/10] relative overflow-hidden bg-bxc-dark/10 select-none">
        {/* Pre-rendered Images with cross-fade */}
        {imageList.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
              i === currentImgIdx ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            <Image
              src={img.src}
              alt={`${service.title} - ${img.label}`}
              fill
              priority={idx < 3}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

        {/* Category Tag */}
        <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-bxc-dark/85 backdrop-blur-md text-bxc-bg border border-white/15 shadow-sm">
            {service.tag}
          </span>
        </div>

        {/* Phase Toggle Pills (Framing / Drywall) */}
        {hasMultipleImages && (
          <div
            className="absolute top-3.5 right-3.5 z-30 flex items-center bg-black/75 backdrop-blur-md rounded-full p-1 border border-white/20 shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            {imageList.map((img, i) => (
              <button
                key={img.label}
                type="button"
                aria-label={`Show ${img.label} photo`}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setCurrentImgIdx(i)
                }}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  i === currentImgIdx
                    ? 'bg-bxc-accent text-bxc-bg shadow-sm scale-102'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}

        {/* Side Arrows to switch between Framing and Drywall images */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              aria-label="Previous work phase"
              title="Previous phase"
              onClick={handlePrev}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/80 hover:bg-bxc-accent text-white flex items-center justify-center backdrop-blur-md border border-white/25 hover:border-bxc-accent transition-all duration-200 hover:scale-110 shadow-xl active:scale-95 cursor-pointer min-h-[44px] min-w-[44px]"
            >
              <svg className="w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next work phase"
              title="Next phase"
              onClick={handleNext}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/80 hover:bg-bxc-accent text-white flex items-center justify-center backdrop-blur-md border border-white/25 hover:border-bxc-accent transition-all duration-200 hover:scale-110 shadow-xl active:scale-95 cursor-pointer min-h-[44px] min-w-[44px]"
            >
              <svg className="w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Slide Indicator Dots */}
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/65 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {imageList.map((img, dotIdx) => (
                <button
                  key={img.src}
                  type="button"
                  aria-label={`View ${img.label}`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setCurrentImgIdx(dotIdx)
                  }}
                  className={`transition-all duration-300 rounded-full cursor-pointer p-1 ${
                    dotIdx === currentImgIdx
                      ? 'w-6 h-2 bg-bxc-accent'
                      : 'w-2 h-2 bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div
        onClick={scrollToContact}
        className="p-5 sm:p-7 md:p-8 flex flex-col flex-grow cursor-pointer"
      >
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
    </div>
  )
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: 'Custom Homes',
      description: 'Complete custom home construction from foundation to finishing.',
      image: '/images/779842222_1387430090205108_5799004801655720140_n.jpg',
      icon: 'house',
      tag: 'RESIDENTIAL',
    },
    {
      title: 'Residential Construction',
      description: 'New builds, additions, structural framing, and complete home construction projects.',
      image: '/images/776495940_2154523122110609_356760332200612717_n.jpg',
      icon: 'building',
      tag: 'NEW BUILDS',
    },
    {
      title: 'Roofing & Exterior',
      description: 'Roofing, architectural facade cladding, siding, soffits, and exterior envelope systems.',
      image: '/images/783374092_964415036671558_7671081481764060370_n.jpg',
      icon: 'roof',
      tag: 'EXTERIOR',
    },
    {
      title: 'Framing & Drywall',
      description: 'Structural framing, interior partition walls, drywall boarding, taping and finishing.',
      image: '/images/775335805_1749185182797917_1503259357166593370_n.jpg',
      images: [
        {
          src: '/images/775335805_1749185182797917_1503259357166593370_n.jpg',
          label: 'Framing',
        },
        {
          src: '/images/project-8.jpg',
          label: 'Drywall',
        },
      ],
      icon: 'wall',
      tag: 'STRUCTURAL',
    },
    {
      title: 'Concrete & Foundation',
      description: 'Excavation, foundation footings, poured concrete slabs and structural concrete groundwork.',
      image: '/images/780086540_1760565428525052_4152121409823587029_n.jpg',
      icon: 'foundation',
      tag: 'FOUNDATION',
    },
    {
      title: 'Flooring & Tile',
      description: 'Hardwood, porcelain tile, engineered planks, laminate, and precision tile installation.',
      image: '/images/flooring-tile-install.jpg',
      icon: 'tile',
      tag: 'FINISHES',
    },
  ]

  return (
    <section id="services" className="bg-bxc-bg py-16 sm:py-24 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          staggerDelay={0.07}
        >
          {services.map((service, idx) => (
            <StaggerItem key={idx}>
              <ServiceCard service={service} idx={idx} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

