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
        highlightDark10: '#0c895f',
        highlightDark20: '#085b3f',
        highlightLight10: "#14e6a1",
        highlightLight20: "#3eeeb4",
        highlightLight40: "#9bf6d8",
        secondary: '#F3F4F6',
        text: '#1F2937',
        background: '#fafafa',
        warning: "#ef4444",
        header: '#111827',
        headerLight10: '#202d4a',
        headerLight20: '#2f436d',
        headerText: '#8f96a2',
      }
    },
  },
  plugins: [],
}

