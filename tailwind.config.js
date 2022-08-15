/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      "display": "#49E17D",
      "secondary": "#3D7459",
      "backdrop": "#1E2421"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
