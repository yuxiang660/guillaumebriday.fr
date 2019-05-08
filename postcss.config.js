const tailwindcss = require('tailwindcss')

module.exports = () => ({
  plugins: [
    require('postcss-import'),
    tailwindcss('./tailwind.js'),
    require('postcss-nested'),
    require('postcss-focus'),
    require('postcss-short'),
    require('postcss-selector-matches'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
})
