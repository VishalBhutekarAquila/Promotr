/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    screens: {
      small: { max: '479px' }, // up to 479px
      medium: { min: '480px', max: '639px' }, // 480px - 639px
      mobile: { max: '639px' }, // up to 639px
      large: { min: '640px', max: '1023px' }, // 640px - 1023px
      touch: { max: '1023px' }, // up to 1023px
      'x-large': { min: '1024px', max: '1365px' }, // 1024px - 1365px
      big: { min: '1366px', max: '1919px' }, // 1366px - 1919px
      huge: { min: '1920px' }, // 1920px and up
    },
    extend: {
      colors: {
        primary: '#ff6e1f',
        secondary: '#faf3e1',
        tertiary: '#f5e6c5',
        dark: '#222222',
      },

      theme: {
        screens: {
          extraSmall: { max: '370px' },
          small: { min: '371px', max: '479px' }, // up to 371px-479px
          medium: { min: '480px', max: '639px' }, // 480px - 639px
          mobile: { max: '1023px' }, // up to 639px
          large: { min: '640px', max: '1023px' }, // 640px - 1023px
          touch: { max: '1023px' }, // up to 1023px
          'x-large': { min: '1024px', max: '1365px' }, // 1024px - 1365px
          big: { min: '1366px', max: '1919px' }, // 1366px - 1919px
          huge: { min: '1920px' }, // 1920px and up
        },
        extend: {
          fontFamily: {
            din: ['DIN Condensed', 'sans-serif'],
            // afacad: ["Afacad", "sans-serif"],
          },
        },
      },

      // Other Tailwind configuration...

      // fontFamily: {
      //   // Helvetica: ["Helvetica", "sans-serif"],
      //   Montserrat: ["Montserrat", "sans-serif"],
      // },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      fontSize: {
        '120px': '120px',
        '56px': '56px',
        '32px': '32px',
        '24px': '24px',
        '16px': '16px',
      },
    },
  },
  variants: {},
  important: true,
  plugins: [],
};
