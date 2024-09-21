/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pink-500': '#D718D0',
        'pink-700': '#be185d',
        'blue-900': '#1e3a8a',
        'custom-dark': '#090629',
      },
      boxShadow: {
        'customdark': '-5px 5px 20px 5px rgba(255, 255, 255, 0.15)', 
        'customlight': '-5px 5px 20px 5px rgba(0, 0, 0, 0.15)', 

      },
      fontFamily: {
        'hind': ['Hind', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out',

      },
  
    },
  },
  plugins: [],
}

