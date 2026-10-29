---
# ─────────────────────────────────────────────────────────────
# CALIPER PRODUCT PAGE (/products/caliper)
# Source: docs/Caliper by Contelligent.pdf (pitch deck, Oct 2026). Page numbers below refer to that deck.
# Sections appear in this order:
#   hero, trustedBy, problem, solution, features, screens, benefits, audiences,
#   security, integrations, getStarted, FAQs (faqs.md), cta
# Leave a section's `title` as "" to hide it.
# ─────────────────────────────────────────────────────────────
seoTitle: "Caliper | Your financial command centre, built on Tally"
seoDescription: "Caliper reads your Tally data and turns it into liquidity, revenue, expense, profitability and ratio analysis. Read-only. No migration. No change to your books."

# Sticky section bar under the header. `href` starting with # scrolls on this page.
subnav:
  - { label: "Features", href: "#features" }
  - { label: "Benefits", href: "#benefits" }
  - { label: "Security", href: "#security" }
  - { label: "Integrations", href: "#integrations" }
  - { label: "FAQs", href: "#faqs" }
  - { label: "Blog", href: "/products/caliper/blog/" }

# Buttons on the right of the sticky section bar. style: primary | dark | outline | link
subnavActions:
  - { label: "Book a demo", href: "/products/caliper/demo/", style: "link" }
  - { label: "Sign Up", href: "https://portal.thecaliper.app/register", external: true, style: "primary" }

# Deck page 1
hero:
  eyebrow: "Caliper by Contelligent"
  title: "Stop reporting the past. Start shaping the future."
  subtitle: "Your financial command centre, built on your existing Tally data."
  tagline: ""          # "Measure it, master it." is pending team sign-off. Paste it here once approved.
  chips:
    - "Always-current liquidity"
    - "Revenue & expense"
    - "Ratio & profitability"
  primaryCta: { label: "Book a demo", href: "/products/caliper/demo/" }
  secondaryCta: { label: "Sign Up", href: "https://portal.thecaliper.app/register", external: true }
  image: "/images/caliper/screens/liquidity-tracker.webp"   # must match a screens item to open in the lightbox
  imageAlt: "Caliper Liquidity Tracker showing usable balance, bank balance, collections, payments and expected receivables and payables"

# Deck page 10. Logos come from each company's own website or official page (27 Oct 2026).
# Files live in /public/images/customers/. background: tile colour for logos designed for a dark background.
# Leave the list empty to hide the row.
trustedBy:
  title: "Already running on real books."
  logos:
    - { name: "Zeliot", logo: "/images/customers/zeliot.svg" }                                                   # from zeliot.in
    - { name: "iTriangle", logo: "/images/customers/itriangle.png" }                                             # from itriangle.net
    - { name: "Jewel Sizzle", logo: "/images/customers/jewel-sizzle.png", background: "#000000" }               # from jewelsizzle.in
    - { name: "The Golden Circle Brewing Co.", logo: "/images/customers/golden-circle-brewing.png", background: "#0e3b36" }   # from facebook.com/thegoldencirclebrewery


# Deck page 2
problem:
  eyebrow: "The problem"
  title: "Your business moves daily. Visibility of your numbers lags behind."
  body: "By the time reports arrive, opportunities may be missed and small problems may have become bigger."
  chain:
    - "Delayed financial visibility"
    - "Delayed decision-making"

# Deck page 3
solution:
  eyebrow: "The solution"
  title: "Connect your Tally."
  body: "Nothing changes in your day. No change in your accounting process. Upgrade your financial visibility."
  flow:
    - { title: "Tally", caption: "Your books, unchanged", icon: "database" }
    - { title: "Caliper Tally Connector", caption: "Reads. Never writes.", icon: "plug", highlight: true }
    - { title: "Caliper", caption: "Your command centre", icon: "eye" }
  promises:
    - "No new system"
    - "No migration"
    - "No disruption"

# Deck page 4. badge: shows a label on the card ("Coming soon", "Beta").
features:
  eyebrow: "The product"
  title: "From financial data to decisions that matter."
  intro: ""
  items:
    - title: "Liquidity Tracker"
      icon: "droplets"
      tagline: "Know where your cash is."
      body: "Track cash positions, receivables, payables and working capital in one place."
    - title: "Revenue Analysis"
      icon: "trending-up"
      tagline: "Know what drives your revenue."
      body: "Analyse revenue by customers, products, business units and trends."
    - title: "Expense Analysis"
      icon: "receipt"
      tagline: "Know where your money goes."
      body: "Identify cost trends, expense concentration and opportunities to improve efficiency."
    - title: "Profitability Analysis"
      icon: "pie-chart"
      tagline: "Revenue is important. Profitability is critical."
      body: "Understand margins, profit drivers and the factors impacting your bottom line."
    - title: "Ratio Analysis"
      icon: "gauge"
      tagline: "Measure the financial health of your business."
      body: "Monitor liquidity, profitability, efficiency and leverage through meaningful financial ratios."
    - title: "Planned vs Actuals"
      icon: "target"
      badge: "Coming soon"
      tagline: "Plan better. Track performance. Act faster."
      body: "Compare budgets with actual performance and identify variances before they impact results."
    - title: "Build Your Own Report"
      icon: "report"
      badge: "Beta"
      tagline: "Your reports. Your way."
      body: "Create customised financial reports and reuse them without rebuilding every month."

# Deck page 5. HD screenshots captured from the Caliper UAT demo company (29 Oct 2026), files in /public/images/caliper/screens/.
#   image: full-size HD file opened in the full-screen lightbox. thumb: lighter 1400px version shown on the page.
#   An odd last item spans the full width.
screens:
  eyebrow: "What you see"
  title: "Your books. Your numbers, always current."
  note: "Screens shown with a demo company's data. Click any screen to view it full screen."
  items:
    - { title: "Liquidity Tracker", image: "/images/caliper/screens/liquidity-tracker.webp", thumb: "/images/caliper/screens/liquidity-tracker-1400.webp", alt: "Liquidity Tracker with usable and bank balances, monthly collections and payments, and expected receivables and payables" }
    - { title: "Revenue Analysis", image: "/images/caliper/screens/revenue-analysis.webp", thumb: "/images/caliper/screens/revenue-analysis-1400.webp", alt: "Revenue Analysis with revenue, receivables and collections, and customer-wise revenue and receivable breakdowns" }
    - { title: "Expense Analysis", image: "/images/caliper/screens/expense-analysis.webp", thumb: "/images/caliper/screens/expense-analysis-1400.webp", alt: "Expense Analysis with expense, vendor payables and payments, expense breakup and vendor-wise payables" }
    - { title: "Profitability Analysis", image: "/images/caliper/screens/profitability-analysis.webp", thumb: "/images/caliper/screens/profitability-analysis-1400.webp", alt: "Profitability Analysis with revenue, expense and margin summary and a month-wise gross profit chart" }
    - { title: "Profit & Loss", image: "/images/caliper/screens/profit-and-loss.webp", thumb: "/images/caliper/screens/profit-and-loss-1400.webp", alt: "Interactive Profit and Loss flow from sales through gross profit, EBITDA and EBIT to net profit" }

# Deck page 6. Comparison table.
benefits:
  eyebrow: "Why Caliper"
  title: "Tally records the business. Caliper explains it."
  intro: "How Caliper compares with the way most teams report today."
  columns: { label: "", before: "Tally reports + Excel", after: "Caliper" }
  rows:
    - { label: "Time to insight", before: "Days of exports and rebuilding after month end", after: "Updated with every Tally sync" }
    - { label: "Drill-downs", before: "Manual pivots for every new question", after: "Customer, product and unit views built in" }
    - { label: "Recurring reports", before: "Rebuilt from scratch every month", after: "Build once, reuse every month" }
    - { label: "Multiple companies", before: "Separate files, separate logins", after: "One view across companies" }
    - { label: "Risk to your books", before: "Copy-paste errors in exported data", after: "Read-only. Nothing is ever written back" }

# Deck page 7. `highlight: true` makes one card dark and raised (Finance Teams, as in the deck).
#   kicker: small label shown above each title.
audiences:
  eyebrow: "Who it's for"
  title: "Who Caliper is built for."
  items:
    - title: "Chartered Accountants"
      kicker: "Built for"
      icon: "audit"
      tagline: "From compliance to strategic advisory."
      body: "Help clients understand performance, identify risks and make informed decisions. Upgrade your offering."
    - title: "Finance Teams"
      kicker: "Built for"
      highlight: true
      icon: "report"
      tagline: "Less reporting. More analysis."
      body: "Reduce manual reporting effort and focus on insights that improve business performance."
    - title: "Business Owners"
      kicker: "Built for"
      icon: "building"
      tagline: "Run your business with financial clarity."
      body: "Understand revenue, profitability, cash flow and financial health without waiting for monthly reports."
    - title: "Investors & Lenders"
      kicker: "Built for"
      icon: "trending-up"
      tagline: "Financial visibility of your portfolio companies that builds confidence."
      body: "Analyse your investee companies under one umbrella."

# Deck page 8
security:
  eyebrow: "Data security"
  title: "Financial visibility. With data safeguards in focus."
  intro: "Built to analyse financial information without changing your accounting books."
  items:
    - title: "Read-only connector"
      icon: "shield"
      body: "The Tally connector only reads your data. It never writes entries back to your books."
    - title: "Controlled access"
      icon: "users"
      body: "Access is granted user by user and role by role, so each person sees only what they need."
    - title: "Security transparency"
      icon: "lock"
      body: "Full details on encryption, hosting, retention and backups are available for your security review."
  cta: { label: "Request security details", href: "mailto:support@contelligent.in?subject=Caliper%20security%20details" }

# Deck page 9
integrations:
  eyebrow: "Integrations"
  title: "More ways to connect. One financial view."
  intro: "Tally is supported today. Additional data sources are planned for future releases."
  available:
    label: "Available today"
    name: "Tally"
    points:
      - "Read-only data connection"
      - "Connected to your existing books"
  plannedLabel: "Planned integrations"
  planned:
    - { name: "Zoho", type: "Accounting" }
    - { name: "QuickBooks", type: "Accounting" }
    - { name: "Sage", type: "Accounting" }
    - { name: "Excel", type: "Template upload" }
  plannedStatus: "Planned"
  disclaimer: "Roadmap only. Integration scope, sequence and release dates are subject to development priorities."

# Deck page 11
getStarted:
  eyebrow: "Getting started"
  title: "Three steps to your numbers in Caliper."
  steps:
    - { title: "Book a demo", body: "Pick a slot, or write to us at support@contelligent.in." }
    - { title: "Connect your Tally", body: "The Caliper Tally Connector reads your books. Nothing in Tally changes." }
    - { title: "See your numbers in Caliper", body: "Liquidity, revenue, expense, ratios and profitability, kept current with every sync." }

faqSection:
  eyebrow: "FAQs"
  title: "Questions? Answered."
  # Questions and answers live in content/caliper/faqs.md

cta:
  title: "Your financial command centre."
  body: "Book a demo and see your own numbers in Caliper."
  primary: { label: "Book a demo", href: "/products/caliper/demo/" }
  secondary: { label: "Write to support@contelligent.in", href: "mailto:support@contelligent.in" }
---
