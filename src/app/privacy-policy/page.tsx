'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import AnimationProvider from '@/components/AnimationProvider'

export default function PrivacyPolicyPage() {
  return (
    <AnimationProvider>
      <SmoothScroll>
        <CustomCursor />
        <div className="relative w-full min-h-screen bg-bxc-bg text-bxc-text selection:bg-bxc-accent selection:text-bxc-bg">
          <Navbar />
          <main className="pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              {/* Breadcrumb & Header */}
              <div className="mb-12">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-bxc-accent uppercase tracking-widest hover:text-bxc-accent-hover transition-colors mb-6"
                >
                  <span>←</span> Return to Homepage
                </Link>
                <h1 className="text-3xl md:text-5xl font-semibold text-bxc-text tracking-tight mb-4">
                  Privacy Policy
                </h1>
                <p className="text-sm text-bxc-text/60">
                  Last Updated: August 26, 2026
                </p>
              </div>

              {/* Policy Body */}
              <div className="prose prose-stone max-w-none text-bxc-text/80 leading-relaxed space-y-8 text-sm md:text-base">
                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    1. Overview & Commitment
                  </h2>
                  <p>
                    BXC Construction Inc. (&ldquo;BXC&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to respecting and protecting the privacy of our clients, prospective partners, and visitors. This Privacy Policy describes our practices regarding the collection, use, and disclosure of personal data when you visit our website (bxcconstruction.ca) or communicate with us through our contact and consultation request channels.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    2. Information We Collect
                  </h2>
                  <p className="mb-3">
                    When you use our consultation forms or communicate with us directly, we may collect the following personal and project details:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-bxc-text/75">
                    <li><strong className="text-bxc-text">Contact Information:</strong> Full name, email address, and telephone number.</li>
                    <li><strong className="text-bxc-text">Project Information:</strong> Project location, address, property type (Residential, Commercial, Renovation, Structural), estimated timeline, and project briefs/descriptions.</li>
                    <li><strong className="text-bxc-text">Technical & Usage Data:</strong> Anonymized analytical data including browser type, device information, referring URLs, and approximate geographical region to optimize website responsiveness and load speeds.</li>
                  </ul>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    3. How We Use Your Information
                  </h2>
                  <p className="mb-3">
                    The information collected is used strictly for legitimate business and project delivery purposes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-bxc-text/75">
                    <li>To evaluate construction feasibility, architectural parameters, and site conditions.</li>
                    <li>To prepare detailed, itemized project estimates and scheduling timelines.</li>
                    <li>To respond directly to consultation inquiries via telephone, email, or direct messaging (such as WhatsApp).</li>
                    <li>To coordinate with site superintendents and structural project teams upon execution of formal service agreements.</li>
                  </ul>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    4. Information Sharing & Disclosure
                  </h2>
                  <p>
                    <strong className="text-bxc-text">We do not sell, rent, or trade your personal information to third parties under any circumstances.</strong> Information is only shared with verified technical partners (e.g., licensed structural engineers, building code inspectors, or subtrade leads) strictly on an as-needed basis to execute your verified project scope, or as required by Ontario municipal building authorities and applicable Canadian law.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    5. Data Retention & Security
                  </h2>
                  <p>
                    We retain client and inquiry data only for as long as necessary to fulfill the purposes for which it was collected, or to satisfy legal, accounting, and Ontario warranty reporting obligations. We maintain reasonable technical and organizational safeguards to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    6. Cookies & Tracking Technologies
                  </h2>
                  <p>
                    Our website may utilize essential and performance cookies to maintain user session preferences, optimize asset delivery, and monitor website traffic performance. You may modify your browser settings to refuse cookies, although some interactive features may experience reduced responsiveness.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    7. Contact & Privacy Requests
                  </h2>
                  <p className="mb-4">
                    If you have questions regarding this Privacy Policy, or wish to review, update, or request the deletion of your personal contact data, please contact our privacy compliance officer:
                  </p>
                  <div className="bg-bxc-card p-5 rounded-xl border border-bxc-border-light text-xs md:text-sm font-mono space-y-1">
                    <p className="font-bold text-bxc-text">BXC Construction Inc. — Privacy Office</p>
                    <p className="text-bxc-text/75">123 Construction Avenue, Suite 400, Toronto, ON M5V 2T6</p>
                    <p className="text-bxc-accent">Email: info@bxcconstruction.ca</p>
                    <p className="text-bxc-text/75">Phone: +1 (437) 450-5507 / +1 (437) 973-4229</p>
                  </div>
                </section>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </AnimationProvider>
  )
}
