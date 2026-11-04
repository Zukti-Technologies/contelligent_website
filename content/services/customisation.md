---
# ─────────────────────────────────────────────────────────────
# SERVICE PAGE (/services/customisation/)
# Source: contelligent-website 1.html (Nov 2026).
# Sections in order: hero, what (split or cards), how it works (steps), in detail (drill-down list).
# The "In detail" list also appears in the "Services in detail" tabs on the home page.
# In `detail.items`: `open: true` starts that row open; `columns` are the two boxes inside a row;
# `questions` shows a grid of questions; `body` is a paragraph; `note` is a grey line underneath.
# ─────────────────────────────────────────────────────────────
seoTitle: "Customisation services | Contelligent"
seoDescription: "We tailor Caliper dashboards, MIS reports and data connections to the way your business works."

hero:
  crumb: "Services"
  titleAccent: "Customisation services"      # first line, in the green gradient
  title: "Caliper, shaped around your business"
  lede: "Every business reports differently. We tailor dashboards, reports and data flows to the way you work."
  primaryCta: { label: "Discuss your requirements", href: "/contact/" }
  secondaryCta: { label: "See what’s included", href: "#cs-detail" }
  glance:
    - { label: "Covers", value: "Dashboards, MIS and reports" }
    - { label: "Mapped to", value: "Your chart of accounts and KPIs" }
    - { label: "Self-serve", value: "Build Your Own Report (beta)" }
    - { label: "Outcome", value: "Reporting that fits your business" }

what:
  eyebrow: "What we customise"
  title: "Your reports. Your way."
  cards:
    - { title: "Dashboards and MIS", body: "Management reports in the format your leadership and board already use." }
    - { title: "Business-specific views", body: "Analysis by your business units, products, regions and KPIs, mapped to your chart of accounts." }
    - { title: "Data connections", body: "Connections to the other data sources your business relies on, scoped with you." }
  note: "Prefer to do it yourself? Build Your Own Report (beta) in Caliper lets you create and reuse custom reports without rebuilding them every month."

howItWorks:
  eyebrow: "How it works"
  title: "Built around how you work"
  steps:
    - { title: "Understand", body: "Your reporting needs, KPIs and data sources." }
    - { title: "Design", body: "The dashboards, views and connections you need." }
    - { title: "Build", body: "Configure them in Caliper on your data." }
    - { title: "Refine", body: "Review with your team and adjust as you grow." }
  outcomeLead: "Outcome:"
  outcomeStrong: "Caliper shaped around your business."      # shown in green

detail:
  anchor: "cs-detail"
  eyebrow: "In detail"
  title: "What we can customise for you"
  intro: "Open any area to see what can be tailored, how the work runs and what we need from you."
  items:
    - title: "Dashboards and MIS"
      summary: "Your management reports, rebuilt in Caliper."
      open: true
      columns:
        - heading: "We can build"
          points:
            - "Your existing MIS or board report formats"
            - "Leadership dashboards with the KPIs you track"
            - "Monthly and quarterly packs that refresh with your data"
        - heading: "Benefits"
          points:
            - "No more rebuilding reports from exports"
            - "The same numbers for everyone, every time"
            - "Drill down from summary to detail"
    - title: "Business-specific views"
      summary: "See the business the way you run it."
      columns:
        - heading: "Analyse by"
          points:
            - "Business unit, product or service line"
            - "Region, branch or project"
            - "Cost centre and revenue stream"
        - heading: "How"
          points:
            - "Custom groupings beyond your standard ledger groups"
            - "Mapping rules agreed with your team"
            - "Consistent across every Caliper module"
    - title: "Custom metrics and KPIs"
      summary: "Measures specific to your industry."
      columns:
        - heading: "Examples"
          points:
            - "Recurring revenue (MRR and ARR) and churn"
            - "Contribution margin by customer or product"
            - "Unit economics and cost per unit"
            - "Industry-specific ratios and benchmarks"
        - heading: "Definitions"
          points:
            - "Agreed formulas, documented in one place"
            - "Built once and reused every month"
    - title: "Data connections"
      summary: "Bring in the other data your decisions depend on."
      body: "Where your business relies on data outside your accounting software, we scope connections with you: what data, how often and how it maps to your financials. Additional accounting sources such as Zoho, QuickBooks, Sage and Excel templates are on the Caliper roadmap."
    - title: "How a customisation project runs"
      summary: "From requirement to a working view."
      columns:
        - heading: "Steps"
          points:
            - "Requirement workshop with your team"
            - "Design of the views and definitions"
            - "Build in Caliper on your data"
            - "Review, refine and hand over"
        - heading: "What we need from you"
          points:
            - "Sample reports and KPI definitions"
            - "Mapping rules for units, products or regions"
            - "A reviewer from your team"
    - title: "Do it yourself with Build Your Own Report"
      summary: "Self-serve, for quick needs."
      body: "Build Your Own Report (beta) lets your team drag together components across Revenue, Liquidity, Expense, Profitability and Ratios, and reuse them every month. Customisation services are there for anything more specialised."
---
