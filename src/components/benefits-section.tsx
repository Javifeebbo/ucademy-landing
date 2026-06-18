import { Route, MessageCircle, ScrollText, Crosshair, Timer, Heart } from 'lucide-react'

const benefits = [
  { icon: Route, title: 'Método Salvaje, no jaula', desc: 'Un mapa vivo que se traga tu caos real. Si hoy se tuerce el día, recalculamos al momento.' },
  { icon: MessageCircle, title: 'Soporte que no se apaga', desc: 'Tutores en activo, en la trinchera contigo. Dudas resueltas el mismo día, no la semana que viene.' },
  { icon: ScrollText, title: 'Temario sin paja', desc: 'Eliminamos el relleno. Solo lo que cae, solo lo que suma para tu objetivo.' },
  { icon: Crosshair, title: 'Estrategia, no fuerza bruta', desc: 'Cero discursos de coach. Te pasamos la ruta directa para que solo tengas que darle a play.' },
  { icon: Timer, title: 'Simulacros que te ponen a prueba', desc: 'Para que el examen real se sienta fácil cuando llegue el momento.' },
  { icon: Heart, title: 'No estudias solo, estás en manada', desc: 'Comunidad de miles de alumnos en la trinchera contigo. Aquí nadie avanza a ciegas.' },
]

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ucademy-bg-soft">
      <div className="section-container">
        <p className="font-sans text-ucademy-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          ¿Por qué estudiar con Ucademy?
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-ucademy-dark mb-4 leading-tight">
          Esto no es otra academia online
        </h2>
        <p className="font-sans text-ucademy-text-secondary text-lg text-center mb-12 max-w-2xl mx-auto">
          Llevamos años bajando al barro con miles de alumnos. Esto no son promesas. Son las coordenadas que ya funcionan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={i} className="bg-white border border-ucademy-border rounded-lg p-6 md:p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <Icon className="w-8 h-8 text-ucademy-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg md:text-xl font-bold text-ucademy-dark mb-2">{b.title}</h3>
                <p className="text-ucademy-text-secondary text-sm md:text-base leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
