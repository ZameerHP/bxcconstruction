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
    "id": "p1",
    "title": "Commercial Interior Framing",
    "category": "Commercial",
    "type": "image",
    "src": "/images/775335805_1749185182797917_1503259357166593370_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Interior metal stud framing and overhead mechanical systems within a commercial space during the construction phase."
  },
  {
    "id": "p2",
    "title": "Modern Residential Renovation",
    "category": "Renovations",
    "type": "image",
    "src": "/images/776495940_2154523122110609_356760332200612717_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Exterior view of a contemporary residential renovation featuring updated architectural elements, modern finishes, and ongoing construction work."
  },
  {
    "id": "p3",
    "title": "Residential Loft Renovation",
    "category": "Residential",
    "type": "image",
    "src": "/images/779277441_28280400428319935_8371569718575634018_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Finished upper-level residential space featuring new flooring, detailed wall finishes, and a custom interior layout with natural light."
  },
  {
    "id": "p4",
    "title": "Residential Interior Renovation",
    "category": "Residential",
    "type": "image",
    "src": "/images/779842222_1387430090205108_5799004801655720140_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Finished residential interior featuring wood-look flooring, clean wall finishes, interior doors, and an integrated kitchen and living space."
  },
  {
    "id": "p5",
    "title": "Residential Exterior Concrete Work",
    "category": "Residential",
    "type": "image",
    "src": "/images/780086540_1760565428525052_4152121409823587029_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Exterior concrete work completed alongside a residential property, creating a durable finished surface and defined outdoor access area."
  },
  {
    "id": "p6",
    "title": "Commercial Interior Framing",
    "category": "Commercial",
    "type": "image",
    "src": "/images/780443235_1739838417323113_2356242721593559861_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Large-scale commercial interior construction featuring metal stud partition framing, exposed mechanical systems, and active site work."
  },
  {
    "id": "p7",
    "title": "Metal Stud Partition Framing",
    "category": "Commercial",
    "type": "image",
    "src": "/images/782144319_925739119992036_1634993976219471516_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Interior light-gauge steel framing installation for commercial partition walls, featuring track layouts and stud alignment."
  },
  {
    "id": "p8",
    "title": "Open-Web Steel Joist & Ceiling Structure",
    "category": "Commercial",
    "type": "image",
    "src": "/images/782876125_907950201938571_8201646372247002772_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Overhead structural steel framing and exposed high-ceiling layout for a large commercial interior space."
  },
  {
    "id": "p9",
    "title": "Modern Exterior Cladding & Siding",
    "category": "Renovations",
    "type": "image",
    "src": "/images/783374092_964415036671558_7671081481764060370_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Exterior architectural facade renovation featuring vertical wood-composite siding panels and scaffolding setup."
  },
  {
    "id": "p10",
    "title": "Interior Drywall & Boarding Phase",
    "category": "Renovations",
    "type": "image",
    "src": "/images/784249740_977908725320344_6692216013069105814_n.jpg",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Interior space showing completed drywall installation on walls and ceilings ready for taping and finishing."
  },
  {
    "id": "p11",
    "title": "Luxury Modern Residence Facade",
    "category": "Residential",
    "type": "image",
    "src": "/images/hero-facade.jpg",
    "location": "Toronto, ON",
    "year": "2024",
    "description": "Completed exterior architecture of a contemporary luxury home featuring expansive glass balconies and a custom pool deck."
  },
  {
    "id": "v1",
    "title": "Custom Home Interior Walkthrough",
    "category": "Residential",
    "type": "video",
    "src": "/images/46b4adafa594455e8961fd5456075a81.MOV",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Video showcase highlighting custom interior finishes, open-concept living spaces, and architectural details of the completed home."
  },
  {
    "id": "v2",
    "title": "Exclusive Home Tour: Modern Living at Its Finest",
    "category": "Structural",
    "type": "video",
    "src": "/images/64e33862db75405d954110002517698e.MOV",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Step inside and explore this stunning modern home tour! From sleek layouts to gorgeous design finishes, watch how expert craftsmanship brings a dream living space together."
  },
  {
    "id": "v3",
    "title": "Total Floor Demolition: Out with the Old!",
    "category": "Commercial",
    "type": "video",
    "src": "/images/802ab48f11ba49afb610a88b3806018c.MOV",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Witness the raw start of a major transformation. This severely damaged and outdated floor is completely torn out to clear the path for a fresh, brand-new installation."
  },
  {
    "id": "v4",
    "title": "Ultimate Property Walkthrough: Inside Our Latest Project",
    "category": "Renovations",
    "type": "video",
    "src": "/images/8133a6f964624fd887b3e2d578b03920.MOV",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Take a comprehensive walkthrough of this beautifully finished property. Discover the flow, architectural details, and quality workmanship that make this home tour unforgettable."
  },
  {
    "id": "v7",
    "title": "Luxury Washroom Transformation: Complete Bathroom Upgrade",
    "category": "Residential",
    "type": "video",
    "src": "/images/ff6c8c1498fd490e9d98dd90abd8dbc0.MOV",
    "location": "GTA, ON",
    "year": "2024",
    "description": "Watch this outdated bathroom turn into a high-end, luxury retreat. From upgraded tiles to modern fixtures, see the step-by-step evolution of a stunning washroom renovation."
  }
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

  const nextLightbox = useCallback(() => {
    if (!filteredItems.length) return
    const nextIdx = (lightboxIndex + 1) % filteredItems.length
    setLightboxIndex(nextIdx)
    setSelectedItem(filteredItems[nextIdx])
  }, [filteredItems, lightboxIndex])

  const prevLightbox = useCallback(() => {
    if (!filteredItems.length) return
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    setLightboxIndex(prevIdx)
    setSelectedItem(filteredItems[prevIdx])
  }, [filteredItems, lightboxIndex])

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
