'use client'

import React, { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <section id="contact" className="bg-bxc-dark py-24 md:py-32 w-full text-bxc-bg relative overflow-hidden grain-overlay border-t border-bxc-border-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Description */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-bxc-accent" />
                <span className="text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent">
                  INITIATE YOUR BUILD
                </span>
              </div>
              <h2 className="text-section font-semibold text-bxc-bg mb-6 tracking-tight">
                Let’s Build Something Extraordinary
              </h2>
              <p className="text-base text-bxc-bg/75 mb-8 leading-relaxed">
                Connect with our senior partners to discuss project scope, architectural feasibility, and preliminary timeline estimates.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10 text-xs md:text-sm text-bxc-bg/70">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Guaranteed response within 1 business day</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-bxc-accent" />
                  <span>Direct consultation with a Principal Engineer</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-bxc-accent" />
                  <span>Comprehensive NDA & Privacy protection</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="bg-bxc-dark-secondary/80 backdrop-blur-xl rounded-card-lg p-8 md:p-10 shadow-2xl border border-white/10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-2xl">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-bxc-bg mb-2">Consultation Request Received</h3>
                    <p className="text-sm text-bxc-bg/70 max-w-md mx-auto">
                      Thank you for contacting BXC Construction. Our senior project executive will review your project brief and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-[11px] uppercase tracking-wider font-semibold text-bxc-bg/80 mb-2">
                          Full Name *
                        </label>
                        <input
                          suppressHydrationWarning
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-bxc-bg placeholder:text-bxc-bg/30 focus:outline-none focus:border-bxc-accent focus:bg-white/10 transition-all"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[11px] uppercase tracking-wider font-semibold text-bxc-bg/80 mb-2">
                          Email Address *
                        </label>
                        <input
                          suppressHydrationWarning
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-bxc-bg placeholder:text-bxc-bg/30 focus:outline-none focus:border-bxc-accent focus:bg-white/10 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-[11px] uppercase tracking-wider font-semibold text-bxc-bg/80 mb-2">
                          Phone Number
                        </label>
                        <input
                          suppressHydrationWarning
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-bxc-bg placeholder:text-bxc-bg/30 focus:outline-none focus:border-bxc-accent focus:bg-white/10 transition-all"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-[11px] uppercase tracking-wider font-semibold text-bxc-bg/80 mb-2">
                          Project Location
                        </label>
                        <input
                          suppressHydrationWarning
                          type="text"
                          id="location"
                          name="location"
                          className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-bxc-bg placeholder:text-bxc-bg/30 focus:outline-none focus:border-bxc-accent focus:bg-white/10 transition-all"
                          placeholder="City, Neighborhood, etc."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-[11px] uppercase tracking-wider font-semibold text-bxc-bg/80 mb-2">
                        Project Type *
                      </label>
                      <select
                        suppressHydrationWarning
                        id="projectType"
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full rounded-xl bg-[#1d201e] border border-white/15 px-4 py-3 text-sm text-bxc-bg focus:outline-none focus:border-bxc-accent transition-all"
                      >
                        <option value="" disabled>Select project type...</option>
                        <option value="Custom Residential">Custom Residential</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                        <option value="General Contracting">General Contracting</option>
                        <option value="Engineering & Feasibility">Engineering & Feasibility</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[11px] uppercase tracking-wider font-semibold text-bxc-bg/80 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        suppressHydrationWarning
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-bxc-bg placeholder:text-bxc-bg/30 focus:outline-none focus:border-bxc-accent focus:bg-white/10 transition-all resize-none"
                        placeholder="Tell us briefly about your project..."
                      />
                    </div>

                    <button
                      suppressHydrationWarning
                      type="submit"
                      disabled={loading}
                      className="btn-bronze rounded-full px-8 py-3.5 w-full text-xs uppercase tracking-widest font-bold shadow-lg shadow-bxc-accent/25 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <span>REQUEST A CONSULTATION →</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
