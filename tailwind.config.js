/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        '7':'7px'
      },
      backgroundImage:{
        "empBg":"url('src/Images/emp_banner.jpg')",
      }
    },
  },
  plugins: [],
}