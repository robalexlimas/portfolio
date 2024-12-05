/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        "light-background": "var(--light-background)",
        "dark-background": "var(--dark-background)",
        "light-gray": "var(--light-gray)",
        black: "var(--black)",
        "dark-gray": "var(--dark-gray)",
        "light-green": "var(--light-green)",
        gray: "var(--gray)",
        accent: "var(--accent-color)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Montserrat", "serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        tiny: ["0.625rem", { lineHeight: "0.875rem" }],
        huge: ["10rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
