---
# ─────────────────────────────────────────────────────────────
# SERVICE PAGE (/services/advisory/)
# Source: contelligent-website 1.html (Nov 2026).
# Sections in order: hero, what (split or cards), how it works (steps), in detail (drill-down list).
# The "In detail" list also appears in the "Services in detail" tabs on the home page.
# In `detail.items`: `open: true` starts that row open; `columns` are the two boxes inside a row;
# `questions` shows a grid of questions; `body` is a paragraph; `note` is a grey line underneath.
# ─────────────────────────────────────────────────────────────
seoTitle: "Advisory | Contelligent"
seoDescription: "Expert finance and business advisory that starts from already-analysed numbers in Caliper, working alongside your CA."

hero:
  crumb: "Services"
  titleAccent: "Advisory"      # first line, in the green gradient
  title: "Know what to do next"
  lede: "Expert finance and business advisory that starts from already-analysed numbers, not spreadsheets."
  primaryCta: { label: "Speak to an advisor", href: "/contact/" }
  secondaryCta: { label: "See what’s included", href: "#adv-detail" }
  glance:
    - { label: "Starts from", value: "Insights in Caliper" }
    - { label: "Works with", value: "Management, alongside your CA" }
    - { label: "Delivers", value: "Risks, opportunities and actions" }
    - { label: "Outcome", value: "Better financial decisions" }

what:
  eyebrow: "What our advisors do"
  title: "From numbers to actions"
  ticks:
    - "Use insights from the Caliper platform"
    - "Interpret what the numbers mean for your business"
    - "Identify implications, risks and opportunities"
    - "Recommend actions to management"
  panel:
    title: "Alongside your CA"
    body: "Our advisors work with your existing chartered accountant, not instead of them. Your CA continues to lead compliance and advice; we bring the data and the analysis."

howItWorks:
  eyebrow: "How it works"
  title: "From insight to action"
  steps:
    - { title: "Review", body: "Start from the analysed numbers in Caliper." }
    - { title: "Interpret", body: "Explain what the numbers mean for your business." }
    - { title: "Assess", body: "Identify implications, risks and opportunities." }
    - { title: "Recommend", body: "Agree actions with management and your CA." }
  outcomeLead: "Outcome:"
  outcomeStrong: "better financial actions and decisions."      # shown in green

detail:
  anchor: "adv-detail"
  eyebrow: "In detail"
  title: "How Advisory works in practice"
  intro: "Open any area to see what our advisors look at, how engagements run and what you receive."
  items:
    - title: "What our advisors look at"
      summary: "Starting from the analysed numbers in Caliper."
      open: true
      columns:
        - heading: "Health of the business"
          points:
            - "Liquidity, cash position and short-term obligations"
            - "Working capital: receivables, payables and collection days"
            - "Profitability by customer, product and revenue stream"
        - heading: "Trends and signals"
          points:
            - "Cost structure and where spend is growing"
            - "Ratio trends against benchmarks"
            - "Concentration risk across customers and vendors"
    - title: "Questions we help you answer"
      summary: "Decisions, not just reports."
      questions:
        - "Which customers and products actually make money?"
        - "Where is cash getting stuck, and how do we release it?"
        - "Can we afford this hire, investment or expansion?"
        - "What happens to margins if we change pricing?"
        - "Are we ready to raise funds or borrow, and what will lenders ask?"
        - "Which costs can we cut without hurting growth?"
    - title: "How an advisory engagement runs"
      summary: "A simple, repeatable cycle."
      columns:
        - heading: "Each review"
          points:
            - "A pre-read pack prepared from Caliper"
            - "A review meeting with management"
            - "A written summary of findings and recommendations"
        - heading: "Between reviews"
          points:
            - "An action tracker with owners and dates"
            - "Follow-up on open actions"
            - "Alerts when something important changes"
    - title: "Working alongside your CA"
      summary: "Complementary, not competing."
      columns:
        - heading: "Your CA"
          points:
            - "Continues to lead statutory compliance, audit and tax"
            - "Remains your trusted advisor on regulatory matters"
        - heading: "Caliper Advisor"
          points:
            - "Brings the data and the analysis"
            - "Focuses on performance, cash and growth decisions"
            - "Coordinates with your CA where topics overlap"
    - title: "What you receive"
      summary: "Clear outputs after every review."
      columns:
        - heading: "Outputs"
          points:
            - "Findings and recommendations in plain language"
            - "An action list with owners"
            - "Inputs for board and investor updates"
        - heading: "Over time"
          points:
            - "A record of decisions and their impact"
            - "Trend view of key ratios and metrics"
            - "Early warning on risks"
---
