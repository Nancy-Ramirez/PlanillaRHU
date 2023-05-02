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
          "col1": "#1C66A6",
          "col2": "#3C7DA6",
          "col3": "#699EBF",
          "col4": "#36736D", 

      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}