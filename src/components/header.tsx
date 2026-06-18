'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#hero"
          className={`font-display text-2xl font-bold transition-colors ${
            scrolled ? 'text-ucademy-dark' : 'text-white'
          }`}
        >
          Ucademy
        </a>

        {/* Desktop Nav - native anchor links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#divisions"
            className={`text-sm font-medium transition-colors hover:text-ucademy-accent ${
              scrolled ? 'text-ucademy-dark' : 'text-gray-300'
            }`}
          >
            Oposiciones
          </a>
          <a href="#divisions"
            className={`text-sm font-medium transition-colors hover:text-ucademy-accent ${
              scrolled ? 'text-ucademy-dark' : 'text-gray-300'
            }`}
          >
            Universidad
          </a>
          <a href="#divisions"
            className={`text-sm font-medium transition-colors hover:text-ucademy-accent ${
              scrolled ? 'text-ucademy-dark' : 'text-gray-300'
            }`}
          >
            FP
          </a>
          <a href="#form"
            className="bg-ucademy-accent text-ucademy-dark font-button font-bold px-5 py-2.5 rounded-full text-sm hover:bg-ucademy-accent-hover transition-all hover:scale-105"
          >
            Solicitar información
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? 'text-ucademy-dark' : 'text-white'
          }`}
          aria-label="Menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-ucademy-border">
          <div className="section-container py-4 flex flex-col gap-3">
            <a href="#divisions" onClick={() => setMenuOpen(false)} className="text-left py-2 text-ucademy-dark font-medium">Oposiciones</a>
            <a href="#divisions" onClick={() => setMenuOpen(false)} className="text-left py-2 text-ucademy-dark font-medium">Universidad</a>
            <a href="#divisions" onClick={() => setMenuOpen(false)} className="text-left py-2 text-ucademy-dark font-medium">FP</a>
            <a href="#form" onClick={() => setMenuOpen(false)}
              className="bg-ucademy-accent text-ucademy-dark font-button font-bold px-5 py-3 rounded-full text-center mt-2"
            >
              Solicitar información
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
