/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'green-btn': '#82DB39',
        'green-btn-hover': '#6EBD2F',
        'baby-blue': '#E5F7F9',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        appearFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        invadeIconAnimation: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '5%': { transform: 'translateX(-10px) translateY(2px)' },
          '10%': { transform: 'translateX(-20px) translateY(4px)' },
          '15%': { transform: 'translateX(-30px) translateY(6px)' },
          '20%': { transform: 'translateX(-40px) translateY(8px)' },
          '25%': { transform: 'translateX(-50px) translateY(10px)' },
          '30%': { transform: 'translateX(-60px) translateY(8px)' },
          '35%': { transform: 'translateX(-70px) translateY(6px)' },
          '40%': { transform: 'translateX(-80px) translateY(4px)' },
          '45%': { transform: 'translateX(-90px) translateY(2px)' },
          '50%': { transform: 'translateX(-100px) translateY(0px)' },
          '55%': { transform: 'translateX(-90px) translateY(2px)' },
          '60%': { transform: 'translateX(-80px) translateY(4px)' },
          '65%': { transform: 'translateX(-70px) translateY(6px)' },
          '70%': { transform: 'translateX(-60px) translateY(8px)' },
          '75%': { transform: 'translateX(-50px) translateY(10px)' },
          '80%': { transform: 'translateX(-40px) translateY(8px)' },
          '85%': { transform: 'translateX(-30px) translateY(6px)' },
          '90%': { transform: 'translateX(-20px) translateY(4px)' },
          '95%': { transform: 'translateX(-10px) translateY(2px)' },
          '100%': { transform: 'translateX(0px) translateY(0px)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-in',
        appearFromTop: 'appearFromTop 300ms ease-out',
        moveRight: 'moveRight 300ms ease-in-out',
        invadeIconAnimation: 'invadeIconAnimation 2000ms ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
