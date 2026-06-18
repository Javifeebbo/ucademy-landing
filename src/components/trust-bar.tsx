export default function TrustBar() {
  const logos = [
    { name: 'Ministerio de Educación', label: 'Ministerio de Educación' },
    { name: 'Comunidad de Madrid', label: 'Comunidad de Madrid' },
  ]

  return (
    <section className="bg-white border-b border-ucademy-border">
      <div className="section-container py-8 md:py-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Trustpilot */}
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(4)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amber-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-sm text-ucademy-text-secondary font-medium">
              <strong>4.0</strong> / 5 — <strong>+1.400</strong> reseñas
            </span>
          </div>

          {/* Official logos */}
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="w-8 h-8 bg-ucademy-dark/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-ucademy-dark/40">{logo.name.charAt(0)}</span>
              </div>
              <span className="text-xs text-ucademy-text-secondary font-medium">{logo.label}</span>
            </div>
          ))}

          {/* Stats */}
          <div className="text-center">
            <span className="text-2xl font-display font-bold text-ucademy-dark">+8.700</span>
            <span className="text-xs text-ucademy-text-secondary block">Alumnos en la trinchera</span>
          </div>
        </div>
      </div>
    </section>
  )
}
