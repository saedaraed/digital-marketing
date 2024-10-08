/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}",
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
      container: {
        center: true,
        padding: '2rem',
      },
      boxShadow: {
        'customdark': '-5px 5px 20px 5px rgba(255, 255, 255, 0.15)', 
        'customlight': '-5px 5px 20px 5px rgba(0, 0, 0, 0.15)', 

      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #5c0067 0%, rgb(9,6,41) 100%)',
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
        marqueeDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        pulseGrow: {
          '0%': { transform: 'scale(0.5)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out',
        marqueeDown: 'marqueeDown 2s linear 1',
        pulseGrow: 'pulseGrow 2.5s ease-in-out infinite',


      },
  
    },
  },
  plugins: [],
}

