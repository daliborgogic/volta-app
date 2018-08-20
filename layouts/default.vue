<template lang="pug">
.volta
  TheNav
  main
    nuxt
  TheInstagram
  TheFooter
</template>

<script>
import TheNav from '@/components/TheNav'
import TheFooter from '@/components/TheFooter'
import TheInstagram from '@/components/TheInstagram'

export default {
  components: {
    TheNav,
    TheFooter,
    TheInstagram
  }
}
</script>

<style lang="stylus">
*
*::before
*::after
  box-sizing border-box

html
  font-family sans-serif
  line-height 1.15
  -webkit-text-size-adjust 100%
  -ms-text-size-adjust 100%
  -ms-overflow-style scrollbar
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  height 100%

@-ms-viewport
  width device-width

body
  margin 0
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 1rem
  font-weight 400
  line-height 1.8
  color black
  text-align left
  background-color white
  overflow-y scroll
  border-right 20px solid $brandColor
  border-bottom 20px solid $brandColor
  border-left 20px solid $brandColor
  min-height 100%

[tabindex="-1"]:focus
  outline 0 !important

.page-enter-active
.page-leave-active
  transition-duration 250ms
  transition-property opacity
  transition-timing-function ease-in
.page-enter
.page-leave-active
  opacity 0

#__layout
  padding-top 300px
main
  flex 1
.volta
  display flex
  flex-direction column
  min-height calc(100vh - 300px)

externalLink = '.link[href*="//"]:not([href*="' + $APP_DOMAIN + '"])::after'
{externalLink}
  content ""
  width 16px
  height 16px
  display inline-block
  margin-left 8px
  background-image url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z' fill='#999'/></svg>")
  transform translateY(2.5px)
</style>
