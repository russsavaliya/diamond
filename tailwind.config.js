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
        'diamond-black': '#ffffff',
        'diamond-blue': '#555555',
        'diamond-silver': '#1a1a1a',
        'diamond-gold': '#000000',
        'diamond-violet': '#333333',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 0, 0, 0.25)' },
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
