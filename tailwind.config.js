/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite/**/*.js',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
        colors:{
          "dark-purple": "#025373",
          "light-white": "rgba(255,255,255, 0.18)",
          "totem": "#025373",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}