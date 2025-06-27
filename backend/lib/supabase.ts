import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
	throw new Error('Invalid/Missing environment variable: "NEXT_PUBLIC_SUPABASE_URL"');
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
	throw new Error('Invalid/Missing environment variable: "SUPABASE_SERVICE_ROLE_KEY"');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Create a Supabase client with service role key for backend operations
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
	auth: {
		autoRefreshToken: false,
		persistSession: false
	}
});

export default supabase; 