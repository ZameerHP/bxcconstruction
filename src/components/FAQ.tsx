'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const faqs = [
  {
    question: 'How does BXC guarantee project timelines and budgets?',
    answer: 'Every contract is backed by fixed-schedule and fixed-cost terms. We include liquidated damages for unapproved delays on our end and absorb cost fluctuations through our locked supply agreements.'
  },
  {
    question: 'Do you manage permitting, zoning, and architectural engineering in-house?',
    answer: 'Yes. Our unified design-build approach consolidates licensed architectural engineering, MEP coordination, and municipal permitting under one roof with single-point accountability.'
  },
  {
    question: 'What size and scope of construction projects do you take on?',
    answer: 'We specialize in projects ranging from $500K high-end renovations to $50M+ ground-up luxury estates and commercial structural builds.'
  },
  {
    question: 'Can I bring my own architect, or do you require design-build?',
    answer: 'We operate both as full Design-Build partners and as Construction Managers alongside external architectural firms, bringing engineering value analysis to every build.'
  },
  {
    question: 'What warranties and post-handover support are provided?',
    answer: 'All projects include a comprehensive 2-year full craftsmanship warranty, 7-year structural warranty, and a digital digital maintenance manual with 24/7 emergency contractor access.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-bxc-bg py-24 md:py-32 w-full border-t border-bxc-border-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="block text-eyebrow uppercase tracking-eyebrow font-medium text-bxc-accent mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-section font-semibold text-bxc-text tracking-tight">
              Clarity Before You Break Ground
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div
                  className={`rounded-card-lg border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-bxc-dark text-bxc-bg border-bxc-dark shadow-xl'
                      : 'bg-white text-bxc-text border-bxc-border-light hover:border-bxc-accent/50'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base pr-4">{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-bxc-accent/20 flex items-center justify-center shrink-0">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-bxc-accent font-bold"
                      >
                        +
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <div className="px-6 pb-6 text-xs md:text-sm leading-relaxed text-bxc-bg/75 border-t border-white/10 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
