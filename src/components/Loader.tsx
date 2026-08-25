'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<'video' | 'exit' | 'done'>('video')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setPhase('exit')
      setTimeout(() => {
        setPhase('done')
        onComplete()
      }, 700)
    }

    // Fallback timeout in case video fails to load or play
    const fallbackTimer = setTimeout(() => {
      if (phase === 'video') {
        setPhase('exit')
        setTimeout(() => {
          setPhase('done')
          onComplete()
        }, 700)
      }
    }, 12000)

    video.addEventListener('ended', handleEnded)
    
    // Try to play the video
    video.play().catch(() => {
      // If autoplay is blocked, skip to exit after a short delay
      setTimeout(() => {
        setPhase('exit')
        setTimeout(() => {
          setPhase('done')
          onComplete()
        }, 700)
      }, 2000)
    })

    return () => {
      clearTimeout(fallbackTimer)
      video.removeEventListener('ended', handleEnded)
    }
  }, [onComplete, phase])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      {phase === 'video' && (
        <motion.div
          key="loader-video"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
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
      )}

      {phase === 'exit' && (
        <div key="loader-exit" className="fixed inset-0 z-[100] flex flex-col pointer-events-none">
          <motion.div
            className="h-1/2 w-full bg-black"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="h-1/2 w-full bg-black"
            initial={{ y: 0 }}
            animate={{ y: '100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      )}
    </AnimatePresence>
  )
}
