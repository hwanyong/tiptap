import { supabase } from '../../lib/supabase/client'

describe('Supabase Setup', () => {
  test('client is initialized', () => {
    expect(supabase).toBeDefined()
  })
  
  test('environment variables are loaded', () => {
    expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBeDefined()
    expect(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY).toBeDefined()
  })
})