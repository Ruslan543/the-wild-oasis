import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nmlzwaqagfnhnpzreein.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbHp3YXFhZ2ZuaG5wenJlZWluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzODk3NzUsImV4cCI6MjAwNzk2NTc3NX0.0rBFCDrG4xyzy1WqNuD-pvToyJlNeA76cmP2Pf4Pbmw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
