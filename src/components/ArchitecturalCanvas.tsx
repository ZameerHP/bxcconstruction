'use client'

import React, { useEffect, useRef } from 'react'

export default function ArchitecturalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let isVisible = true
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Stop canvas animation completely when scrolled out of view for zero lag
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          render()
        } else {
          cancelAnimationFrame(animationFrameId)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize, { passive: true })

    interface NodePoint {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
    }

    const nodeCount = Math.min(Math.floor((width * height) / 45000), 28)
    const nodes: NodePoint[] = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.1,
        y: (Math.random() - 0.5) * height * 1.1,
        z: Math.random() * 600 + 200,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
      })
    }

    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.03
      targetMouseY = (e.clientY - height / 2) * 0.03
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const fov = 450

    const render = () => {
      if (!isVisible) return

      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      ctx.clearRect(0, 0, width, height)

      const projectedPoints: { x: number; y: number; scale: number; alpha: number }[] = []

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        node.x += node.vx
        node.y += node.vy
        node.z += node.vz

        if (node.z < 100) node.z = 800
        if (node.z > 800) node.z = 100
        if (Math.abs(node.x) > width * 0.7) node.vx *= -1
        if (Math.abs(node.y) > height * 0.7) node.vy *= -1

        const adjustedX = node.x - mouseX
        const adjustedY = node.y - mouseY
        const scale = fov / (fov + node.z)
        const projX = adjustedX * scale + width / 2
        const projY = adjustedY * scale + height / 2
        const alpha = Math.max(0.1, Math.min(0.6, (1 - node.z / 800) * 0.7))

        projectedPoints.push({ x: projX, y: projY, scale, alpha })

        ctx.beginPath()
        ctx.arc(projX, projY, 1.8 * scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(176, 141, 87, ${alpha})`
        ctx.fill()
      }

      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i]
          const p2 = projectedPoints[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distSq = dx * dx + dy * dy

          if (distSq < 16900) { // 130px distance squared (avoiding Math.sqrt)
            const dist = Math.sqrt(distSq)
            const lineAlpha = (1 - dist / 130) * Math.min(p1.alpha, p2.alpha) * 0.4
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(176, 141, 87, ${lineAlpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-50 mix-blend-screen"
    />
  )
}
