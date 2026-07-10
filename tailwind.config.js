/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        rose: {
          DEFAULT: '#C2306C',
          deep: '#A21D58',
          soft: '#F7D7E6',
          tint: '#FDF2F7',
        },
      },
    },
  },
  plugins: [],
}
