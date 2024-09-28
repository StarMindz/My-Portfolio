/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "dark-blue": "#0d1321",
        "light-blue": "#748cab",
        "egg-shell": "#f0ebd8",
        "teal": "#00b7c7",
        "teal-shine": "#00e5ff"
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      fontSize: {
        'large': '3em',
        'medium': '1.2em',
        'small': '1em',
      },
      backgroundImage: {
        'overlay-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61))',
      }
    },
  },
  plugins: [],
}
