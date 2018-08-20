const { APP_DOMAIN } = process.env

module.exports = function() {
  return function (style) {
    style.define('$APP_DOMAIN', APP_DOMAIN)
  }
}
