# Environment Variables Checklist — Netlify Deployment

This project requires the following environment variables to run correctly on Netlify. Public values are pre-wired in `netlify.toml`. Secret values **must** be added manually in the Netlify dashboard.

> **Where to add secrets in Netlify:**
> Site → **Site configuration** → **Environment variables** → **Add a variable**
> Set scope to **All scopes** (Builds + Functions + Runtime) so SSR can read them.

---

## ✅ Pre-wired in `netlify.toml` (no action needed)

These are publishable keys safe to commit. Already set for you.

| Variable | Purpose | Where used |
|---|---|---|
| `TARGET` | Switches Vite build to Netlify adapter | Build |
| `NODE_VERSION` | Locks Node to v20 | Build |
| `VITE_SUPABASE_URL` | Lovable Cloud (Supabase) project URL | Browser |
| `VITE_SUPABASE_PROJECT_ID` | Project identifier | Browser |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Anon/publishable API key | Browser |
| `SUPABASE_URL` | SSR fallback for Supabase URL | Server |
| `SUPABASE_PUBLISHABLE_KEY` | SSR fallback for publishable key | Server |

---

## 🔐 Required secrets (you must add these in Netlify)

| Variable | Required? | Purpose | Where to find it |
|---|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | **Yes** | Admin DB access used by server functions / webhooks. Bypasses RLS. | Lovable → **Cloud** → **Backend** → API keys → `service_role` |
| `LOVABLE_API_KEY` | **Yes if using AI features** | Auth for Lovable AI Gateway (chat, summarization, etc.) | Lovable → **Cloud** → **AI** → API key |

---

## 🧩 Optional secrets (only if used by your features)

Add these only if the corresponding feature is enabled.

| Variable | Used for |
|---|---|
| `WEBHOOK_SECRET` | HMAC verification for `/api/public/webhook*` routes |
| `RESEND_API_KEY` | Transactional email |
| `STRIPE_SECRET_KEY` | Stripe payments |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signature verification |
| `OPENAI_API_KEY` | Direct OpenAI calls (only if NOT using Lovable AI Gateway) |

---

## 🚀 Step-by-step: deploying to Netlify

1. **Connect repo** → Netlify → *Add new site* → *Import from GitHub* → select repo.
2. **Build settings** are auto-detected from `netlify.toml`. Do not override them.
3. **Add the secrets** from the *Required secrets* table above (Site configuration → Environment variables).
4. Click **Deploy site**.
5. After deploy, verify:
   - Home page loads
   - `/auth` login works
   - `/admin` student registrations load (proves `SUPABASE_SERVICE_ROLE_KEY` is wired)

---

## 🛠 Troubleshooting

| Symptom | Likely cause |
|---|---|
| 404 on every route | `TARGET=netlify` env not applied → site built in Cloudflare mode. Trigger a clean redeploy. |
| `supabaseAdmin` 500s | `SUPABASE_SERVICE_ROLE_KEY` missing or scoped to "Builds" only — set scope to **All scopes**. |
| AI features return 401 | `LOVABLE_API_KEY` missing. |
| Browser shows `undefined` Supabase URL | `VITE_*` vars overridden in Netlify UI with empty values — remove the override. |

---

## 🔁 Rotating a key

If you need to rotate a Supabase key, do it in the Lovable Cloud dashboard, then update the same name in Netlify → Environment variables → trigger redeploy.
