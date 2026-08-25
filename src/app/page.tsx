'use client'

import React, { useState, useEffect } from 'react'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyBXC from '@/components/WhyBXC'
import Capabilities from '@/components/Capabilities'
import Services from '@/components/Services'
import Process from '@/components/Process'
import FeaturedProjects from '@/components/FeaturedProjects'
import Industries from '@/components/Industries'
import ByTheNumbers from '@/components/ByTheNumbers'
import Team from '@/components/Team'
import QualitySafety from '@/components/QualitySafety'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Engagement from '@/components/Engagement'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ServiceAreas from '@/components/ServiceAreas'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import AnimationProvider from '@/components/AnimationProvider'
import MarqueeText from '@/components/MarqueeText'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Video Intro Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <AnimationProvider>
        <SmoothScroll>
          {mounted && <CustomCursor />}

          <div className="relative w-full min-h-screen bg-bxc-bg text-bxc-text selection:bg-bxc-accent selection:text-bxc-bg">
            <Navbar />
            <main>
              <Hero />

              {/* Architectural Ticker 1 */}
              <MarqueeText
                items={[
                  'PRECISION ENGINEERING',
                  'LUXURY RESIDENTIAL ESTATES',
                  'COMMERCIAL DEVELOPMENTS',
                  'FIXED-BUDGET GUARANTEE',
                  'ZERO-TOLERANCE CRAFTSMANSHIP',
                ]}
                className="border-none py-3 text-bxc-accent/80"
              />

              <About />
              <WhyBXC />
              <Capabilities />
              <Services />

              {/* Reverse Architectural Ticker */}
              <MarqueeText
                reverse
                items={[
                  'ONTARIO LICENSED GENERAL CONTRACTOR',
                  'OSHA-30 CERTIFIED SITE SAFETY',
                  '319+ PROJECTS DELIVERED',
                  'BONDED & FULLY INSURED',
                ]}
                className="py-3 text-bxc-bg/70 bg-[#151817]"
              />

              <Process />
              <FeaturedProjects />
              <Industries />
              <ByTheNumbers />
              <Team />
              <QualitySafety />
              <Testimonials />
              <FAQ />
              <Engagement />
              <FinalCTA />
              <ServiceAreas />
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </AnimationProvider>
    </>
  )
}
