'use client'

import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface AnimatedBarProps {
  value: number // 0-100
  color?: 'red' | 'green'
  className?: string
}

export default function AnimatedBar({ value, color = 'red', className = '' }: AnimatedBarProps) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    // Respect reduced-motion: jump straight to the final width, no animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(bar, { width: `${value}%` })
      return
    }

    gsap.fromTo(
      bar,
      { width: '0%' },
      {
        width: `${value}%`,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [value])

  const colorClass = color === 'green' ? 'bg-success-500' : 'bg-primary-600'

  return (
    <div className={`w-full bg-surface-overlay rounded-full h-2 mt-3 ${className}`}>
      <div ref={barRef} className={`${colorClass} h-2 rounded-full`} style={{ width: 0 }} />
    </div>
  )
}
