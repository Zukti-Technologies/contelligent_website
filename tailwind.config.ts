import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// Colour tokens are CSS variables (defined in app/globals.css), so one class name can carry two palettes:
//   - default (Contelligent company pages): neutral black / grey / white
//   - .theme-caliper (everything under /products/caliper): Caliper teal + mint, from the Caliper logo
// Token roles: ink = text and dark surfaces, mint = accent (buttons, links, eyebrows), paper = alternate section background.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: v("ink-800"),
          900: v("ink-900"),
          800: v("ink-800"),
          700: v("ink-700"),
          600: v("ink-600"),
          300: v("ink-300"),
          100: v("ink-100"),
        },
        mint: {
          DEFAULT: v("mint-500"),
          50: v("mint-50"),
          100: v("mint-100"),
          300: v("mint-300"),
          500: v("mint-500"),
          700: v("mint-700"),
        },
        paper: v("paper"),
      },
      fontFamily: {
        // Set per palette in app/globals.css: DM Sans / DM Serif Display on Contelligent pages,
        // Inter / Plus Jakarta Sans on Caliper pages.
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        serif: ["var(--font-serif)"],
      },
      maxWidth: { site: "76rem" },
    },
  },
  plugins: [typography],
};
export default config;
