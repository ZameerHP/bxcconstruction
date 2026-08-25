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
    image: '/images/user-real-2.jpg',
  },
  {
    id: 2,
    title: 'Commercial Facility Structural Framing',
    description: 'Large-scale commercial structural steel framing, mechanical ducting integration, and high-load partition engineering.',
    category: 'Commercial Build',
    location: 'GTA, ON',
    year: '2024',
    image: '/images/user-real-5.jpg',
  },
  {
    id: 3,
    title: 'Modern Exterior Cladding & Envelope',
    description: 'Architectural composite cladding, high-performance exterior envelope, and structural exterior renovations.',
    category: 'Exterior & Cladding',
    location: 'Vaughan, ON',
    year: '2024',
    image: '/images/user-real-7.jpg',
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
    <section id="projects" className="w-full bg-bxc-dark text-bxc-bg py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-bxc-accent" />
                <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  OUR PORTFOLIO
                </span>
              </div>
              <h2 className="text-section font-semibold text-bxc-bg tracking-tight">
                Selected Landmark Builds
              </h2>
            </div>
            <div className="flex flex-col md:items-end gap-3">
              <p className="text-bxc-bg/70 text-sm md:text-base max-w-md">
                A showcase of actual BXC Construction projects executed across residential and commercial sectors.
              </p>
              <Link
                href="/built-by-bxc"
                className="inline-flex items-center gap-2 text-bxc-accent hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200"
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
                    className="relative flex-[0_0_100%] min-w-0 aspect-[16/10] md:aspect-[21/9]"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />

                    {/* Gradient Overlay for high contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6 md:p-14 w-full max-w-3xl">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-bxc-accent/30 backdrop-blur-md text-bxc-bg border border-bxc-accent/50 rounded-full px-3.5 py-1 text-[10px] uppercase tracking-widest font-semibold">
                          {project.category}
                        </span>
                        <span className="text-xs text-bxc-bg/60 font-mono">
                          {project.location} · {project.year}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-4xl font-semibold text-bxc-bg mb-3 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-bxc-bg/85 text-xs md:text-sm mb-6 max-w-xl leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-6">
                        <Link
                          href="/built-by-bxc"
                          className="btn-bronze rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
                        >
                          <span>Explore Project Media</span>
                          <span>→</span>
                        </Link>
                        <a
                          href="#contact"
                          className="text-xs font-bold uppercase tracking-wider text-bxc-bg/80 hover:text-bxc-accent transition-colors"
                        >
                          Request Brief
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Nav Buttons with Scale-Pulse Feedback */}
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 z-20">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous project"
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-bxc-accent hover:border-bxc-accent active:scale-90 transition-all duration-200"
              >
                ←
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next project"
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-bxc-accent hover:border-bxc-accent active:scale-90 transition-all duration-200"
              >
                →
              </button>
            </div>
          </div>

          {/* Pagination Indicators & Gallery CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <div className="flex items-center gap-2.5">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === selectedIndex
                      ? 'w-8 bg-bxc-accent shadow-glow'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <Link
              href="/built-by-bxc"
              className="btn-outline-bronze rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider"
            >
              All Project Photos & Videos ({12}) →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
