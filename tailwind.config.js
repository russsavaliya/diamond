/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        'diamond-black': '#0a0a0a',
        'diamond-blue': '#b9e4ff',
        'diamond-silver': '#e5e5e5',
        'diamond-gold': '#d4af37',
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
