---
# ─────────────────────────────────────────────────────────────
# NAVIGATION: header menus, header buttons, mobile menu and footer columns.
# Each menu opens a dropdown. `description` is the grey line under a link.
# `all: true` draws the link as the "see everything" row at the bottom of a dropdown.
# `page` marks which page the link belongs to, so the menu shows where the visitor is.
# ─────────────────────────────────────────────────────────────
menus:
  - label: "Caliper"
    links:
      - { label: "Platform overview", href: "/products/caliper/", page: "/products/caliper/", description: "Your financial command centre on your accounting data" }
      - { label: "Product tour", href: "/products/caliper/#caliper-tour", description: "Liquidity, revenue, profitability and expenses" }
      - { label: "Integrations", href: "/products/caliper/#caliper-integrations", description: "Accounting software connections, today and planned" }
  - label: "Services"
    links:
      - { label: "Financial Data Associate", href: "/services/financial-data-associate/", page: "/services/financial-data-associate/", description: "Reliable, decision-ready data from your books" }
      - { label: "Business Plan as a Service", href: "/services/business-plan/", page: "/services/business-plan/", description: "A living plan built on your real numbers" }
      - { label: "Advisory", href: "/services/advisory/", page: "/services/advisory/", description: "Know what the numbers mean and what to do next" }
      - { label: "Customisation services", href: "/services/customisation/", page: "/services/customisation/", description: "Caliper shaped around your business" }
      - { label: "Compare all services in detail", href: "/#home-services", all: true }
  - label: "Who we serve"
    links:
      - { label: "Chartered Accountants", href: "/#home-who", description: "From compliance to strategic advisory" }
      - { label: "Finance Teams", href: "/#home-who", description: "Less reporting, more analysis" }
      - { label: "Business Owners", href: "/#home-who", description: "Run your business with financial clarity" }
      - { label: "Investors & Lenders", href: "/#home-who", description: "Visibility across portfolio companies" }
  - label: "Company"
    narrow: true
    links:
      - { label: "About Contelligent", href: "/about/", page: "/about/" }
      - { label: "Vision and mission", href: "/about/#about-vision" }
      - { label: "Leadership", href: "/about/#about-leadership" }
      - { label: "Customers", href: "/#home-customers" }
      - { label: "Contact", href: "/contact/", page: "/contact/" }

headerLink: { label: "Contact us", href: "/contact/" }
headerButton: { label: "Book a Demo", href: "/contact/" }

# Mobile menu. `sub: true` indents the link under the one above it.
mobile:
  - { label: "Home", href: "/" }
  - { label: "Caliper", href: "/products/caliper/" }
  - { label: "Financial Data Associate", href: "/services/financial-data-associate/", sub: true }
  - { label: "Business Plan as a Service", href: "/services/business-plan/", sub: true }
  - { label: "Advisory", href: "/services/advisory/", sub: true }
  - { label: "Customisation services", href: "/services/customisation/", sub: true }
  - { label: "Who we serve", href: "/#home-who" }
  - { label: "About", href: "/about/" }
  - { label: "Vision and mission", href: "/about/#about-vision", sub: true }
  - { label: "Contact us", href: "/contact/" }

footerColumns:
  - title: "Caliper"
    links:
      - { label: "Platform overview", href: "/products/caliper/" }
      - { label: "Product tour", href: "/products/caliper/#caliper-tour" }
      - { label: "Integrations", href: "/products/caliper/#caliper-integrations" }
  - title: "Services"
    links:
      - { label: "Financial Data Associate", href: "/services/financial-data-associate/" }
      - { label: "Business Plan as a Service", href: "/services/business-plan/" }
      - { label: "Advisory", href: "/services/advisory/" }
      - { label: "Customisation services", href: "/services/customisation/" }
  - title: "Company"
    links:
      - { label: "About", href: "/about/" }
      - { label: "Vision and mission", href: "/about/#about-vision" }
      - { label: "Contact", href: "/contact/" }
      - { label: "support@contelligent.in", href: "mailto:support@contelligent.in" }
---
