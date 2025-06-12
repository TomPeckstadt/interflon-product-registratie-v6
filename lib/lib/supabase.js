import { createClient } from '@supabase/supabase-js';

// Singleton pattern voor client-side Supabase client
let supabaseInstance = null;

export const getSupabase = () => {
  if (supabaseInstance) return supabaseInstance;
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL en Anon Key zijn niet geconfigureerd in .env.local');
  }
  
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};

// Voor server-side gebruik (in API routes of Server Components)
export const createServerSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL en Anon Key zijn niet geconfigureerd in .env.local');
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
};
