# iBima Products — Website

Product website for the whole iBima family. Kept separate from `../ibima-assist-website`
(which is also packaged as the iBima Assist Android app) — nothing here touches it.

Content structure follows the reference www.jbnsurveyors.com: one page per product, each with
overview, scope, capabilities, step-by-step workflow, documents typically required and highlights.

```bash
npm install
npm run dev       # http://localhost:5180
npm run build     # -> dist/
npm run preview
```

Stack: Vite + React 19 + Tailwind CSS v4 + React Router v7 + Lucide (same as the other iBima frontends).

## Pages

| Route | Page |
|---|---|
| `/` | Home — what iBima is, product family, which product does what, SaaS vs Service Provider, why iBima, audiences, FAQs |
| `/products` | All products + comparison table |
| `/products/:slug` | One page per product (template in `src/pages/ProductDetailPage.jsx`) |
| `/technology` | Four connected capabilities, objective ticker, interactive claim-workflow viewer (auto-play, full screen), tech stack |
| `/how-it-works` | Platform layers, claim lifecycle, deployment modes, onboarding steps |
| `/about` | Story, mission, vision, the name, values |
| `/faqs` | Searchable FAQs |
| `/contact` | Office, phones, hours, demo form (opens the visitor's email app — no backend) |

## Products — `src/data/products.js`

| Product | Built from |
|---|---|
| iBima Motor | `cliamAppAsForServiceProvider` — claim workshop / surveyor / weblink capture |
| iBima Pre-Inspection | `preinspectionAgentAppAsForServiceProvider` |
| iBima AI Assess | `backendAsForServiceProvider/ai-training-backend` |
| iBima Claim Desk | `callCenterAsForServiceProvider` (CMS) |
| iBima Control | `adminAsForServiceProvider` |
| iBima Cloud | `superAdminAsForServiceProvider` (SaaS / Service Provider modes) |
| iBima Non-Motor | Roadmap — shown as "Coming soon" |

To add a product, add one object to `PRODUCTS` — the menu, footer, product grid, comparison table
and its detail page all pick it up automatically.

## Before going live

- `src/data/site.js` — CIN / GSTIN are placeholders (`TODO`); confirm phones, email and portal URLs.
- Highlight numbers on product pages (e.g. "Same day", "Minutes") are positioning claims — confirm
  them with the business before launch.
- `public/_redirects` gives SPA deep-link fallback on Netlify / Cloudflare Pages.
