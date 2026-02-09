/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891B2', // Cyan 600
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#22D3EE', // Cyan 400
          foreground: '#164E63',
        },
        cta: {
          DEFAULT: '#22C55E', // Green 500
          foreground: '#FFFFFF',
        },
        background: '#ECFEFF', // Cyan 50
        text: '#164E63', // Cyan 900
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
