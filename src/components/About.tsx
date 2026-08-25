'use client'

import React from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="bg-bxc-bg py-24 md:py-32 w-full border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-bxc-accent" />
                <p className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  ABOUT US
                </p>
              </div>

              <h2 className="text-section font-semibold text-bxc-text mb-6 tracking-tight">
                About BXC Construction
              </h2>

              <div className="space-y-4 text-base md:text-lg text-bxc-text/80 leading-relaxed font-normal">
                <p>
                  BXC Construction is a full-service construction company delivering high-quality residential and commercial solutions built to last. From custom homes and new construction to renovations, concrete and foundations, framing and drywall, flooring and tile, roofing, and exterior work, we handle every stage of the building process with precision and professionalism.
                </p>
                <p>
                  From initial planning and project coordination to construction and final finishing, our team is committed to exceptional workmanship, quality materials, attention to detail, and dependable project management. We work closely with every client to ensure each project is completed safely, efficiently, and to the highest standards.
                </p>
              </div>

              {/* Bold Closing Tagline */}
              <div className="mt-8 pt-6 border-t border-bxc-border-light">
                <p className="text-base md:text-lg font-bold text-bxc-accent tracking-tight">
                  Built with quality. Managed with precision. Delivered with confidence.
                </p>
              </div>
            </div>

            {/* Right Column Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-[4/3] rounded-card-lg overflow-hidden border border-bxc-border-light shadow-xl">
                <Image
                  src="/images/user-real-2.jpg"
                  alt="About BXC Construction Real Build"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bxc-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-bxc-accent block mb-1">
                    BXC Standard
                  </span>
                  <p className="text-lg font-semibold text-bxc-bg">
                    Real Projects, Real Craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
