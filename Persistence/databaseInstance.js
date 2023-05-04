import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjawlxmscoamqqrlrgrv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqYXdseG1zY29hbXFxcmxyZ3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMDIyODIsImV4cCI6MTk5ODc3ODI4Mn0.7cTQM-BdKyJXJ3tqZhMAvhjLb72EaOpn05o0rElwa1U';

const supabase = createClient(supabaseUrl, supabaseKey);