'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import AnimationProvider from '@/components/AnimationProvider'

export default function TermsOfServicePage() {
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
                  Terms of Service
                </h1>
                <p className="text-sm text-bxc-text/60">
                  Last Updated: August 26, 2026
                </p>
              </div>

              {/* Terms Body */}
              <div className="prose prose-stone max-w-none text-bxc-text/80 leading-relaxed space-y-8 text-sm md:text-base">
                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing and using this website (bxcconstruction.ca), you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations of the Province of Ontario and the federal laws of Canada. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    2. Non-Binding Nature of Online Estimates & Consultation Inquiries
                  </h2>
                  <p>
                    All project briefs, budget ranges, consultation requests, and timeline estimates submitted or generated through this website are preliminary and for informational purposes only. No binding general contractor agreement, warranty, or contractual obligation is created until a comprehensive, written, and mutually signed construction contract (e.g., CCDC or bespoke BXC fixed-price contract) has been formally executed by authorized representatives of both parties.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    3. Intellectual Property Rights & Project Photography
                  </h2>
                  <p>
                    All content on this website, including but not limited to architectural drawings, project photography, video walkthroughs, text, branding, graphics, and custom user interface designs, is the exclusive intellectual property of BXC Construction Inc. and is protected by Canadian copyright and trademark laws. You may not reproduce, distribute, modify, or republish any site assets without prior written authorization from BXC Construction Inc.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    4. Acceptable Website Use
                  </h2>
                  <p className="mb-3">
                    You agree to use this website only for lawful purposes related to legitimate construction inquiries and design-build evaluations. You agree not to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-bxc-text/75">
                    <li>Submit falsified, deceptive, or spam consultation requests.</li>
                    <li>Attempt to disrupt, compromise, or reverse-engineer the website infrastructure or security firewalls.</li>
                    <li>Scrape, harvest, or systematically download project assets or contact directories without written consent.</li>
                  </ul>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    In no event shall BXC Construction Inc., its directors, officers, employees, or site superintendents be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, use of, or inability to use this website or any materials provided herein. Website information is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    6. Governing Law & Jurisdiction
                  </h2>
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without giving effect to any principles of conflicts of law. Any legal proceeding arising out of or relating to these terms shall be instituted exclusively in the courts of Toronto, Ontario, Canada.
                  </p>
                </section>

                <section className="p-6 md:p-8 rounded-2xl bg-white/70 border border-bxc-border-light shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold text-bxc-text mb-3">
                    7. Inquiries Regarding Terms
                  </h2>
                  <p className="mb-4">
                    For questions or official legal notices regarding these Terms of Service, please contact:
                  </p>
                  <div className="bg-bxc-card p-5 rounded-xl border border-bxc-border-light text-xs md:text-sm font-mono space-y-1">
                    <p className="font-bold text-bxc-text">BXC Construction Inc. — Legal Inquiries</p>
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
