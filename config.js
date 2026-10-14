// Connection settings for the YBM Team Portal (Supabase > Project Settings > API).
// The publishable key is meant to be public: the database's access rules decide what each person can read.
window.YBM_PORTAL = {
  supabaseUrl: 'https://vkadhsvafrpbqhbicreq.supabase.co',
  supabaseAnonKey: 'sb_publishable_u-0nRByc3Aj6ueN5VtPldQ_lw0T8bnr',
  allowSignup: false,  // logins are created by Younes in Supabase; set true only if custom email (SMTP) is set up
};
