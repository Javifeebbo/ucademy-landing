'use client'

import { useRef, useEffect } from 'react'
import { Compass, GraduationCap, Zap } from 'lucide-react'

const divisions = [
  {
    id: 'polaris',
    icon: Compass,
    label: 'Oposiciones',
    title: 'Tu plaza, tu norte',
    description:
      'Nos dejamos la piel contigo para conseguir tu plaza, con acompañamiento continuo, un plan personalizado y un método en el que fallar no es opción.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    id: 'atlas',
    icon: GraduationCap,
    label: 'Acceso a la Universidad',
    title: 'Hackea la EBAU',
    description:
      'La Selectividad tiene bugs y reglas de hace décadas. Te damos las claves y las coordenadas para entrar en la carrera de tus sueños sin que el proceso te consuma.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    id: 'explora',
    icon: Zap,
    label: 'Formación Profesional',
    title: 'Explora tu potencial, conquista tu futuro',
    description:
      'El mercado laboral es una selva. Aquí no se &ldquo;estudian&rdquo; módulos: probamos, fallamos y abrimos brecha con herramientas de verdad.',
    color: 'bg-emerald-50 text-emerald-600',
  },
]

export default function DivisionsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-item').forEach((child, i) => {
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
    <section id="divisions" ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="section-container">
        <p className="animate-item opacity-0 font-sans text-ucademy-accent text-sm font-semibold tracking-widest uppercase mb-3">
          Ucademy ha evolucionado
        </p>
        <h2 className="animate-item opacity-0 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ucademy-dark mb-4 leading-tight">
          Tres caminos, un mismo método salvaje
        </h2>
        <p className="animate-item opacity-0 font-sans text-ucademy-text-secondary text-lg md:text-xl mb-12 max-w-2xl">
          Porque opositores, futuros universitarios y alumnos de FP no necesitan lo mismo. Cada terreno pide su propio mapa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {divisions.map((div) => {
            const Icon = div.icon
            return (
              <article
                key={div.id}
                className="animate-item opacity-0 group bg-white border border-ucademy-border rounded-lg p-6 md:p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${div.color} flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-ucademy-text-secondary">
                  {div.label}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-ucademy-dark mt-2 mb-3">
                  {div.title}
                </h3>
                <p className="text-ucademy-text-secondary text-sm md:text-base leading-relaxed mb-6">
                  {div.description}
                </p>
                <button
                  onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-button font-bold text-ucademy-dark text-sm hover:text-ucademy-accent transition-colors inline-flex items-center gap-1"
                >
                  Saber más
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
