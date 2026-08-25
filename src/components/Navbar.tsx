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
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Built By BXC', href: '/built-by-bxc', id: 'built-by-bxc' },
    { name: 'Process', href: '/#process', id: 'process' },
    { name: 'Standards', href: '/#quality', id: 'quality' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ]

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
              const isCurrentPage = pathname === link.href || (link.id === 'built-by-bxc' && pathname === '/built-by-bxc')
              const isActive = isCurrentPage || (pathname === '/' && activeSection === link.id)

              return (
                <Link
                  key={link.name}
                  href={link.href}
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
              href="/#contact"
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
              className={`block w-4 h-[1.5px] transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[6px] bg-bxc-bg' : 'bg-bxc-text'
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0 bg-bxc-bg' : 'opacity-100 bg-bxc-text'
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] transition-transform duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[6px] bg-bxc-bg' : 'bg-bxc-text'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Dark Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 40px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bxc-dark/98 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="mb-8">
              <Logo dark />
            </div>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-light tracking-tight text-bxc-bg/90 hover:text-bxc-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 + 0.15, duration: 0.35 }}
                className="mt-6"
              >
                <Link
                  href="/#contact"
                  className="btn-bronze rounded-full px-7 py-3 text-xs uppercase tracking-wider font-semibold inline-block shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request a Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
