import { createClient } from '@supabase/supabase-js'

// Grab credentials from env variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder'

// Initialize the Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
