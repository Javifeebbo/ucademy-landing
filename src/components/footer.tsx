export default function Footer() {
  return (
    <footer className="bg-ucademy-dark border-t border-[#333333] py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <span className="font-display text-2xl font-bold text-white">Ucademy</span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href="#" className="text-gray-400 hover:text-ucademy-accent text-sm transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-ucademy-accent text-sm transition-colors">
              Aviso legal
            </a>
            <a href="#" className="text-gray-400 hover:text-ucademy-accent text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
          <p className="mb-2">
            Centro Oficial autorizado por el Ministerio de Educación, Formación Profesional y Deportes.
            Códigos de Centro: 28082939 y 28081728
          </p>
          <p>&copy; 2026 Ucademy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
