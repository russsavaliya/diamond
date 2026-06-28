/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Raleway', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        'diamond-black': '#0a0a0a',
        'diamond-blue': '#e8d5b7',
        'diamond-silver': '#e5e5e5',
        'diamond-gold': '#c9a96e',
        'diamond-violet': '#a07840',
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'spin-reverse': 'spinReverse 6s linear infinite',
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
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 169, 110, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(201, 169, 110, 0.7)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
