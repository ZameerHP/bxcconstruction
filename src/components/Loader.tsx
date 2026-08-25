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
    }, 1100)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      handleFinish()
    }

    // Safety fallback
    const fallbackTimer = setTimeout(() => {
      handleFinish()
    }, 14000)

    video.addEventListener('ended', handleEnded)

    // Attempt video playback
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay blocked, graceful timeout
        setTimeout(() => {
          handleFinish()
        }, 2500)
      })
    }

    return () => {
      clearTimeout(fallbackTimer)
      video.removeEventListener('ended', handleEnded)
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-auto select-none">
      <AnimatePresence mode="wait">
        {phase === 'video' && (
          <motion.div
            key="video-wrapper"
            exit={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white overflow-hidden px-4"
          >
            {/* Ambient luxury glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-[#B08D57]/10 blur-[100px] pointer-events-none" />

            {/* Video container with perfect 300-380px compact size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-bxc-border-light/60 bg-white"
            >
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src="/images/intro.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Subtle Brand Tag & Skip Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative z-10 mt-6 flex items-center gap-6"
            >
              <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-bxc-text/40">
                BXC CONSTRUCTION
              </span>

              <button
                onClick={handleFinish}
                className="text-[11px] font-semibold uppercase tracking-wider text-bxc-accent hover:text-bxc-text transition-colors duration-200 cursor-pointer"
              >
                Skip Intro →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Split-Curtain Opening Reveal */}
      {phase === 'reveal' && (
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
          {/* Left curtain */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-white shadow-[10px_0_30px_rgba(0,0,0,0.05)]"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 1.0, ease: [0.83, 0, 0.17, 1] }}
          />

          {/* Right curtain */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.05)]"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.0, ease: [0.83, 0, 0.17, 1] }}
          />

          {/* Golden Center Accent Line */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#B08D57] to-transparent"
            initial={{ scaleY: 1, opacity: 0.8 }}
            animate={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      )}
    </div>
  )
}
