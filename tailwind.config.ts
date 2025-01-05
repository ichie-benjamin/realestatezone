import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "estate-orange-1": "#EB6753",
        "estate-grey-1": "#E8E8E8",
        "estate-grey-2": "#707070",
        "estate-grey-3": "#666666",
        "estate-grey-4": "#F0F2F3",
        "estate-grey-5": "#E6E4E0",
        "estate-grey-6": "#FAFAFA",
        "estate-grey-7": "#e4e4e4",
        "estate-grey-8": "#AFAFAF",
        "estate-yellow-1": "#F1AF00",
        "estate-black-1": "#060606",
        "estate-green-1": "#07AE44",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "estate-border-radius": "10px",
        "estate-border-radius-2": "20px",
        "estate-border-radius-3": "5px",
        "estate-border-radius-4": "26px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "navbar-shadow": "0px 4px 4px #00000005",
        "search-shadow": "0px 0px 10px #00000029",
        "features-shadow": "0px 0px 10px #0000001A",
      },
      padding: {
        "mobile-landing-page-padding-x": "0 20px 0 20px",
        "desktop-landing-page-padding-x": "0 40px 0 40px",
      },
      backgroundImage: {
        "round-circle":
          "linear-gradient(181deg, rgba(236,161,150,1) 32%, rgba(255,255,255,1) 95%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
