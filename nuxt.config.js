require('dotenv').config()
const stylusPlugin = require('./assets/stylus.js')

const {
  INSTAGRAM_TOKEN,
  CMS_DOMAIN,
  APP_DOMAIN
} = process.env

module.exports = {
  env: {
    INSTAGRAM_TOKEN,
    CMS_DOMAIN,
    APP_DOMAIN
  },

  watch: ['~/nuxt.config.js'],

  build: {
    parallel: true,
    cssSourceMap: false,
    styleResources: {
      stylus: './assets/stylus.styl'
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: "pre",
        //   test: /\.(js|vue)$/,
        //   loader: "eslint-loader",
        //   exclude: /(node_modules)/
        // })
      }
      [].concat(...config.module.rules.find(e =>
        e.test.toString().match(/\.styl/) ).oneOf.map(e =>
          e.use.filter(e =>
            e.loader == 'stylus-loader'))).forEach(stylus => {
             // extend default options
             Object.assign(stylus.options, {
               use: stylusPlugin()
             })
           })
    }
  }
}
