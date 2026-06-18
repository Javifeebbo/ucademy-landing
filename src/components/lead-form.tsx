'use client'

import { useActionState } from 'react'
import { submitLead } from '@/app/actions'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

const initialState = { error: '', success: false }

export default function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState)

  return (
    <section id="form" className="py-16 md:py-24 lg:py-32 bg-ucademy-bg-soft">
      <div className="section-container max-w-2xl">
        <p className="font-sans text-ucademy-accent text-sm font-semibold tracking-widest uppercase mb-3 text-center">
          Da el primer paso
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-ucademy-dark mb-4 leading-tight">
          Empieza tu ruta hoy
        </h2>
        <p className="font-sans text-ucademy-text-secondary text-lg text-center mb-10 max-w-lg mx-auto">
          Cuéntanos qué buscas y te trazamos el camino. Sin compromiso.
        </p>

        {state.success ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-green-800 mb-2">¡Listo!</h3>
            <p className="text-green-700">
              Hemos recibido tu solicitud. En breve uno de nuestros asesores se pondrá en contacto contigo para trazar tu ruta personalizada.
            </p>
          </div>
        ) : (
          <form action={formAction} className="bg-white border border-ucademy-border rounded-lg p-6 md:p-8 space-y-5">
            {/* Error message */}
            {state.error && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{state.error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ucademy-dark mb-1.5">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ej: María García"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ucademy-dark mb-1.5">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Ej: maria@email.com"
                  className="input-field"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ucademy-dark mb-1.5">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Ej: +34 612 345 678"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-ucademy-dark mb-1.5">
                  ¿Qué estás buscando? <span className="text-red-500">*</span>
                </label>
                <select id="interest" name="interest" required className="input-field appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B6B6B%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10">
                  <option value="">Selecciona una opción</option>
                  <option value="oposiciones">Oposiciones</option>
                  <option value="universidad">Acceso a la Universidad</option>
                  <option value="fp">Formación Profesional</option>
                  <option value="no-lo-se">Aún no lo sé</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ucademy-dark mb-1.5">
                Cuéntanos más (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="¿Tienes alguna duda o preferencia? Cuéntanosla"
                className="input-field resize-none"
              />
            </div>

            {/* Legal */}
            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                className="mt-1 w-4 h-4 accent-ucademy-accent shrink-0"
              />
              <label htmlFor="consent" className="text-xs md:text-sm text-ucademy-text-secondary leading-relaxed">
                Acepto la{' '}
                <a href="#" className="underline hover:text-ucademy-dark">
                  política de privacidad
                </a>{' '}
                y consiento que mis datos sean tratados para gestionar mi solicitud. <span className="text-red-500">*</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="btn-primary w-full text-base py-4"
            >
              {pending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Trazar mi ruta'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
