'use client'

import { useRef, useEffect } from 'react'
import { Star } from 'lucide-react'

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-item').forEach((child) => child.classList.add('visible'))
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-ucademy-dark text-white">
      <div className="section-container text-center">
        <p className="animate-item opacity-0 font-body text-ucademy-accent text-sm font-semibold tracking-widest uppercase mb-3">
          Lo dicen ellos, no nosotros
        </p>
        <h2 className="animate-item opacity-0 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
          Confianza que se construye con resultados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Trustpilot */}
          <div className="animate-item opacity-0 flex flex-col items-center p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-500'}`} />
              ))}
            </div>
            <span className="text-3xl font-display font-bold text-white">4.0 / 5</span>
            <span className="text-gray-400 text-sm mt-1">Más de 1.400 reseñas</span>
          </div>

          {/* Students */}
          <div className="animate-item opacity-0 flex flex-col items-center p-6">
            <span className="text-3xl font-display font-bold text-ucademy-accent">+[estadística]</span>
            <span className="text-gray-400 text-sm mt-1">Alumnos en la trinchera</span>
          </div>

          {/* Success rate */}
          <div className="animate-item opacity-0 flex flex-col items-center p-6">
            <span className="text-3xl font-display font-bold text-ucademy-accent">[%]</span>
            <span className="text-gray-400 text-sm mt-1">Consiguen su objetivo</span>
          </div>
        </div>

        <div className="animate-item opacity-0 max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm italic">
            Centro Oficial autorizado por el Ministerio de Educación, Formación Profesional y Deportes (Códigos: 28082939 y 28081728)
          </p>
        </div>
      </div>
    </section>
  )
}
