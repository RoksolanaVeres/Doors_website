/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "400px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      inter: ["Inter Variable", "sans-serif"],
      lora: ["Lora Variable", "serif"],
    },
    extend: {
      padding: {
        "container-padding": "20px",
      },
      gridTemplateColumns: {
        "auto-fill-265": "repeat(auto-fill, minmax(265px, 1fr))",
      },
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          blur: "hsla(var(--background-blur))",
        },

        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
          inverted: "hsl(var(--foreground-inverted))",
        },

        primary: {
          DEFAULT: "hsla(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        border: "hsl(var(--border))",
        neutralGray: "hsl(var(--neutralGray))",
        destructive: "hsl(var(--destructive))",

        door: {
          DEFAULT: "hsl(var(--card))",
          white: "hsl(var(--door-white))",
          beige: "hsl(var(--door-beige))",
          brown: "hsl(var(--door-brown))",
          darkBrown: "hsl(var(--door-darkBrown))",
          gray: "hsl(var(--door-gray))",
          lighterGray: "hsl(var(--door-lighterGray))",
          lightGray: "hsl(var(--door-lightGray))",
          bileDerevo: "hsl(var(--door-bileDerevo))",
          astanaMerle: "hsl(var(--door-astanaMerle))",
          astanaRozvud: "hsl(var(--door-astanaRozvud))",
          bilyiMat: "hsl(var(--door-bilyiMat))",
          filadelfiiaCrem: "hsl(var(--door-filadelfiiaCrem))",
          horikhLisovyi: "hsl(var(--door-horikhLisovyi))",
          horikhTemnyi: "hsl(var(--door-horikhTemnyi))",
          karpatskaYalyna: "hsl(var(--door-karpatskaYalyna))",
          parma: "hsl(var(--door-parma))",
          shvedskaVyshnia: "hsl(var(--door-shvedskaVyshnia))",
          selected: "hsl(var(--door-selected))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
