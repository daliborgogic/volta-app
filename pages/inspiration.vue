<template lang="pug">
.wrapper(v-if="data")
  nuxt-link(tag="header" to="/")
    img(:src="data[0].better_featured_image.media_details.sizes.thumbnail")
  div(v-for="place, index in data")
    h1(v-html="place.title.rendered")
  pre {{data[0].better_featured_image.media_details.sizes.thumbnail}}
</template>

<script>
import r2 from 'r2'

export default {
  async asyncData () {
    const { CMS_DOMAIN } = process.env
    const res = await r2(`https://${CMS_DOMAIN}/wp-json/wp/v2/interviews`).response
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
