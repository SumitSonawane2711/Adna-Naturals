/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4D2E', // Define a custom primary color
        secondary: '#4F6F52',
      },
    },
    plugins: [],
  }
}