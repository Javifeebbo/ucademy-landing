import { Star } from 'lucide-react'

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ucademy-dark text-white">
      <div className="section-container text-center">
        <p className="font-sans text-ucademy-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Lo dicen ellos, no nosotros
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
          Confianza que se construye con resultados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-500'}`} />
              ))}
            </div>
            <span className="text-3xl font-display font-bold text-white">4.0 / 5</span>
            <span className="text-gray-400 text-sm mt-1">Más de 1.400 reseñas</span>
          </div>

          <div className="flex flex-col items-center p-6">
            <span className="text-3xl font-display font-bold text-ucademy-accent">+8.700</span>
            <span className="text-gray-400 text-sm mt-1">Alumnos en la trinchera</span>
          </div>

          <div className="flex flex-col items-center p-6">
            <span className="text-3xl font-display font-bold text-ucademy-accent">92%</span>
            <span className="text-gray-400 text-sm mt-1">Consiguen su objetivo</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm italic">
            Centro Oficial autorizado por el Ministerio de Educación, Formación Profesional y Deportes (Códigos: 28082939 y 28081728)
          </p>
        </div>
      </div>
    </section>
  )
}
