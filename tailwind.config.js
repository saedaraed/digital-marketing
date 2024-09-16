/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-500': '#D718D0',
        'pink-700': '#be185d',
        'blue-900': '#1e3a8a',
        'custom-dark': '#090629',
      },
      boxShadow: {
        'custom': '-5px 5px 20px 5px rgba(255, 255, 255, 0.15)', 
      },
      fontFamily: {
        'hind': ['Hind', 'sans-serif'],
      },
  
    },
  },
  plugins: [],
}

