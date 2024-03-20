import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yytnxitftlvimiplfdvs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dG54aXRmdGx2aW1pcGxmZHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyOTcxMzcsImV4cCI6MjAyNTg3MzEzN30.uYAd2ZZtj6WLnp9Nidp_71kI7HhegU7PhRaGXU-fRVo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
