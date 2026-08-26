'use client'

import { useEffect, useRef, useCallback } from 'react'

interface UseCountUpOptions {
  end: number
  start?: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function useCountUp({
  end,
  start = 0,
  duration = 1.8,
  prefix = '',
  suffix = '',
  decimals = 0,
}: UseCountUpOptions) {
  const ref = useRef<HTMLSpanElement>(null)
  const rafId = useRef<number | null>(null)

  const animate = useCallback(() => {
    if (!ref.current) return

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current)
    }

    const startTime = performance.now()
    const durationMs = duration * 1000

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      // Ease-out cubic: smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + eased * (end - start)

      if (ref.current) {
        ref.current.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`
      }

      if (progress < 1) {
        rafId.current = requestAnimationFrame(tick)
      } else {
        if (ref.current) {
          ref.current.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`
        }
        rafId.current = null
      }
    }

    rafId.current = requestAnimationFrame(tick)
  }, [end, start, duration, prefix, suffix, decimals])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Set initial text to final value as fallback in case observer is delayed
    element.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`

    if (typeof IntersectionObserver === 'undefined') {
      return
    }

    let isFirst = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate on intersection
          animate()
        } else if (!isFirst) {
          // Reset to 0 when out of view so it animates again on next entry
          if (element) {
            element.textContent = `${prefix}${start.toFixed(decimals)}${suffix}`
          }
        }
        isFirst = false
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [animate, end, start, decimals, prefix, suffix])

  return ref
}

