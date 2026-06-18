'use client'

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ucademy-dark text-white">
      <div className="section-container text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Tu plaza no espera. Nosotros tampoco.
        </h2>
        <p className="font-sans text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Cada día que pasa es un día más cerca de la convocatoria. Empieza hoy.
        </p>
        <button
          onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary text-lg px-10 py-4"
        >
          Empieza tu ruta hoy
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
