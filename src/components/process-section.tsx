const steps = [
  { num: '01', title: 'Cuéntanos tu objetivo', desc: '¿Oposiciones, universidad o FP? Dinos qué buscas y en qué situación estás.' },
  { num: '02', title: 'Te asignamos tu ruta', desc: 'Plan personalizado trazado por expertos en activo, ajustado a tu agenda y tu punto de partida.' },
  { num: '03', title: 'Empezamos', desc: 'Accede a la plataforma, conoce a tu tutor y da el primer paso. Sin compromiso ni ataduras.' },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="section-container max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-ucademy-dark mb-4 leading-tight">
          Empezar es más fácil de lo que crees
        </h2>
        <p className="font-sans text-ucademy-text-secondary text-lg text-center mb-16 max-w-xl mx-auto">
          Tres pasos. Sin papeleo. Sin rodeos.
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 text-center md:text-left relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-ucademy-border" />
              )}
              <div className="flex flex-col items-center md:items-start">
                <span className="font-display text-5xl md:text-6xl font-bold text-ucademy-accent mb-4">{step.num}</span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-ucademy-dark mb-2">{step.title}</h3>
                <p className="text-ucademy-text-secondary text-sm md:text-base max-w-xs">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
