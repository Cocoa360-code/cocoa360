/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ClashDisplay: ["ClashDisplay"],
        KumbhSans: ["KumbhSans"],
      },
    },
  },
  plugins: [],
}

