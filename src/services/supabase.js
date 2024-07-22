import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://islzzoxkbnrjhmmkjons.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzbHp6b3hrYm5yamhtbWtqb25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MDM4NDgsImV4cCI6MjAzNjI3OTg0OH0.YQDVvrbjZJdtplwCTLzp83-KKwsaUM7T0oXqp0mcPoc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
