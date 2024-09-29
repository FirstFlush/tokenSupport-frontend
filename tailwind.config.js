/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        highlight: '#10B981',
        secondary: '#F3F4F6',
        text: '#1F2937',
        background: '#fafafa',
      }
    },
  },
  plugins: [],
}

