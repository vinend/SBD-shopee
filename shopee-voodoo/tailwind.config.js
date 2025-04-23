/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        '9xl': '96px'
      },
      animation: {
        'expand': 'expand 2.5s ease-in-out forwards',
        'float-in-left': 'floatInLeft 2.5s ease-out forwards',
        'float-in-right': 'floatInRight 2.5s ease-out forwards',
        'drop-in': 'dropIn 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'delayed-float-in-left': 'floatInLeft 2.5s ease-out forwards',
        'delayed-float-in-right': 'floatInRight 2.5s ease-out forwards',
        'delayed-drop-in': 'dropIn 2s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-in-up': 'slideInUp 1s ease-out forwards',
        'slide-in-down': 'slideInDown 1s ease-out forwards',
      },
      keyframes: {
        expand: {
          '0%': { width: '50%', height: '100%', borderRadius: '0', transform: 'translate(0, 0)' },
          '30%': { width: '300%', height: '300%', borderRadius: '0', transform: 'translate(-33%, -33%)' },
          '60%': { width: '500%', height: '500%', borderRadius: '50%', transform: 'translate(-45%, -45%)', opacity: '1' },
          '100%': { width: '700%', height: '700%', borderRadius: '50%', transform: 'translate(-45%, -45%)', opacity: '0' },
        },
        floatInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '60%': { transform: 'translateX(-20%)', opacity: '0.4' },
          '100%': { transform: 'translateX(0)', opacity: '0.7' }
        },
        floatInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '60%': { transform: 'translateX(20%)', opacity: '0.4' },
          '100%': { transform: 'translateX(0)', opacity: '0.7' }
        },
        dropIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { transform: 'translateY(-40%)', opacity: '0.3' },
          '70%': { transform: 'translateY(10%)', opacity: '0.7' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}