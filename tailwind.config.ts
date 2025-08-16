import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#FF0000',
          light: '#FF4D4D',
        },
        orange: {
          DEFAULT: '#FFA500',
          light: '#FFB84D',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        slideIn: 'slideIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});