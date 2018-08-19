require('dotenv').config()

const {
  INSTAGRAM_TOKEN,
  DOMAIN
} = process.env

module.exports = {
  env: {
    INSTAGRAM_TOKEN,
    DOMAIN
  },

  css: ['~assets/css/main.styl'],

  watch: ['~/nuxt.config.js'],

  build: {
    parallel: true,
    styleResources: {
      stylus: './assets/css/variables.styl'
    }
  }
}
