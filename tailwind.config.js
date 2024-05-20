/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        // Example for RGB
        'clr-violet': 'hsl(263, 55%, 52%)',
        'clr-dark-gryish-blue': 'hsl(217, 19%, 35%)',
        'clr-dark-blackish-blue': 'hsl(219, 29%, 14%)',
        'clr-white': 'hsl(0, 0%, 100%)',
        'clr-light-gray': 'hsl(0, 0%, 81%)',
        'clr-light-grayish-blue': 'hsl(210, 46%, 95%)'
      },
    },
  },
  plugins: [],
}

