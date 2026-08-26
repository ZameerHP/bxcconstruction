'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'project' | 'link' | 'text'>('default')
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || 'ontouchstart' in window) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let animId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) setIsVisible(true)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const renderLoop = () => {
      // Smooth interpolation for trailing ring (snappy 0.25 lerp factor)
      ringX += (mouseX - ringX) * 0.25
      ringY += (mouseY - ringY) * 0.25

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }

      animId = requestAnimationFrame(renderLoop)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    window.addEventListener('mouseenter', () => setIsVisible(true))
    window.addEventListener('mouseleave', () => setIsVisible(false))

    // Passive hover target detection
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="project"]')) {
        setCursorType('project')
      } else if (target.closest('input, textarea, [contenteditable="true"]')) {
        setCursorType('text')
      } else if (target.closest('a, button, [role="button"], select, label, summary, [tabindex]')) {
        setCursorType('link')
      } else {
        setCursorType('default')
      }
    }

    document.addEventListener('mouseover', handleOver, { passive: true })
    animId = requestAnimationFrame(renderLoop)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleOver)
      cancelAnimationFrame(animId)
    }
  }, [isVisible])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      {/* Lagged Outer Ring (Direct GPU hardware accelerated) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div
          className={`rounded-full border border-bxc-accent flex items-center justify-center transition-all duration-200 ${
            cursorType === 'project'
              ? 'w-16 h-16 bg-bxc-accent/90 border-transparent shadow-lg scale-100'
              : cursorType === 'link'
              ? 'w-10 h-10 border-bxc-accent bg-bxc-accent/15 scale-110'
              : cursorType === 'text'
              ? 'w-4 h-7 rounded-sm border-bxc-accent/70 bg-bxc-accent/10'
              : 'w-7 h-7 border-bxc-accent/40 bg-transparent'
          } ${isClicked ? 'scale-90 opacity-80' : ''}`}
        >
          {cursorType === 'project' && (
            <span className="text-bxc-bg text-[9px] font-bold tracking-widest uppercase select-none">
              VIEW
            </span>
          )}
        </div>
      </div>

      {/* Instant Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div
          className={`rounded-full bg-bxc-accent transition-all duration-150 ${
            cursorType === 'project'
              ? 'w-0 h-0 opacity-0'
              : cursorType === 'text'
              ? 'w-0.5 h-3.5 rounded-none'
              : isClicked
              ? 'w-2 h-2 bg-white'
              : 'w-1.5 h-1.5 opacity-100'
          }`}
        />
      </div>
    </>
  )
}
