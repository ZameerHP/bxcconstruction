'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ScrollReveal from '@/components/ScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Custom Modern Architectural Estate',
    description: 'Ground-up custom luxury residential build featuring bespoke slatted wood envelope, architectural glazing, and structural precision.',
    category: 'Custom Home Build',
    location: 'Toronto, ON',
    year: '2024',
    image: '/images/779277441_28280400428319935_8371569718575634018_n.jpg',
  },
  {
    id: 2,
    title: 'Commercial Facility Structural Framing',
    description: 'Large-scale commercial structural steel framing, mechanical ducting integration, and high-load partition engineering.',
    category: 'Commercial Build',
    location: 'GTA, ON',
    year: '2024',
    image: '/images/779842222_1387430090205108_5799004801655720140_n.jpg',
  },
  {
    id: 3,
    title: 'Modern Exterior Cladding & Envelope',
    description: 'Architectural composite cladding, high-performance exterior envelope, and structural exterior renovations.',
    category: 'Exterior & Cladding',
    location: 'Vaughan, ON',
    year: '2024',
    image: '/images/780086540_1760565428525052_4152121409823587029_n.jpg',
  },
]

export default function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="projects" className="w-full bg-bxc-dark text-bxc-bg py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5 md:gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
                <span className="w-6 h-[1.5px] bg-bxc-accent" />
                <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  OUR PORTFOLIO
                </span>
              </div>
              <h2 className="text-section font-semibold text-bxc-bg tracking-tight">
                Selected Landmark Builds
              </h2>
            </div>
            <div className="flex flex-col md:items-end gap-2.5 sm:gap-3">
              <p className="text-bxc-bg/75 text-sm md:text-base max-w-md">
                A showcase of actual BXC Construction projects executed across residential and commercial sectors.
              </p>
              <Link
                href="/built-by-bxc"
                className="inline-flex items-center gap-2 text-bxc-accent hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200 py-1"
              >
                <span>View Full Showcase Gallery</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="relative rounded-card-lg overflow-hidden border border-white/10 shadow-2xl group"
            data-cursor="project"
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="relative flex-[0_0_100%] min-w-0 min-h-[460px] xs:min-h-[420px] sm:min-h-[380px] md:min-h-0 md:aspect-[21/9]"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />

                    {/* Gradient Overlay for high contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 md:to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 md:via-transparent to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 xs:p-6 sm:p-8 md:p-12 lg:p-14 w-full max-w-3xl flex flex-col justify-end">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4">
                        <span className="bg-bxc-accent/30 backdrop-blur-md text-bxc-bg border border-bxc-accent/50 rounded-full px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] uppercase tracking-widest font-semibold">
                          {project.category}
                        </span>
                        <span className="text-xs text-bxc-bg/70 font-mono">
                          {project.location} · {project.year}
                        </span>
                      </div>

                      <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-bxc-bg mb-2 sm:mb-3 tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-bxc-bg/85 text-xs sm:text-sm mb-5 sm:mb-6 max-w-xl leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                        <Link
                          href="/built-by-bxc"
                          className="btn-bronze rounded-full px-5 sm:px-6 py-2.5 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
                        >
                          <span>Explore Project Media</span>
                          <span>→</span>
                        </Link>
                        <a
                          href="#contact"
                          className="text-xs font-bold uppercase tracking-wider text-bxc-bg/80 hover:text-bxc-accent transition-colors inline-flex items-center min-h-[44px] px-2"
                        >
                          Request Brief
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Nav Buttons with Scale-Pulse Feedback - accessible on mobile & desktop */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-20">
              <button
                suppressHydrationWarning
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous project"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-bxc-accent hover:border-bxc-accent active:scale-90 transition-all duration-200"
              >
                ←
              </button>
              <button
                suppressHydrationWarning
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next project"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-bxc-accent hover:border-bxc-accent active:scale-90 transition-all duration-200"
              >
                →
              </button>
            </div>
          </div>

          {/* Pagination Indicators & Gallery CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4 w-full">
            <div className="flex items-center gap-2.5 py-1">
              {projects.map((_, index) => (
                <button
                  suppressHydrationWarning
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer min-h-[24px] flex items-center ${
                    index === selectedIndex
                      ? 'w-8 bg-bxc-accent shadow-glow'
                      : 'w-2.5 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Link
              href="/built-by-bxc"
              className="btn-outline-bronze rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-center w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center"
            >
              All Project Photos & Videos ({12}) →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
