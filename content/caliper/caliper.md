---
# ─────────────────────────────────────────────────────────────
# CALIPER PRODUCT PAGE (/products/caliper)
# Source: contelligent-website 1.html (Nov 2026).
# Sections in order: hero, how it works, product tour (#caliper-tour), why Caliper,
# integrations (#caliper-integrations).
# ─────────────────────────────────────────────────────────────
seoTitle: "Caliper | Your financial command centre on your accounting data"
seoDescription: "Caliper reads your accounting data and turns it into liquidity, revenue, expense, profitability and ratio analysis. Read-only. No migration. No change to your books."

hero:
  crumb: "Product"
  title: "Your financial command centre"     # shown under the Caliper logo
  lede: "Built on your existing accounting data. Stop reporting the past. Start shaping the future."
  primaryCta: { label: "Book a Demo", href: "/contact/" }
  secondaryCta: { label: "Product Tour", href: "#caliper-tour" }
  reassure: ["No new accounting system", "No migration", "No disruption"]   # the last one is shown in green
  glance:
    - { label: "Connects to", value: "Your accounting software (read-only)" }
    - { label: "Updated", value: "With every sync" }
    - { label: "Modules", value: "Liquidity, revenue, expense, profitability, ratios" }
    - { label: "Your books", value: "Never changed" }

howItWorks:
  eyebrow: "How it works"
  title: "Connect your books. Unlock possibilities."
  intro: "No change to your accounting process. No new system for your team."
  steps:
    - { title: "Your accounting software", body: "Your books, unchanged." }
    - { title: "Caliper Connector", body: "Reads. Never writes." }
    - { title: "Caliper", body: "Your command centre." }

tour:
  eyebrow: "Product tour"
  title: "From financial data to decisions that matter"
  intro: "Your books. Your numbers, always current."
  tabs:
    - { title: "Liquidity Tracker", tagline: "Know where your cash is.", image: "/images/caliper/tour/liquidity-tracker.webp", alt: "Liquidity Tracker" }
    - { title: "Revenue Analysis", tagline: "Know what drives your revenue.", image: "/images/caliper/tour/revenue-analysis.webp", alt: "Revenue Analysis" }
    - { title: "Profitability Analysis", tagline: "Revenue is important. Profitability is critical.", image: "/images/caliper/tour/profit-and-loss-flow.webp", alt: "Profit and loss flow" }
    - { title: "Expense Analysis", tagline: "Know where your money goes.", image: "/images/caliper/tour/expense-analysis.webp", alt: "Expense Analysis" }
  badge: "Demo company"
  caption: "Last synced at 11:08 am. The numbers move with the books."
  # Module list under the tour. badge: "beta" (green) or "soon" (amber).
  modules:
    - { name: "Liquidity Tracker" }
    - { name: "Revenue Analysis" }
    - { name: "Expense Analysis" }
    - { name: "Profitability Analysis" }
    - { name: "Ratio Analysis" }
    - { name: "Build Your Own Report", badge: "beta", badgeLabel: "Beta" }
    - { name: "Planned vs Actuals", badge: "soon", badgeLabel: "Coming soon" }

compare:
  eyebrow: "Why Caliper"
  title: "Your books record the business. Caliper explains it."
  columns: { label: "Area", before: "Accounting reports + Excel", after: "Caliper" }
  rows:
    - { label: "Time to insight", before: "Days of exports and rebuilding after month end", after: "Updated with every sync" }
    - { label: "Drill-downs", before: "Manual pivots for every new question", after: "Customer, product and unit views built in" }
    - { label: "Recurring reports", before: "Rebuilt from scratch every month", after: "Build once, reuse every month" }
    - { label: "Multiple companies", before: "Separate files, separate logins", after: "One view across companies" }
    - { label: "Risk to your books", before: "Copy-paste errors in exported data", after: "Read-only. Nothing is ever written back" }

integrations:
  eyebrow: "Integrations"
  title: "More ways to connect. One financial view."
  intro: "Tally is supported today. Additional data sources are planned for future releases."
  available:
    label: "Available today"
    name: "Tally"
    points: ["Read-only data connection", "Connected to your existing books"]
  planned:
    - { name: "Zoho", type: "Accounting | Planned" }
    - { name: "QuickBooks", type: "Accounting | Planned" }
    - { name: "Sage", type: "Accounting | Planned" }
    - { name: "Excel", type: "Template upload | Planned" }
  disclaimer: "Roadmap only. Integration scope, sequence and release dates are subject to development priorities."
---
