'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: '¿Cómo sé qué opción es la mejor para mí?', a: 'Por eso estamos aquí. Cuéntanos tu situación y te recomendamos la ruta que mejor se adapta a tus objetivos. Sin presión, sin compromiso.' },
  { q: '¿Puedo compaginar el estudio con mi trabajo?', a: 'El método salvaje está diseñado para eso. Plan personalizado que se ajusta a tu agenda real. Tú traes tu vida, nosotros ajustamos la ruta.' },
  { q: '¿La formación tiene validez oficial?', a: 'Sí. Somos Centro Oficial autorizado por el Ministerio de Educación, Formación Profesional y Deportes (Códigos: 28082939 y 28081728).' },
  { q: '¿Cómo son las clases?', a: 'Online, en directo y en diferido. Accedes cuando puedas, pero con el apoyo de tutores que responden el mismo día. Tecnología que flexibiliza, personas que sostienen.' },
  { q: '¿Hay algún compromiso al solicitar información?', a: 'Ninguno. Solo queremos conocerte, entender tu objetivo y explicarte cómo podemos ayudarte. Decides después, sin ataduras.' },
  { q: '¿Cuánto tiempo dura la preparación?', a: 'Depende de tu objetivo y tu punto de partida. En la primera conversación te daremos una estimación realista. Sin promesas imposibles.' },
  { q: '¿Qué pasa si no consigo mi objetivo?', a: 'Trabajamos contigo desde el primer día para que eso no pase. Nuestro método está probado con miles de alumnos. Pero si algo no funciona, ajustamos la ruta.' },
  { q: '¿Cómo empiezo?', a: 'Rellena el formulario de arriba. En menos de 24h uno de nuestros asesores te contacta para conocer tu caso y trazarte la ruta.' },
]

function AccordionItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-ucademy-border">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 md:py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-ucademy-dark text-sm md:text-base pr-4">{q}</span>
        <ChevronDown className={`shrink-0 w-5 h-5 text-ucademy-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4 md:pb-5' : 'max-h-0'}`}>
        <p className="text-ucademy-text-secondary text-sm md:text-base leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="section-container max-w-3xl">
        <h2 className="animate-item opacity-0 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-ucademy-dark mb-4 leading-tight">
          Preguntas frecuentes
        </h2>
        <p className="animate-item opacity-0 font-body text-ucademy-text-secondary text-lg text-center mb-12 max-w-xl mx-auto">
          Todo lo que necesitas saber antes de dar el paso.
        </p>

        <div className="animate-item opacity-0">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
