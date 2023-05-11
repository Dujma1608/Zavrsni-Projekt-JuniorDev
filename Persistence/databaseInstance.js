import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjawlxmscoamqqrlrgrv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqYXdseG1zY29hbXFxcmxyZ3J2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MzIwMjI4MiwiZXhwIjoxOTk4Nzc4MjgyfQ.7Ih4Xp1iGv6SMsU9iENEyYbrtv_-atzd7SoKjASB790';

export const supabase = createClient(supabaseUrl, supabaseKey);