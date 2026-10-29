# contelligent.in website

Company site for Contelligent Technologies Pvt. Ltd., with Caliper under `/products/caliper`.

Next.js 15 (App Router, static export) + Tailwind CSS 3. The build outputs plain HTML/CSS/JS in `out/`, so no Node server runs in production.

## Run locally

Needs Node.js 20 or 22.

```bash
npm install
npm run dev        # http://localhost:3000, reloads on every save (including content/*.md)
```

Production build and preview:

```bash
npm run build      # writes the static site to out/
npm start          # serves out/ at http://localhost:3000
```

## Edit text (no code changes)

All copy lives in `content/` as markdown. Each file has a front matter block (between the `---` lines) for structured text, and an optional markdown body below it. Lines starting with `#` inside front matter are comments.

| Page | File |
|---|---|
| Company details, emails, address, CIN, Calendly link, portal link, logo path | `content/site.md` |
| Header menu, header buttons, footer links | `content/navigation.md` |
| Home `/` | `content/home.md` |
| Products `/products` | `content/products.md` |
| Caliper `/products/caliper` (hero, features, how it works, benefits, integrations, CTA) | `content/caliper/caliper.md` |
| Caliper FAQs | `content/caliper/faqs.md` |
| Book demo `/products/caliper/demo` | `content/caliper/demo.md` |
| Blog list `/products/caliper/blog` | `content/caliper/blog/_index.md` |
| Blog posts | `content/caliper/blog/<slug>.md` (copy `_example-post.md`) |
| Services `/services`, `/services/business-plan`, `/services/consulting` | `content/services/*.md` |
| Customers, Partners, Contact | `content/customers.md`, `content/partners.md`, `content/contact.md` |

Workflow: edit the `.md` file → `npm run build` → upload `out/`.

Rules that keep the build green:
- Keep the keys (the word before `:`); change only the values.
- Wrap values containing `:` or `#` in double quotes.
- Indentation is two spaces. YAML breaks on tabs.

### Turning on a "coming soon" page

Services, Customers and Partners show "Content coming soon." whenever `comingSoon: true` is set in their file. Each file has commented example entries showing the format.

### Blog posts

1. Copy `content/caliper/blog/_example-post.md` to e.g. `reading-your-cash-position.md`. The file name becomes the URL.
2. Set `title`, `date` (YYYY-MM-DD), `summary`, and `draft: false`.
3. Write the post in markdown below the front matter.

Files starting with `_` and posts with `draft: true` are never published.

## Images and logo

Put files in `public/images/`. Paths in content files start with `/images/...`.

| Asset | Path | Status |
|---|---|---|
| Contelligent logo, header | `public/images/contelligent-logo.svg` | **Pending.** A text wordmark shows until this file exists. |
| Contelligent logo, dark footer | `public/images/contelligent-logo-light.svg` | **Pending.** Same fallback. |
| Caliper hero screenshot | `public/images/caliper/hero-dashboard.png` | **Pending.** A labelled placeholder shows until added. |
| Caliper "How it works" screenshot | `public/images/caliper/how-it-works.png` | **Pending.** |
| Caliper logos | `public/images/caliper-*.svg` | Copied from `/images`. |
| Favicon | `public/favicon.svg` | Temporary "C" monogram. Replace with the company mark. |

Missing images never break the build: components check whether the file exists and fall back to a placeholder.

## Brand and colours

The site has two palettes. Colour tokens (`ink`, `mint`, `paper`) are CSS variables set in `app/globals.css`, so the same class names switch palette by section:

- **Contelligent pages** (everything except Caliper): neutral black, grey and white. Set in `:root`.
- **Caliper pages** (`/products/caliper`, its blog and Book a demo): Caliper teal and mint, from the Caliper logo. Set in `.theme-caliper`, applied in `app/products/caliper/layout.tsx`.

The header and footer belong to Contelligent, so they stay neutral on every page.

| Token | Role | Contelligent | Caliper |
|---|---|---|---|
| `ink-900` | Hero and footer background | `#0A0A0A` | `#011F25` |
| `ink-800` | Headings, dark buttons | `#171717` | `#012E36` |
| `ink-600` | Body text | `#525252` | `#1D5560` |
| `ink-100` | Borders | `#E5E5E5` | `#DCE6E7` |
| `mint-500` | Primary button | `#E5E5E5` | `#2ECEAE` |
| `mint-700` | Eyebrows, links, icons on white | `#404040` | `#0E8471` |
| `paper` | Alternate section background | `#F5F5F5` | `#F7F6F2` |

To change a colour, edit its value in `app/globals.css` and rebuild.

Logos: the Contelligent wordmark and favicons come from `brand-assets/` (see the README there).

Fonts: Plus Jakarta Sans (headings) and Inter (body), bundled via `@fontsource`, so the build needs no Google Fonts call.

## Project structure

```
app/                     routes (one folder per URL)
  page.tsx               /
  products/caliper/      /products/caliper (+ layout with sticky section bar)
    blog/  demo/
  services/ business-plan/ consulting/
  customers/ partners/ contact/
components/              reusable UI
  Header, HeaderNav, Footer, Logo, SubNav
  PageHero, SectionHeading, FeatureCard, CTABanner, FAQList, LogoGrid
  ImageOrPlaceholder, ComingSoon, Prose, SmartLink
  CalendlyEmbed, ContactForm, ServicePage
content/                 all editable copy (markdown)
lib/content.ts           reads content/*.md at build time
lib/icons.tsx            icon names usable as `icon:` in content files
public/                  images, favicon
```

## Deploy

`npm run build`, then upload the contents of `out/` to any static host:

- **OCI Object Storage** (bucket with public access, or behind OCI CDN/Nginx). Set `index.html` as the index document; `trailingSlash: true` in `next.config.mjs` makes every route a folder with its own `index.html`.
- **Nginx**: `root /var/www/contelligent/out; try_files $uri $uri/ $uri/index.html =404; error_page 404 /404.html;`
- GitHub Pages or Netlify also work as-is.

A GitHub Actions job can run `npm ci && npm run build` and sync `out/` to the bucket on push to `main`.

## How the contact form works

The site has no server, so the form validates the fields and opens the visitor's email app with a pre-filled message to `support@contelligent.in` (from `content/site.md`). To move to a form service later, replace `handleSubmit` in `components/ContactForm.tsx` with a `fetch()` POST to that service.

## Redirects from the old site

The old site had `/pricing`. Pricing is removed for now. If old links to `/pricing` matter, add a host-level redirect from `/pricing` to `/products/caliper/`.

## Open items

- [ ] Contelligent logo SVG (dark and light versions)
- [ ] Caliper product screenshots (2)
- [ ] Real copy for Business Plan as a Service, Consulting, Customers, Partners, services intro (sample entries are marked DUMMY)
- [ ] Contelligent company LinkedIn URL (`content/site.md` → `linkedin`)
- [ ] Tagline "Measure it, master it." after team sign-off (`content/caliper/caliper.md` → `hero.tagline`)
- [ ] Review lines marked `REVIEW` in `content/caliper/caliper.md` and `content/caliper/faqs.md`
- [ ] Pricing section, once plans are final
