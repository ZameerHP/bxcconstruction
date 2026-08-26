'use client'

import React, { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [whatsappLink, setWhatsappLink] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Format WhatsApp message with all filled details
    const whatsappMessage = `*New Consultation Request — BXC Construction*

👤 *Full Name:* ${formData.name.trim()}
📧 *Email Address:* ${formData.email.trim()}
📞 *Phone Number:* ${formData.phone.trim() || 'Not provided'}
📍 *Project Location:* ${formData.location.trim() || 'Not provided'}
🏗️ *Project Type:* ${formData.projectType || 'General Inquiry'}

📝 *Project Details:*
${formData.message.trim()}

---
_Sent via BXC Construction Website Consultation Form_`

    const targetPhone = '14379734229' // 437 973 4229 (Ontario, Canada)
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const url = `https://wa.me/${targetPhone}?text=${encodedMessage}`

    setWhatsappLink(url)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      // Open WhatsApp automatically in a new window/tab
      try {
        window.open(url, '_blank', 'noopener,noreferrer')
      } catch (err) {
        console.error('Popup blocked or error opening WhatsApp:', err)
      }
    }, 600)
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
                Connect directly with our team to discuss project scope, architectural feasibility, and preliminary timeline estimates.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10 text-xs md:text-sm text-bxc-bg/70">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Instant submission via WhatsApp (+1 437 973-4229)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-bxc-accent" />
                  <span>Direct consultation with a Senior Project Lead</span>
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
                  <div className="py-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-2xl">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-bxc-bg mb-2">Consultation Request Dispatched</h3>
                    <p className="text-sm text-bxc-bg/70 max-w-md mx-auto mb-6">
                      Your details have been forwarded to our WhatsApp line at <span className="text-bxc-accent font-semibold">+1 (437) 973-4229</span>. If WhatsApp didn’t open automatically, click the button below to continue.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      {whatsappLink && (
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-bronze rounded-full px-6 py-3 text-xs uppercase tracking-widest font-bold shadow-lg inline-flex items-center gap-2"
                        >
                          <span>Open in WhatsApp (437 973 4229) →</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            location: '',
                            projectType: '',
                            message: '',
                          })
                        }}
                        className="text-xs uppercase tracking-wider text-bxc-bg/60 hover:text-white transition-colors underline py-2"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
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
                          value={formData.name}
                          onChange={handleChange}
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
                          value={formData.email}
                          onChange={handleChange}
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
                          value={formData.phone}
                          onChange={handleChange}
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
                          value={formData.location}
                          onChange={handleChange}
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
                        value={formData.projectType}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
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

