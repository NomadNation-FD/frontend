/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#111827',
        'gray': {
          '50': '#bcc0c3',
          '500': '#383842',
          '900': '#18181c'
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}