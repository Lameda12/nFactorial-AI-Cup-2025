/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ios-blue': '#007AFF',
        'ios-red': '#FF3B30',
        'ios-gray': '#F2F2F7',
      },
    },
  },
  plugins: [],
} 