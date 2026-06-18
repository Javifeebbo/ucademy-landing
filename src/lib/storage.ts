import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const LEADS_FILE = path.join(DATA_DIR, 'leads.json')

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

export function saveLeadToFile(lead: LeadData): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }

  let leads: LeadData[] = []
  if (fs.existsSync(LEADS_FILE)) {
    try {
      const content = fs.readFileSync(LEADS_FILE, 'utf-8')
      leads = JSON.parse(content)
    } catch {
      leads = []
    }
  }

  leads.push(lead)
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8')
}
