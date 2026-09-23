'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ScrollReveal from '@/components/ScrollReveal'
import Logo from '@/components/Logo'

export default function Footer() {
  const pathname = usePathname()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `#${id}`)
      }
    }
  }

  const getHref = (id: string) => {
    if (pathname === '/') return `#${id}`
    return `/#${id}`
  }

  return (
    <footer className="bg-bxc-dark py-12 sm:py-16 md:py-24 w-full text-bxc-bg border-t border-bxc-border-dark relative overflow-hidden grain-overlay">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">
            {/* Column 1 - Brand & Identity */}
            <div className="lg:col-span-5">
              <div className="mb-4">
                <Logo dark />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-bxc-accent font-semibold mb-3">
                Building Excellence, By Design.
              </p>
              <p className="text-xs md:text-sm text-bxc-bg/60 max-w-sm leading-relaxed mb-6">
                Premium design-build construction firm delivering uncompromising craftsmanship for luxury residential estates and commercial developments.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/5 border border-white/10 text-bxc-bg/70">
                  LICENSE #GC-884920
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/5 border border-white/10 text-emerald-400">
                  BONDED & INSURED
                </span>
              </div>
            </div>

            {/* Column 2 - Navigation */}
            <div className="lg:col-span-2">
              <h3 className="text-xs uppercase tracking-widest font-bold text-bxc-accent mb-4">
                EXPLORE
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-bxc-bg/70">
                <li>
                  <Link
                    href={getHref('services')}
                    prefetch={false}
                    onClick={(e) => handleAnchorClick(e, 'services')}
                    className="hover:text-bxc-accent transition-colors py-1 inline-block"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={getHref('projects')}
                    prefetch={false}
                    onClick={(e) => handleAnchorClick(e, 'projects')}
                    className="hover:text-bxc-accent transition-colors py-1 inline-block"
                  >
                    Selected Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href={getHref('process')}
                    prefetch={false}
                    onClick={(e) => handleAnchorClick(e, 'process')}
                    className="hover:text-bxc-accent transition-colors py-1 inline-block"
                  >
                    Five-Phase Process
                  </Link>
                </li>
                <li>
                  <Link
                    href={getHref('quality')}
                    prefetch={false}
                    onClick={(e) => handleAnchorClick(e, 'quality')}
                    className="hover:text-bxc-accent transition-colors py-1 inline-block"
                  >
                    Standards & Quality
                  </Link>
                </li>
                <li>
                  <Link
                    href={getHref('faq')}
                    prefetch={false}
                    onClick={(e) => handleAnchorClick(e, 'faq')}
                    className="hover:text-bxc-accent transition-colors py-1 inline-block"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Disciplines */}
            <div className="lg:col-span-2">
              <h3 className="text-xs uppercase tracking-widest font-bold text-bxc-accent mb-4">
                DISCIPLINES
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-bxc-bg/70">
                <li className="py-1">Custom Homes</li>
                <li className="py-1">Commercial Builds</li>
                <li className="py-1">Structural Drywall</li>
                <li className="py-1">Poured Concrete</li>
                <li className="py-1">Engineering Feasibility</li>
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-xs uppercase tracking-widest font-bold text-bxc-accent mb-4">
                HEADQUARTERS
              </h3>
              <div className="text-xs md:text-sm text-bxc-bg/70 space-y-2 leading-relaxed">
                <p>106 - 12 Crescent Town Rd</p>
                <p>East York, ON M4C 5L3</p>
                <p className="pt-2 font-mono text-bxc-accent">+1 (437) 450-5507</p>
                <p className="font-mono text-bxc-accent">+1 (437) 973-4229</p>
                <p className="pt-1">
                  <a href="mailto:info@bxcconstruction.ca" className="hover:text-white transition-colors underline py-1 inline-block">
                    info@bxcconstruction.ca
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bxc-bg/40 text-center md:text-left">
            <div>
              © {new Date().getFullYear()} BXC Construction Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="hover:text-bxc-accent transition-colors py-1">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-bxc-accent transition-colors py-1">Terms of Service</Link>
              <Link href="/safety-protocols" className="hover:text-bxc-accent transition-colors py-1">Safety Protocols</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
