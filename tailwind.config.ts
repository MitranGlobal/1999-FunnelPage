import type { Config } from "tailwindcss";

/**
 * Design tokens for the ₹1,999 Positivity Hub funnel page.
 *
 * Deliberately plain: one deep navy for the hero / coach / closing bands,
 * warm paper and white for the reading sections, MiTran gold as the only
 * accent. Type is sized for comfortable reading on a phone — the page is
 * mostly text, so body copy is large and the line length is kept short.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1120px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14161c", // body text on light surfaces
          soft: "#3f434d",
          faint: "#6a6e78",
        },
        paper: {
          DEFAULT: "#faf8f3", // warm reading background
          deep: "#f2eee4",
          line: "#e3ddcf",
        },
        night: {
          DEFAULT: "#0b1530", // hero / coach / final CTA bands
          soft: "#111d3d",
          line: "#24305a",
        },
        ivory: "#f7f5ef", // text on night
        gold: {
          DEFAULT: "#f2c94c",
          bright: "#f7d774",
          deep: "#d9a92a",
          text: "#7a5a12", // gold for small text on light surfaces (AA contrast)
        },
        leaf: "#1f7a4d", // success ticks on light surfaces
      },
      fontFamily: {
        display: ['"Young Serif"', "Georgia", "serif"],
        sans: ['"Figtree Variable"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(1.9rem, 4.6vw, 3.25rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        "display-lg": ["clamp(1.7rem, 3.6vw, 2.6rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.3rem, 2.4vw, 1.65rem)", { lineHeight: "1.25" }],
        body: ["1.0625rem", { lineHeight: "1.75" }], // 17px
        "body-lg": ["1.1875rem", { lineHeight: "1.7" }], // 19px
      },
      maxWidth: {
        prose: "64ch",
        read: "720px",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(11, 21, 48, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
