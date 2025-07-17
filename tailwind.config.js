/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '5%': { opacity: 0.5 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
          '95%': { opacity: 0.5 },
          '100%': { transform: 'translateY(100%)', opacity: 0 }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'carousel': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'carousel-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'move': 'move 4s linear infinite',
        'gradient-xy': 'gradient-xy 10s ease infinite',
        'carousel': 'carousel 30s linear infinite',
        'carousel-reverse': 'carousel-reverse 30s linear infinite',
        'float': 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};
