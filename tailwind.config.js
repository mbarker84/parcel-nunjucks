const rem = (pixels) => {
  return `${pixels / 16}rem`
}

module.exports = {
  purge: ['./src/pages/*.html', './src/js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'container-lg': `${rem(1600)}`,
        container: `${rem(1400)}`,
        '1/2-container': `${rem(1400 / 2)}`,
        '1/3-container': `${rem(1400 / 3)}`,
      },
      width: {
        'container-lg': `${rem(1600)}`,
        container: `${rem(1400)}`,
        '1/2-container': `${rem(1400 / 2)}`,
        '1/3-container': `${rem(1400 / 3)}`,
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
}
