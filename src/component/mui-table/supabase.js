import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xfujnlqqfruzrpvdhpqg.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTk1ODE4NCwiZXhwIjoxOTU1NTM0MTg0fQ.8E3oHRL5WgyQMYuy1bEsgKH67RS71BMo1ANRN0nVDzI";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export default supabase;
