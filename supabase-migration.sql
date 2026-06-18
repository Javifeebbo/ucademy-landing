-- Ucademy Landing — Supabase Migration
-- Run this SQL in your Supabase SQL Editor to create the leads table

CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  interest TEXT NOT NULL,
  message TEXT DEFAULT '',
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  source TEXT DEFAULT 'ucademy-landing',
  landing_id TEXT DEFAULT 'ucademy-general-001',
  campaign TEXT DEFAULT ''
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow insert from anon key (needed for the form submission)
CREATE POLICY "Enable insert for anon" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view leads
CREATE POLICY "Enable read for authenticated" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
