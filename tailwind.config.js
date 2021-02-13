const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.tsx', './src/**/*.mdx'],
  },
  theme: {
    colors: {
      ...defaultTheme.colors,
      ...colors,
      brand: {red: '#F83E0D', purple: '#8B3BDB', yellow: '#FCAC14'},
      gray: {
        50: '#e4e4e4',
        100: '#cbcbcb',
        200: '#b2b2b2',
        300: '#9a9a9a',
        400: '#828282',
        500: '#6c6c6c',
        600: '#555555',
        700: '#404040',
        800: '#2d2d2d',
        900: '#191919',
        1000: '#131313',
      },
      transparent: 'rgba(255, 255, 255, 0)', // safari fix
    },
    extend: {
      fontFamily: {
        sans: ['Greycliff', ...defaultTheme.fontFamily.sans],
        funky: ['Ahkio', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.50'),
            'h1, h2, h3, h4, h5': {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.white'),
              background: theme('colors.gray.800'),
              padding: '3px 5px',
              borderRadius: 5,
            },
            'code::before, code::after': {
              content: "''",
            },
            a: {
              color: theme('colors.brand.yellow'),
              '&:hover': {
                color: theme('colors.brand.purple'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
