'use client'

import { useState } from 'react'
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="section-container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-ucademy-dark mb-4 leading-tight">
          Preguntas frecuentes
        </h2>
        <p className="font-sans text-ucademy-text-secondary text-lg text-center mb-12 max-w-xl mx-auto">
          Todo lo que necesitas saber antes de dar el paso.
        </p>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ucademy-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-4 md:py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-ucademy-dark text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className={`shrink-0 w-5 h-5 text-ucademy-text-secondary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="pb-4 md:pb-5">
                  <p className="text-ucademy-text-secondary text-sm md:text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
