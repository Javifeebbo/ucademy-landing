'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-trigger').forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 150)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-ucademy-dark overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ucademy-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-ucademy-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="section-container relative z-10 w-full py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Pretitle */}
          <p className="animate-trigger opacity-0 font-body text-ucademy-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
            Educación salvaje para la vida real
          </p>

          {/* H1 */}
          <h1 className="animate-trigger opacity-0 font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold mb-6">
            La academia online para conquistar el futuro que te pertenece
          </h1>

          {/* Subheadline */}
          <p className="animate-trigger opacity-0 font-body text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Oposiciones, universidad o FP. Una ruta clara, un método que funciona. Sin humo, sin laberintos y sin perder un día más.
          </p>

          {/* Bullets */}
          <ul className="animate-trigger opacity-0 space-y-3 mb-10">
            {[
              'Plan personalizado que se adapta a tu vida real',
              'Tutores en activo: dudas resueltas el mismo día',
              'Temario sin paja: solo lo que cae, solo lo que suma',
              'Más de 1.400 reseñas en Trustpilot',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-ucademy-accent mt-1 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-base md:text-lg">{text}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="animate-trigger opacity-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <button
              onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Trazar mi ruta
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust micro */}
          <p className="animate-trigger opacity-0 text-gray-500 text-xs md:text-sm max-w-xl">
            Centro Oficial autorizado por el Ministerio de Educación, Formación Profesional y Deportes. Códigos de Centro: 28082939 y 28081728
          </p>
        </div>
      </div>
    </section>
  )
}
