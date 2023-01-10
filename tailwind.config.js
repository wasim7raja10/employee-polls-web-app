/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      container: {
        padding: '2rem',
        center: true,
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}