# contelligent.in website

Company site for Contelligent Technologies Pvt. Ltd., with Caliper under `/products/caliper`.

Next.js 15 (App Router, static export). Styles are plain CSS in `app/globals.css`, ported from the approved design (`contelligent-website 1.html`, Nov 2026). The build writes plain HTML/CSS/JS to `out/`, so no Node server runs in production. Vercel builds and deploys on every push to `main`.

## Run locally

Needs Node.js 20 or 22.

```bash
npm install
npm run dev        # http://localhost:3000, reloads on every save (including content/*.md)
npm run build      # writes the static site to out/
```

## Pages

| URL | Content file |
|---|---|
| `/` Home | `content/home.md` |
| `/products/caliper/` Caliper | `content/caliper/caliper.md` |
| `/services/financial-data-associate/` | `content/services/financial-data-associate.md` |
| `/services/business-plan/` | `content/services/business-plan.md` |
| `/services/advisory/` | `content/services/advisory.md` |
| `/services/customisation/` | `content/services/customisation.md` |
| `/about/` | `content/about.md` |
| `/contact/` | `content/contact.md` |
| Header menus, mobile menu, footer links | `content/navigation.md` |
| Company details, logos, closing band | `content/site.md` |

The "In detail" list on each service page also feeds the "Services in detail" tabs on the home page, so edit it once.

## Edit text (no code changes)

All copy lives in `content/` as markdown front matter (between the `---` lines). Lines starting with `#` are comments.

- Keep the keys (the word before `:`); change only the values.
- Wrap values containing `:` or `#` in double quotes.
- Indentation is two spaces. YAML breaks on tabs.

Edit, commit, push. Vercel rebuilds the site.

## Images

Put files in `public/images/`. Paths in content files start with `/images/...`.

| Asset | Path |
|---|---|
| Contelligent wordmark (black, and white for dark mode) | `public/images/contelligent-logo.svg`, `contelligent-logo-white.svg` |
| Caliper logo (colour, and white for dark backgrounds) | `public/images/caliper-logo.svg`, `caliper-light.svg` |
| Product tour screenshots (demo company) | `public/images/caliper/tour/*.webp` |
| Customer logos | `public/images/customers/` |
| Favicons | `public/favicon.*`, `apple-touch-icon.png`, `icon-*.png` |

The full logo kit is in `brand-assets/` (see the README there).

## Colours and fonts

Colours are CSS variables at the top of `app/globals.css`: green accent `#2E7058`, ink `#12161A`, text `#343E48`, muted `#56616B`, lines `#E3E8EB`, alternate background `#F7F9F8`. A dark theme switches on automatically for visitors whose device is in dark mode. Font: Rubik, bundled via `@fontsource-variable/rubik`.

## Project structure

```
app/                     routes (one folder per URL)
components/
  Header, HeaderClient   sticky header, dropdowns, mobile drawer
  Footer, CtaBand        footer and closing band
  Blocks                 hero, glance strip, headings, cards, steps, ticks
  Accordion              drill-down lists on service pages
  ServicePage            shared layout for the four service pages
  TourPlayer             auto-playing product tour on the home page
  TourTabs, ServiceTabs  tabbed screenshot viewer, home services tabs
  ContactForm            demo request form (opens the visitor's email app)
content/                 all editable copy
lib/content.ts           reads content/*.md at build time
public/                  images, favicons
```

## Contact form

The site has no server, so the form opens the visitor's email app with the request filled in, addressed to `support@contelligent.in` (from `content/site.md`). To use a form service later, replace `onSubmit` in `components/ContactForm.tsx` with a `fetch()` POST.

## Open items

- [ ] Phone number for the Contact page (`content/site.md` → `phone`; hidden while empty)
- [ ] Contelligent company LinkedIn URL
