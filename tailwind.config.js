/* eslint-disable linebreak-style */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-baijamjuree)',
      },
      screens: {
        tiny: '350px',
        sm: '640px',
        md: '970px',
        lg: '1124px',
        xl: '1280px',
      },
      colors:{
        primary: {
          100: '#AF7C20',
          200: '#EBDEC5',
          300: '#D9B26B',
          400: '#885800',
          500: '#543600',
        },
        red: {
          200: '#FFE6DC',
          300: '#FC885D',
          400: '#B53100',
          600: '#731F00',
        },
        green: {
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
      },

      backgroundImage: {
        stripes: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 12.5%, transparent 12.5%, transparent)'
      },

      fontSize: {
        '5xl': '2.5rem',
      },

      backgroundSize: {
        stripes: '100% 8px',
      },

      blur: {
        full: '194px'
      },
    },
  },
  plugins: [],
};
