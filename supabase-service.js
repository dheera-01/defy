import { createClient } from '@supabase/supabase-js';
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { SUPABASE_URL,SUPABASE_PUBLIC_KEY } from '@env';

const SUPABASE_PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycmlleWZ0c2h3dnV2Y2xhY2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY0OTk0NDAsImV4cCI6MTk2MjA3NTQ0MH0.rGADqJNYuWskeuSwyjzy7hSfjHTuo-2U7mEqTX36BOg";
const SUPABASE_URL = "https://rrrieyftshwvuvclackd.supabase.co";

const supabase = createClient(SUPABASE_URL,SUPABASE_PUBLIC_KEY, {
    localStorage:AsyncStorage,
});
export {supabase}