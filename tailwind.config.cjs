/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-bg': "url(https://images.unsplash.com/photo-1504450075628-39777da238ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)",
        
      },
      colors: {
        "primary-color":"#1E86FF"
      }
    },
  },
  plugins: [],
}