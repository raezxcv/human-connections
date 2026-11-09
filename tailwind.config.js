/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F3EB',
          sand: '#EDE6D8',
          deep: '#E2D9C6',
        },
        charcoal: {
          DEFAULT: '#181715',
          slate: '#4A4640',
          muted: '#6B655D',
        },
        coral: {
          DEFAULT: '#E04F3E',
          dark: '#B83222',
          soft: '#FADBD6',
        },
        cobalt: {
          DEFAULT: '#1B45B8',
          deep: '#122F80',
          soft: '#DCE5FB',
        },
        ochre: {
          DEFAULT: '#F2B735',
          dark: '#B07D0A',
          soft: '#FBF0D0',
        },
        rule: '#D5CCB9',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'editorial-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'editorial-inout': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
};
