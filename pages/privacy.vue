<template lang="pug">
.wrapper
  h1(v-html="data.title.rendered")
  div(v-html="data.content.rendered")
</template>

<script>
import r2 from 'r2'

export default {
  async asyncData () {
    const { CMS_DOMAIN } = process.env
    const res = await r2(`https://${CMS_DOMAIN}/wp-json/wp/v2/pages/3`).response
    const data = await res.json()
    return { data }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  max-width 768px
  margin 0 auto
  padding-left 16px
  padding-right 16px
</style>
