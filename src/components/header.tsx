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

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-display text-2xl font-bold transition-colors ${
            scrolled ? 'text-ucademy-dark' : 'text-white'
          }`}
        >
          Ucademy
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('divisions')}
            className={`text-sm font-medium transition-colors hover:text-ucademy-accent ${
              scrolled ? 'text-ucademy-dark' : 'text-gray-300'
            }`}
          >
            Oposiciones
          </button>
          <button onClick={() => scrollTo('divisions')}
            className={`text-sm font-medium transition-colors hover:text-ucademy-accent ${
              scrolled ? 'text-ucademy-dark' : 'text-gray-300'
            }`}
          >
            Universidad
          </button>
          <button onClick={() => scrollTo('divisions')}
            className={`text-sm font-medium transition-colors hover:text-ucademy-accent ${
              scrolled ? 'text-ucademy-dark' : 'text-gray-300'
            }`}
          >
            FP
          </button>
          <button onClick={() => scrollTo('form')}
            className="bg-ucademy-accent text-ucademy-dark font-button font-bold px-5 py-2.5 rounded-full text-sm hover:bg-ucademy-accent-hover transition-all hover:scale-105"
          >
            Solicitar información
          </button>
        </nav>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-ucademy-border">
          <div className="section-container py-4 flex flex-col gap-3">
            <button onClick={() => scrollTo('divisions')} className="text-left py-2 text-ucademy-dark font-medium">Oposiciones</button>
            <button onClick={() => scrollTo('divisions')} className="text-left py-2 text-ucademy-dark font-medium">Universidad</button>
            <button onClick={() => scrollTo('divisions')} className="text-left py-2 text-ucademy-dark font-medium">FP</button>
            <button onClick={() => scrollTo('form')}
              className="bg-ucademy-accent text-ucademy-dark font-button font-bold px-5 py-3 rounded-full text-center mt-2"
            >
              Solicitar información
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
