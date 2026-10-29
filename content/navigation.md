---
# ─────────────────────────────────────────────────────────────
# NAVIGATION — header menu, header buttons and footer link columns.
# external: true opens the link in a new tab.
# A menu item can be a plain link (href), a dropdown (children) or a multi-column menu (columns).
# ─────────────────────────────────────────────────────────────
main:
  # Offerings: one menu with two columns. Each column title links to its index page (href).
  # description: optional one line under a link. Add more links or columns in the same format.
  - label: "Offerings"
    columns:
      - title: "Products"
        href: "/products/"
        links:
          - label: "Caliper"
            href: "/products/caliper/"
            description: "Financial intelligence on your Tally data"
      - title: "Services"
        href: "/services/"
        links:
          - label: "Business Plan as a Service"
            href: "/services/business-plan/"
            description: "Annual plan, tracked monthly against actuals"   # DUMMY
          - label: "Consulting"
            href: "/services/consulting/"
            description: "MIS, cash flow planning and CFO support"   # DUMMY
  - label: "Customers"
    href: "/customers/"
  - label: "Partners"
    href: "/partners/"
  - label: "Contact"
    href: "/contact/"

# Header buttons, right side. style: primary | dark | outline | link
headerCtas:
  - label: "Try Caliper for Free"
    href: "https://portal.thecaliper.app/register"
    external: true
    style: "primary"
  - label: "Book a demo"
    href: "/products/caliper/demo/"
    style: "dark"

footerColumns:
  - title: "Caliper"
    links:
      - { label: "Overview", href: "/products/caliper/" }
      - { label: "Features", href: "/products/caliper/#features" }
      - { label: "Integrations", href: "/products/caliper/#integrations" }
      - { label: "FAQs", href: "/products/caliper/#faqs" }
      - { label: "Blog", href: "/products/caliper/blog/" }
      - { label: "Book a demo", href: "/products/caliper/demo/" }
      - { label: "Sign Up", href: "https://portal.thecaliper.app/register", external: true, style: "primary" }
  - title: "Services"
    links:
      - { label: "Business Plan as a Service", href: "/services/business-plan/" }
      - { label: "Consulting", href: "/services/consulting/" }
  - title: "Company"
    links:
      - { label: "About", href: "/" }
      - { label: "Customers", href: "/customers/" }
      - { label: "Partners", href: "/partners/" }
      - { label: "Contact", href: "/contact/" }
---
