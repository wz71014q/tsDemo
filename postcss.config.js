const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('precss'),
    pxtorem({
      rootValue: 100,
      unitPrecision: 5,
      propList: [
        '*',
        '!font-size',
        '!letter-space',
        '!border',
        '!border-width',
        '!border-top-width',
        '!border-right-width',
        '!border-bottom-width',
        '!border-left-width'
      ],
      selectorBlackList: []
    })
  ]
};
