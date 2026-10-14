# YBM Team Portal

Sign-in site where each YBM team leader sees only their own team's sales, earnings and fail rate.

- `index.html`: the site (static; hosted on Netlify, which deploys every push to `main`)
- `config.js`: Supabase project URL and publishable key (public by design; database access rules protect the data)

Numbers are uploaded to Supabase every morning by a separate job; this repo holds only the website.
