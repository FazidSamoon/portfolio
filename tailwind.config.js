module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'lobster': ['lobster', 'cursive'],
      'DancingScript': ['Dancing Script', 'cursive'],
      'KdamThmorPro' : ['Kdam Thmor Pro', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}