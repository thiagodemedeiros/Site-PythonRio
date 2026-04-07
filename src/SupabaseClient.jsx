import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://erwfdjwfakvkxezwimla.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyd2ZkandmYWt2a3hlendpbWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4ODYxNzYsImV4cCI6MjA5MDQ2MjE3Nn0.v3HTvFizcD-kh3jFHELF1Wu7f9xEpIpUKA_ECiypHBU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)