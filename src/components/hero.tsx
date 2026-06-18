export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-ucademy-dark via-[#2A2A2A] to-ucademy-dark overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #FFE45E 0%, transparent 70%)'
        }} />
      </div>

      <div className="section-container relative z-10 w-full py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="font-sans text-ucademy-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
            Educación salvaje para la vida real
          </p>

          <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold mb-6">
            La academia online para conquistar el futuro que te pertenece
          </h1>

          <p className="font-sans text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Oposiciones, universidad o FP. Una ruta clara, un método que funciona. Sin humo, sin laberintos y sin perder un día más.
          </p>

          <ul className="space-y-3 mb-10">
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

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <a href="#form"
              className="inline-flex items-center justify-center gap-2 bg-ucademy-accent text-ucademy-dark font-bold rounded-full px-8 py-4 text-lg hover:bg-ucademy-accent-hover transition-all hover:scale-105"
            >
              Trazar mi ruta
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p className="text-gray-500 text-xs md:text-sm max-w-xl">
            Centro Oficial autorizado por el Ministerio de Educación, Formación Profesional y Deportes. Códigos de Centro: 28082939 y 28081728
          </p>
        </div>
      </div>
    </section>
  )
}
