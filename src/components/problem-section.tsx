
export default function ProblemSection() {
  const pains = [
    'Métodos que no se adaptan a tu ritmo ni a tu vida real',
    'Acompañamiento que brilla por su ausencia cuando más lo necesitas',
    'Promesas vacías que se quedan en humo y años perdidos',
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ucademy-bg-soft">
      <div className="section-container max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ucademy-dark mb-6 leading-tight">
          El sistema educativo lleva décadas pidiéndote que encajes en su molde
        </h2>
        <p className="font-sans text-ucademy-text-secondary text-lg md:text-xl leading-relaxed mb-10">
          Academias que prometen resultados y entregan métodos genéricos. Procesos largos, burocracia infinita, temarios que no se actualizan. Y mientras, tú pierdes meses —o años— en un camino que no está hecho para tu vida real.
        </p>
        <ul className="space-y-4">
          {pains.map((pain, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </span>
              <span className="text-ucademy-dark text-lg">{pain}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
