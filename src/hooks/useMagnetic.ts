'use client'

import { useRef, useEffect, useCallback } from 'react'

export function useMagnetic<T extends HTMLElement = HTMLButtonElement | HTMLAnchorElement>(strength: number = 16) {
  const ref = useRef<T>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)

      const hoverZone = 80

      if (distance < hoverZone) {
        const pull = Math.min(strength, (strength * (hoverZone - distance)) / hoverZone)
        const moveX = (distX / hoverZone) * pull
        const moveY = (distY / hoverZone) * pull
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
        el.style.transition = 'transform 0.15s cubic-bezier(0.33, 1, 0.68, 1)'
      }
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0px, 0px, 0)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)'
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return

    const el = ref.current
    if (!el) return

    window.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}
