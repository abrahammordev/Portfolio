/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        'aurora': 'aurora 15s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%, 0% 50%' },
          '50%': { backgroundPosition: '200% 50%, 100% 50%' },
          '100%': { backgroundPosition: '0% 50%, 0% 50%' },
        },
      },
    },
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
}