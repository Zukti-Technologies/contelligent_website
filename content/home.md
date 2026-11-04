---
# ─────────────────────────────────────────────────────────────
# HOME PAGE (/)
# Source: contelligent-website 1.html (Nov 2026).
# Sections in order: hero + product tour player, customer logos, what we do (journey),
# services in detail (tabs; the content comes from each service page's `detail`),
# our product, who we serve, vision, trust.
# ─────────────────────────────────────────────────────────────
seoTitle: "Contelligent | Caliper and financial services for growing businesses"
seoDescription: "Contelligent brings together Caliper, our financial intelligence platform for your accounting data, and the people who make it count: data associates, planners and advisors."

hero:
  titleAccent: "Stop reporting the past."      # first line, in the green gradient
  title: "Start shaping the future."
  lede: "Contelligent brings together Caliper, our financial intelligence platform for your accounting data, and the people who make it count: data associates, planners and advisors."
  primaryCta: { label: "Book a Demo", href: "/contact/" }
  secondaryCta: { label: "Caliper Product Tour", href: "/products/caliper/#caliper-tour" }
  reassure: "Works with your existing accounting software"
  reassureAccent: "Reads. Never writes."

# Auto-playing product tour in the hero. Each slide shows for 4.5 seconds.
# `chapter` groups slides; the buttons above the screenshot jump to the first slide of each chapter.
# Screenshots: /public/images/caliper/tour/ (demo company data).
player:
  title: "Meet Caliper: your financial command centre"
  subtitle: "Demo company data, synced from the books"
  badge: "Demo company"
  chapters: ["Liquidity", "Revenue", "Expenses", "Profitability", "Ratios"]
  slides:
    - { chapter: "Liquidity", title: "Liquidity Tracker", sub: "Cash, receivables, payables, collections vs payments", image: "/images/caliper/tour/liquidity-tracker.webp" }
    - { chapter: "Revenue", title: "Revenue Analysis", sub: "Revenue, receivables and customer mix", image: "/images/caliper/tour/revenue-analysis.webp" }
    - { chapter: "Revenue", title: "Revenue Breakdown", sub: "Contribution by customer", image: "/images/caliper/tour/revenue-breakdown.webp" }
    - { chapter: "Revenue", title: "Customer-wise Receivables", sub: "Ageing at a glance", image: "/images/caliper/tour/customer-receivables.webp" }
    - { chapter: "Revenue", title: "MRR and Month-on-Month Revenue", sub: "Recurring revenue trend", image: "/images/caliper/tour/mrr-month-on-month.webp" }
    - { chapter: "Revenue", title: "MRR – ARR", sub: "Drill-down by revenue stream", image: "/images/caliper/tour/mrr-arr.webp" }
    - { chapter: "Revenue", title: "Month on Month Revenue", sub: "Detailed breakdown", image: "/images/caliper/tour/month-on-month-revenue.webp" }
    - { chapter: "Expenses", title: "Expense Analysis", sub: "Expense and payable breakup", image: "/images/caliper/tour/expense-analysis.webp" }
    - { chapter: "Expenses", title: "Expenses and Payments", sub: "Month-on-month comparison", image: "/images/caliper/tour/expenses-and-payments.webp" }
    - { chapter: "Expenses", title: "Expense Breakdown", sub: "By cost centre and month", image: "/images/caliper/tour/expense-breakdown.webp" }
    - { chapter: "Expenses", title: "Vendor-wise Payables", sub: "Ageing at a glance", image: "/images/caliper/tour/vendor-payables.webp" }
    - { chapter: "Profitability", title: "Profitability Analysis", sub: "Summary and G/P analysis", image: "/images/caliper/tour/profitability-analysis.webp" }
    - { chapter: "Profitability", title: "Profit & Loss", sub: "From sales to net profit", image: "/images/caliper/tour/profit-and-loss-flow.webp" }
    - { chapter: "Profitability", title: "Profit & Loss", sub: "Month-by-month table", image: "/images/caliper/tour/profit-and-loss-table.webp" }
    - { chapter: "Ratios", title: "Ratio Analysis", sub: "Liquidity, efficiency, working capital", image: "/images/caliper/tour/ratio-liquidity-efficiency.webp" }
    - { chapter: "Ratios", title: "Ratio Analysis", sub: "Solvency, leverage and returns", image: "/images/caliper/tour/ratio-solvency-returns.webp" }
    - { chapter: "Ratios", title: "Current Ratio", sub: "Trend and benchmarks", image: "/images/caliper/tour/current-ratio.webp" }

# Logos come from each company's own website or official page. Files in /public/images/customers/.
# height: logo height in pixels. background: tile colour for logos made for a dark background.
customers:
  title: "Already running on real books"
  logos:
    - { name: "Zeliot", logo: "/images/customers/zeliot.svg", height: 30 }
    - { name: "iTriangle", logo: "/images/customers/itriangle.png", height: 42 }
    - { name: "Jewel Sizzle", logo: "/images/customers/jewel-sizzle.png", height: 52, background: "#000000" }
    - { name: "The Golden Circle Brewing Co.", logo: "/images/customers/golden-circle-brewing.png", height: 62, background: "#0e3b36" }

whatWeDo:
  eyebrow: "What we do"
  title: "One partner, from data to decisions"
  intro: "Every offering fits one journey. Start with the platform, add the services you need, and shape it all around how your business works."
  # Three columns. `product: true` draws the green card with the Caliper logo.
  journey:
    - { step: "Get the data right", title: "Financial Data Associate", body: "Works alongside your team to keep your books clean and analysis-ready.", cta: "Learn more", href: "/services/financial-data-associate/" }
    - { step: "Know what it means", title: "platform", product: true, body: "Connects to your accounting software and turns your books into always-current dashboards.", cta: "Explore Caliper", href: "/products/caliper/" }
    - { step: "Know what to do next", title: "Advisory", body: "Experts who interpret the numbers and recommend actions.", cta: "Learn more", href: "/services/advisory/" }
  bands:
    - { title: "Business Plan as a Service", body: "A plan, budget and projections built on your real numbers.", cta: "See business planning", href: "/services/business-plan/" }
    - { title: "Customisation services", body: "Dashboards, reports and data connections tailored to your business.", cta: "See customisation", href: "/services/customisation/" }

servicesDetail:
  eyebrow: "Services in detail"
  title: "See exactly what each service includes"
  intro: "Choose a service, then open any area to drill down."
  # Tabs, in order. Each shows the "In detail" list from that service's content file.
  services:
    - { label: "Financial Data Associate", file: "services/financial-data-associate", href: "/services/financial-data-associate/" }
    - { label: "Business Plan as a Service", file: "services/business-plan", href: "/services/business-plan/" }
    - { label: "Advisory", file: "services/advisory", href: "/services/advisory/" }
    - { label: "Customisation services", file: "services/customisation", href: "/services/customisation/" }
  fullPageLabel: "Open the full {service} page"

product:
  eyebrow: "Our product"
  title: "Your financial command centre."
  body: "Built on your existing accounting data. Liquidity, revenue, expenses, profitability and ratios, updated with every sync."
  ticks:
    - "No new accounting system"
    - "No migration"
    - "No disruption"
  cta: { label: "See how Caliper works", href: "/products/caliper/" }
  image: "/images/caliper/tour/liquidity-tracker.webp"
  imageAlt: "Caliper Liquidity Tracker"

whoWeServe:
  eyebrow: "Who we serve"
  title: "Built for the people who run on numbers"
  items:
    - { title: "Chartered Accountants", tagline: "From compliance to strategic advisory.", body: "Help clients understand performance and risks. We handle the data; you lead the advice." }
    - { title: "Finance Teams", tagline: "Less reporting. More analysis.", body: "Reduce manual reporting effort and focus on insights that improve performance." }
    - { title: "Business Owners", tagline: "Run your business with financial clarity.", body: "See revenue, profitability and cash without waiting for monthly reports." }
    - { title: "Investors & Lenders", tagline: "Visibility that builds confidence.", body: "Analyse your portfolio companies under one umbrella." }

vision:
  eyebrow: "Our vision"
  quote: "Make intelligent decision-making accessible to every business."
  sub: "From data to decisions: Reliable Data, Intelligent Insights, Better Decisions."
  cta: { label: "Our vision and mission", href: "/about/#about-vision" }

trust:
  eyebrow: "Trust"
  title: "Your data, handled with care"
  items:
    - { title: "Read-only connector", body: "Caliper only reads your accounting data. It never writes entries back to your books." }
    - { title: "Controlled access", body: "Access is granted user by user and role by role." }
    - { title: "People access", body: "Team members who work with your data, including your FDA and advisor, are bound by confidentiality." }
    - { title: "Security transparency", body: "Encryption, hosting, retention and backup details are available for your security review." }
---
