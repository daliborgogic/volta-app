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
#__layout
  padding-top 300px
main
  flex 1
.volta
  display flex
  flex-direction column
  min-height calc(100vh - 300px)
</style>
