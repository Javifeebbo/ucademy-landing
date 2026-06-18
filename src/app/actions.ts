'use server'

import { supabase } from '@/lib/supabase'
import { saveLeadToFile } from '@/lib/storage'
import fs from 'fs'
import path from 'path'

interface LeadData {
  name: string
  email: string
  phone: string
  interest: string
  message?: string
  consent: boolean
  created_at: string
  source: string
  landing_id: string
}

export async function submitLead(prevState: { error: string; success: boolean }, formData: FormData): Promise<{ error: string; success: boolean }> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const interest = formData.get('interest') as string
  const message = formData.get('message') as string
  const consent = formData.get('consent') === 'on'

  // Validation
  if (!name || name.trim().length < 2) {
    return { error: 'Por favor, introduce tu nombre completo.', success: false }
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Por favor, introduce un email válido.', success: false }
  }
  if (!phone || phone.trim().length < 9) {
    return { error: 'Por favor, introduce un teléfono válido.', success: false }
  }
  if (!interest) {
    return { error: 'Por favor, selecciona qué estás buscando.', success: false }
  }
  if (!consent) {
    return { error: 'Debes aceptar la política de privacidad.', success: false }
  }

  const lead: LeadData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    interest,
    message: message || '',
    consent,
    created_at: new Date().toISOString(),
    source: 'ucademy-landing',
    landing_id: 'ucademy-general-001',
  }

  // Try Supabase first
  let supabaseAvailable = false
  try {
    const { error } = await supabase.from('leads').insert([lead])
    if (!error) supabaseAvailable = true
  } catch {
    // Supabase not configured - will use JSON fallback
  }

  if (!supabaseAvailable) {
    // Fallback: save to JSON file (works on Vercel for preview/development)
    try {
      saveLeadToFile(lead)
      console.log('Lead saved to JSON file (Supabase not configured)')
    } catch (e) {
      console.error('Failed to save lead:', e)
      // Last resort: log it
      console.log('LEAD CAPTURED:', JSON.stringify(lead))
    }
  }

  return { error: '', success: true }
}
