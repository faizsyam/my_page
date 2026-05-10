'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')
    const bar = document.getElementById('scrollBar')
    const nav = document.getElementById('nav')

    if (!cursor || !ring || !bar || !nav) return

    let mx = -100, my = -100, rx = -100, ry = -100
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    function animateRing() {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring!.style.left = rx + 'px'
      ring!.style.top = ry + 'px'
      rafId = requestAnimationFrame(animateRing)
    }
    animateRing()

    document.addEventListener('mousemove', onMouseMove)

    const hoverEls = document.querySelectorAll(
      'a, button, .id-card, .proj-card, .idea-card, .ptile, .social-link, .logo-placeholder'
    )
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('big')
        ring.classList.add('big')
      })
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('big')
        ring.classList.remove('big')
      })
    })

    const onScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      bar!.style.width = (scrolled / maxScroll * 100) + '%'
      if (scrolled > 60) nav!.classList.add('stuck')
      else nav!.classList.remove('stuck')
    }
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent
        const el = btn as HTMLElement
        const rect = el.getBoundingClientRect()
        const dx = (me.clientX - rect.left - rect.width / 2) * 0.18
        const dy = (me.clientY - rect.top - rect.height / 2) * 0.18
        el.style.transform = `translate(${dx}px,${dy}px)`
      })
      btn.addEventListener('mouseleave', () => {
        ;(btn as HTMLElement).style.transform = ''
      })
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        const href = anchor.getAttribute('href')
        if (href === '#') return
        const target = document.querySelector(href!)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
      <div className="scroll-bar" id="scrollBar" />
    </>
  )
}
