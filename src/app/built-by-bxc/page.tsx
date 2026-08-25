'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import AnimationProvider from '@/components/AnimationProvider'

interface GalleryItem {
  id: string
  title: string
  category: 'Residential' | 'Commercial' | 'Renovations' | 'Structural'
  type: 'image' | 'video'
  src: string
  location: string
  year: string
  description: string
}

const allMediaItems: GalleryItem[] = [
  {
    id: 'v1',
    title: 'Site Structural Walkthrough & Inspection',
    category: 'Structural',
    type: 'video',
    src: '/images/46b4adafa594455e8961fd5456075a81.MOV',
    location: 'GTA, ON',
    year: '2024',
    description: 'On-site framing inspection verifying load-bearing studs, plumbing rough-ins, and structural integrity.',
  },
  {
    id: 'p1',
    title: 'Custom Modern Architectural Estate',
    category: 'Residential',
    type: 'image',
    src: '/images/project-hillcrest.jpg',
    location: 'Toronto, ON',
    year: '2024',
    description: 'Ground-up custom luxury residential build featuring bespoke slatted wood envelope, architectural glazing, and structural precision.',
  },
  {
    id: 'v2',
    title: 'High-End Interior Architectural Craftsmanship',
    category: 'Residential',
    type: 'video',
    src: '/images/64e33862db75405d954110002517698e.MOV',
    location: 'Oakville, ON',
    year: '2024',
    description: 'Detailed millwork, bespoke architectural staircase, and seamless open-concept spatial engineering.',
  },
  {
    id: 'p2',
    title: 'Commercial Facility Structural Framing',
    category: 'Commercial',
    type: 'image',
    src: '/images/capability-engineering.jpg',
    location: 'Vaughan, ON',
    year: '2024',
    description: 'Large-scale commercial structural steel framing, mechanical ducting integration, and high-load partition engineering.',
  },
  {
    id: 'v3',
    title: 'Commercial Steel Grid & HVAC Coordination',
    category: 'Commercial',
    type: 'video',
    src: '/images/802ab48f11ba49afb610a88b3806018c.MOV',
    location: 'Mississauga, ON',
    year: '2024',
    description: 'Precision mechanical routing through structural steel web openings for maximized ceiling height.',
  },
  {
    id: 'p3',
    title: 'Modern Exterior Cladding & Envelope',
    category: 'Renovations',
    type: 'image',
    src: '/images/service-renovation.jpg',
    location: 'Toronto, ON',
    year: '2024',
    description: 'Architectural composite cladding, high-performance exterior envelope, and structural exterior renovations.',
  },
  {
    id: 'v4',
    title: 'Architectural Framing Progress Walkthrough',
    category: 'Residential',
    type: 'video',
    src: '/images/8133a6f964624fd887b3e2d578b03920.MOV',
    location: 'Forest Hill, ON',
    year: '2024',
    description: 'Full interior framing walkthrough illustrating plumb tolerances, straight studs, and zero-defect craftsmanship.',
  },
  {
    id: 'p4',
    title: 'Ground-Up Concrete & Foundation Engineering',
    category: 'Structural',
    type: 'image',
    src: '/images/project-alden.jpg',
    location: 'Yorkville, ON',
    year: '2024',
    description: 'Deep foundation pours, waterproof subterranean membranes, and engineered grade beams.',
  },
  {
    id: 'v5',
    title: 'Precision Exterior Envelope Assembly',
    category: 'Structural',
    type: 'video',
    src: '/images/b185447f5f274e15afb3cabd6631fed1_2.MOV',
    location: 'Toronto, ON',
    year: '2024',
    description: 'Thermal-break insulation layers and rainscreen assembly for extreme weather durability.',
  },
  {
    id: 'p5',
    title: 'Luxury Interior Renovation & Structural Openings',
    category: 'Renovations',
    type: 'image',
    src: '/images/project-meridian.jpg',
    location: 'Bridle Path, ON',
    year: '2024',
    description: 'Structural retrofit replacing load-bearing masonry with concealed steel flitch plates for expansive glass walls.',
  },
  {
    id: 'v6',
    title: 'Luxury Residential Structural Steel & Glass',
    category: 'Residential',
    type: 'video',
    src: '/images/f157eafa718b47099adf329508b0581d_2.MOV',
    location: 'North York, ON',
    year: '2024',
    description: 'High-tolerance steel beam assembly creating dramatic floor-to-ceiling glass openings.',
  },
  {
    id: 'p6',
    title: 'Modern Commercial Office & Tenant Fitout',
    category: 'Commercial',
    type: 'image',
    src: '/images/capability-architecture.jpg',
    location: 'Downtown Toronto, ON',
    year: '2024',
    description: 'Class-A commercial buildout featuring acoustic dampening baffles, architectural glass partitions, and executive suites.',
  },
  {
    id: 'v7',
    title: 'Structural Detail & Quality Control Inspection',
    category: 'Structural',
    type: 'video',
    src: '/images/ff6c8c1498fd490e9d98dd90abd8dbc0.MOV',
    location: 'Richmond Hill, ON',
    year: '2024',
    description: 'Close-up quality check of joinery, fasteners, and structural anchors prior to drywall installation.',
  },
  {
    id: 'p7',
    title: 'Structural Steel Framing & Skylight Engineering',
    category: 'Structural',
    type: 'image',
    src: '/images/service-residential.jpg',
    location: 'Richmond Hill, ON',
    year: '2024',
    description: 'Monumental steel atrium framework supporting insulated triple-pane architectural skylights.',
  },
  {
    id: 'p8',
    title: 'Commercial Partition Walls & Ceiling Grid',
    category: 'Commercial',
    type: 'image',
    src: '/images/779277441_28280400428319935_8371569718575634018_n.jpg',
    location: 'Markham, ON',
    year: '2024',
    description: 'Heavy-gauge steel stud partition walls and integrated fire-rated assemblies.',
  },
  {
    id: 'p9',
    title: 'Bespoke Millwork & Interior Finishing',
    category: 'Residential',
    type: 'image',
    src: '/images/779277441_28280400428319935_8371569718575634018_n.jpg',
    location: 'Toronto, ON',
    year: '2024',
    description: 'Custom architectural carpentry and interior finishing executed to showcase standards.',
  },
  {
    id: 'p10',
    title: 'Engineered Subfloor & Joist Installation',
    category: 'Structural',
    type: 'image',
    src: '/images/782876125_907950201938571_8201646372247002772_n.jpg',
    location: 'GTA, ON',
    year: '2024',
    description: 'Engineered silent-floor I-joists and laser-leveled subfloor installation for maximum stiffness.',
  },
  {
    id: 'p11',
    title: 'Landmark Modern Residence Facade',
    category: 'Residential',
    type: 'image',
    src: '/images/hero-facade.jpg',
    location: 'Toronto, ON',
    year: '2024',
    description: 'Architectural masterpiece featuring custom glass curtain walls, cantilevered overhangs, and limestone accents.',
  },
  {
    id: 'p12',
    title: 'Master Craftsmanship & Precision Woodwork',
    category: 'Residential',
    type: 'image',
    src: '/images/quality-craftsmanship.jpg',
    location: 'Oakville, ON',
    year: '2024',
    description: 'Fine architectural cabinetry and custom woodworking crafted with zero-tolerance tolerances.',
  },
  {
    id: 'p13',
    title: 'Architectural Design & BIM Engineering',
    category: 'Structural',
    type: 'image',
    src: '/images/capability-architecture.jpg',
    location: 'Toronto, ON',
    year: '2024',
    description: '3D BIM architectural modeling, structural calculation packages, and municipal permit drawings.',
  },
  {
    id: 'p14',
    title: 'Heavy Civil Site Engineering & Framing',
    category: 'Commercial',
    type: 'image',
    src: '/images/capability-engineering.jpg',
    location: 'Vaughan, ON',
    year: '2024',
    description: 'Site civil engineering, heavy structural shoring, and multi-story commercial framing.',
  },
  {
    id: 'p15',
    title: 'Luxury Custom Residential Build',
    category: 'Residential',
    type: 'image',
    src: '/images/service-residential.jpg',
    location: 'Toronto, ON',
    year: '2024',
    description: 'Ground-up luxury residential construction built to passive-energy standards.',
  },
  {
    id: 'p16',
    title: 'Commercial Plaza & Retail Development',
    category: 'Commercial',
    type: 'image',
    src: '/images/project-meridian.jpg',
    location: 'Mississauga, ON',
    year: '2024',
    description: 'Multi-tenant commercial retail complex completed on an aggressive schedule with zero defect handover.',
  },
  {
    id: 'p17',
    title: 'Historic Estate Structural Renovation',
    category: 'Renovations',
    type: 'image',
    src: '/images/service-renovation.jpg',
    location: 'Rosedale, ON',
    year: '2024',
    description: 'Complete interior structural renewal preserving historic masonry facade while modernizing mechanicals.',
  },
  {
    id: 'p18',
    title: 'Pre-Construction Feasibility & Budget Modeling',
    category: 'Commercial',
    type: 'image',
    src: '/images/service-consulting.jpg',
    location: 'Toronto, ON',
    year: '2024',
    description: 'Zoning optimization, value-engineering analysis, and comprehensive procurement scheduling.',
  },
  {
    id: 'p19',
    title: 'The Hillcrest Estate Build',
    category: 'Residential',
    type: 'image',
    src: '/images/project-hillcrest.jpg',
    location: 'Bridle Path, ON',
    year: '2024',
    description: '14,000 sq ft luxury residence featuring subterranean parking, cantilevered infinity pool, and structural concrete framing.',
  },
  {
    id: 'p20',
    title: 'Meridian Corporate Campus',
    category: 'Commercial',
    type: 'image',
    src: '/images/project-meridian.jpg',
    location: 'GTA, ON',
    year: '2024',
    description: 'High-performance commercial office development with LEED Gold energy rating and structural curtain walls.',
  },
  {
    id: 'p21',
    title: 'The Alden Luxury Residences',
    category: 'Renovations',
    type: 'image',
    src: '/images/project-alden.jpg',
    location: 'Yorkville, ON',
    year: '2024',
    description: 'High-rise luxury residential retrofit with engineered acoustic isolation and bespoke architectural interiors.',
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Renovations', 'Structural'] as const
type Category = (typeof categories)[number]

export default function BuiltByBXCPage() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredItems = allMediaItems.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  )

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id)
    setLightboxIndex(idx >= 0 ? idx : 0)
    setSelectedItem(item)
  }

  const nextLightbox = () => {
    if (!filteredItems.length) return
    const nextIdx = (lightboxIndex + 1) % filteredItems.length
    setLightboxIndex(nextIdx)
    setSelectedItem(filteredItems[nextIdx])
  }

  const prevLightbox = () => {
    if (!filteredItems.length) return
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    setLightboxIndex(prevIdx)
    setSelectedItem(filteredItems[prevIdx])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return
      if (e.key === 'Escape') setSelectedItem(null)
      if (e.key === 'ArrowRight') nextLightbox()
      if (e.key === 'ArrowLeft') prevLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem, nextLightbox, prevLightbox])

  const titleWords = ['Built', 'By', 'BXC.']

  return (
    <AnimationProvider>
      <SmoothScroll>
        {mounted && <CustomCursor />}

        <div className="relative w-full min-h-screen bg-[#111413] text-bxc-bg selection:bg-bxc-accent selection:text-bxc-bg">
          <Navbar />

          <main>
            {/* Gallery Hero Banner */}
            <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
              <div className="relative z-10 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-bxc-accent animate-pulse" />
                  <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-bxc-accent">
                    FULL PROJECT SHOWCASE
                  </p>
                </motion.div>

                <h1 className="text-hero font-semibold text-bxc-bg mb-6 tracking-tight flex flex-wrap gap-x-3 md:gap-x-5 gap-y-1">
                  {titleWords.map((word, idx) => (
                    <span key={idx} className="overflow-hidden inline-block pb-2">
                      <motion.span
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base md:text-lg text-bxc-bg/80 max-w-2xl font-light leading-relaxed mb-10"
                >
                  A complete visual record of every estate, commercial build, and structural project we&apos;ve delivered.
                </motion.p>

                {/* Filter Pills with Counts */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-2.5 md:gap-3.5 pt-2"
                >
                  {categories.map((category) => {
                    const count =
                      category === 'All'
                        ? allMediaItems.length
                        : allMediaItems.filter((i) => i.category === category).length
                    const isActive = activeCategory === category

                    return (
                      <button
                        suppressHydrationWarning
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                          isActive
                            ? 'bg-bxc-accent text-bxc-bg shadow-[0_0_20px_rgba(176,141,87,0.4)] border border-bxc-accent scale-105'
                            : 'bg-white/5 text-bxc-bg/75 border border-white/15 hover:border-bxc-accent/60 hover:text-bxc-bg'
                        }`}
                      >
                        {category} ({count})
                      </button>
                    )
                  })}
                </motion.div>
              </div>
            </section>

            {/* Perfect Responsive Grid - NO Useless Space */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filteredItems.map((item) => (
                  <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item)} />
                ))}
              </div>
            </section>

            {/* Contact CTA Section */}
            <FinalCTA />
          </main>

          <Footer />
        </div>

        {/* Fullscreen Interactive Lightbox Viewer */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 md:p-8 select-none"
              onClick={() => setSelectedItem(null)}
            >
              {/* Header */}
              <div
                className="w-full max-w-6xl flex items-center justify-between z-20 text-white pt-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono tracking-widest text-bxc-accent font-bold">
                    {String(lightboxIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                  </span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-white/90 border border-white/15">
                    {selectedItem.category}
                  </span>
                </div>

                <button
                  suppressHydrationWarning
                  onClick={() => setSelectedItem(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-sm transition-colors duration-200"
                  aria-label="Close Lightbox"
                >
                  ✕
                </button>
              </div>

              {/* Main Media with Controls */}
              <div
                className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  suppressHydrationWarning
                  onClick={prevLightbox}
                  className="absolute left-2 md:left-4 z-30 w-12 h-12 rounded-full bg-black/70 hover:bg-bxc-accent text-white border border-white/20 flex items-center justify-center text-lg transition-all duration-200 active:scale-90 shadow-xl"
                  aria-label="Previous item"
                >
                  ←
                </button>

                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-[60vh] md:h-[72vh] flex items-center justify-center"
                >
                  {selectedItem.type === 'video' ? (
                    <video
                      src={selectedItem.src}
                      autoPlay
                      controls
                      playsInline
                      className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
                    />
                  ) : (
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      fill
                      className="object-contain rounded-xl"
                      sizes="(max-width: 1400px) 100vw, 1400px"
                      priority
                    />
                  )}
                </motion.div>

                <button
                  suppressHydrationWarning
                  onClick={nextLightbox}
                  className="absolute right-2 md:right-4 z-30 w-12 h-12 rounded-full bg-black/70 hover:bg-bxc-accent text-white border border-white/20 flex items-center justify-center text-lg transition-all duration-200 active:scale-90 shadow-xl"
                  aria-label="Next item"
                >
                  →
                </button>
              </div>

              {/* Bottom Details */}
              <div
                className="w-full max-w-3xl text-center z-20 pb-2"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-xs md:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
                  {selectedItem.description}
                </p>
                <p className="text-[11px] font-mono text-bxc-accent font-semibold mt-2">
                  {selectedItem.location} · {selectedItem.year}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SmoothScroll>
    </AnimationProvider>
  )
}

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="project"
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 card-premium cursor-pointer aspect-[4/3] w-full"
    >
      {item.type === 'video' ? (
        <video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}

      {/* Video Indicator Badge */}
      {item.type === 'video' && (
        <div className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-[11px] group-hover:bg-bxc-accent group-hover:border-bxc-accent transition-colors duration-300">
          ▶
        </div>
      )}

      {/* Category Tag */}
      <div className="absolute top-3.5 left-3.5 z-20">
        <span className="bg-black/60 backdrop-blur-md border border-white/15 text-bxc-bg text-[9.5px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Information Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transform transition-transform duration-300 group-hover:-translate-y-1">
        <p className="text-[10.5px] font-mono text-bxc-accent mb-1 tracking-wider font-semibold">
          {item.location} · {item.year}
        </p>
        <h3 className="text-sm md:text-base font-bold text-white tracking-tight mb-1.5 group-hover:text-bxc-accent transition-colors line-clamp-1">
          {item.title}
        </h3>
        <p className="text-[11.5px] text-white/75 line-clamp-2 font-normal leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}
