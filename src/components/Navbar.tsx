'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/Logo'
import MagneticButton from '@/components/MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30)

          if (pathname === '/') {
            const sections = ['services', 'projects', 'process', 'why-bxc', 'quality', 'contact']
            for (const sectionId of sections) {
              const el = document.getElementById(sectionId)
              if (el) {
                const rect = el.getBoundingClientRect()
                if (rect.top <= 250 && rect.bottom >= 250) {
                  setActiveSection(sectionId)
                  break
                }
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Built By BXC', id: 'built-by-bxc' },
    { name: 'Process', id: 'process' },
    { name: 'Standards', id: 'quality' },
    { name: 'Contact', id: 'contact' },
  ]

  const getHref = (id: string) => {
    if (id === 'built-by-bxc') return '/built-by-bxc'
    if (pathname === '/') return `#${id}`
    return `/#${id}`
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id !== 'built-by-bxc' && pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `#${id}`)
      }
    }
  }

  return (
    <>
      {/* Centered Top Fixed Ultra-Slim Navbar */}
      <header className="fixed top-3 left-0 right-0 z-50 flex justify-center items-center px-3 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 w-full max-w-4xl px-4 md:px-6 py-1.5 rounded-full ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-premium border border-bxc-border-light/80'
              : 'bg-white/85 backdrop-blur-md shadow-sm border border-white/60'
          }`}
        >
          {/* Small crisp logo */}
          <Link href="/" className="inline-flex items-center focus:outline-none shrink-0 pr-3">
            <Logo navbar />
          </Link>

          {/* Centered Slim Nav Links with Center-Out Underline */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 mx-auto">
            {navLinks.map((link) => {
              const href = getHref(link.id)
              const isCurrentPage = pathname === href || (link.id === 'built-by-bxc' && pathname === '/built-by-bxc')
              const isActive = isCurrentPage || (pathname === '/' && activeSection === link.id)

              return (
                <Link
                  key={link.name}
                  href={href}
                  prefetch={false}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`nav-link relative text-[11px] font-semibold uppercase tracking-wider py-0.5 transition-colors duration-200 ${
                    isActive ? 'text-bxc-accent font-bold' : 'text-bxc-text/75 hover:text-bxc-text'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-bxc-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Magnetic Action CTA */}
          <div className="hidden md:flex items-center pl-3 shrink-0">
            <MagneticButton
              href="#contact"
              variant="primary"
              className="px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-wider !rounded-full shadow-sm hover:shadow"
            >
              Get a Quote
            </MagneticButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            suppressHydrationWarning
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 relative focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-[1.5px] transition-transform duration-300 bg-bxc-text ${
                mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] transition-opacity duration-300 bg-bxc-text ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] transition-transform duration-300 bg-bxc-text ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Dark Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] bg-[#111413] text-white flex flex-col justify-between overflow-y-auto px-6 py-8"
          >
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-bxc-accent/[0.08] blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-bxc-accent/[0.05] blur-[100px] rounded-full pointer-events-none" />

            {/* Top Bar with Logo and Close Button */}
            <div className="relative z-10 flex items-center justify-between w-full max-w-lg mx-auto pb-6 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center focus:outline-none"
              >
                <Logo dark />
              </Link>

              <button
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all shadow-md focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Central Navigation Links */}
            <nav className="relative z-10 my-auto py-8 flex flex-col items-center gap-3 w-full max-w-md mx-auto">
              {navLinks.map((link, idx) => {
                const href = getHref(link.id)
                const isCurrentPage = pathname === href || (link.id === 'built-by-bxc' && pathname === '/built-by-bxc')
                const isActive = isCurrentPage || (pathname === '/' && activeSection === link.id)

                return (
                  <motion.div
                    key={link.name}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04 + 0.05, duration: 0.3 }}
                    className="w-full"
                  >
                    <Link
                      href={href}
                      prefetch={false}
                      onClick={(e) => {
                        setMobileMenuOpen(false)
                        handleNavClick(e, link.id)
                      }}
                      className={`flex items-center justify-between w-full px-5 py-3.5 rounded-2xl transition-all duration-200 ${
                        isActive
                          ? 'bg-white/10 text-bxc-accent font-bold border border-bxc-accent/40 shadow-sm'
                          : 'text-white/90 hover:text-white hover:bg-white/5 active:bg-white/10 font-medium'
                      }`}
                    >
                      <span className="text-xl sm:text-2xl tracking-tight text-white font-semibold">
                        {link.name}
                      </span>
                      <span className={`text-xs uppercase tracking-widest font-mono ${isActive ? 'text-bxc-accent font-bold' : 'text-white/40'}`}>
                        {isActive ? '● ACTIVE' : `0${idx + 1}`}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1, duration: 0.3 }}
                className="w-full pt-4 mt-2"
              >
                <Link
                  href={pathname === '/' ? '#contact' : '/#contact'}
                  prefetch={false}
                  className="w-full text-center block bg-bxc-accent text-bxc-dark font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-6 rounded-full shadow-[0_10px_25px_rgba(176,141,87,0.3)] active:scale-[0.98] transition-all hover:bg-white"
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    handleNavClick(e, 'contact')
                  }}
                >
                  Request a Consultation →
                </Link>
              </motion.div>
            </nav>

            {/* Bottom Quick Contact Information */}
            <div className="relative z-10 w-full max-w-lg mx-auto pt-6 border-t border-white/10 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-white/75">
                <a
                  href="tel:14379734229"
                  className="inline-flex items-center gap-1.5 hover:text-bxc-accent transition-colors font-medium"
                >
                  <span className="text-bxc-accent">📞</span> +1 (437) 973-4229
                </a>
                <span className="hidden sm:inline text-white/20">•</span>
                <a
                  href="mailto:info@bxcconstruction.ca"
                  className="inline-flex items-center gap-1.5 hover:text-bxc-accent transition-colors font-medium"
                >
                  <span className="text-bxc-accent">✉️</span> info@bxcconstruction.ca
                </a>
              </div>
              <p className="text-[11px] text-white/40 mt-2 font-mono">
                Toronto & GTA, Ontario
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
