/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      '2xl': {'max':'1536px'},
      xl: {'max':'1280px'},
      lg: {'max':'1130px'},
      md: {'max':'950px'},
      sm: {'max':'765px'},
      'xs': {'max': '550px'},
      'bruh': {'max': '395px'}
    },
    colors: {
      "display": "#49E17D",
      "secondary": "#3D7459",
      "backdrop": "#1E2421",
      "darkGrey": "#52634E", 
      "darkTone": "#303D35"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
