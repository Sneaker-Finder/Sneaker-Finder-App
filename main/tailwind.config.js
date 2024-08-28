/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "main/src/**/*.{js,jsx,ts,tsx,html}",
  "main/public/**/*.{html}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#a2fbfb',
      },
    },
  },
  plugins: [],
}

