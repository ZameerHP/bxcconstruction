'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<'video' | 'reveal' | 'done'>('video')
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleFinish = () => {
    if (phase !== 'video') return
    setPhase('reveal')
    setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 850)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      handleFinish()
    }

    const fallbackTimer = setTimeout(() => {
      handleFinish()
    }, 12000)

    video.addEventListener('ended', handleEnded)

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setTimeout(() => {
          handleFinish()
        }, 2200)
      })
    }

    return () => {
      clearTimeout(fallbackTimer)
      video.removeEventListener('ended', handleEnded)
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-auto select-none overflow-hidden bg-transparent">
      <AnimatePresence>
        {phase === 'video' && (
          <motion.div
            key="video-stage"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#d6d6d6] px-4"
          >
            {/* Seamless video container - 100% merged with background, NO shadow, NO border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] flex items-center justify-center bg-[#d6d6d6]"
            >
              <video
                ref={videoRef}
                muted
                playsInline
                autoPlay
                preload="auto"
                className="w-full h-auto max-h-[65vh] object-contain bg-[#d6d6d6]"
              >
                <source src="/images/intro2.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Subtle Brand Tag & Skip Button */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative z-10 mt-6 flex items-center gap-6"
            >
              <span className="text-[10px] uppercase font-semibold tracking-[0.28em] text-bxc-text/50">
                BXC CONSTRUCTION
              </span>

              <button
                onClick={handleFinish}
                className="text-[11px] font-semibold uppercase tracking-wider text-bxc-accent hover:text-bxc-text transition-colors duration-200 cursor-pointer py-1 px-2"
              >
                Skip Intro →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Silky Smooth Split-Curtain Opening Reveal */}
      {phase === 'reveal' && (
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
          {/* Left curtain */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#d6d6d6]"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Right curtain */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-[#d6d6d6]"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Golden Center Accent Seam */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#B08D57]/80 to-transparent"
            initial={{ scaleY: 1, opacity: 0.9 }}
            animate={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      )}
    </div>
  )
}
