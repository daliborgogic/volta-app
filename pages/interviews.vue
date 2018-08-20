<template lang="pug">
.wrapper(v-if="data")
  nuxt-link(tag="header" to="/")
    img(:src="data[0].better_featured_image.media_details.sizes.medium_large.source_url")
  div(v-for="place, index in data")
    h1(v-html="place.title.rendered")
  pre isPortrait {{isPortrait(data[0].better_featured_image.media_details.sizes)}}
  pre {{data[0].better_featured_image.media_details.sizes}}
</template>

<script>
import r2 from 'r2'

export default {
  async asyncData () {
    const { CMS_DOMAIN } = process.env
    const res = await r2(`https://${CMS_DOMAIN}/wp-json/wp/v2/interviews`).response
    const data = await res.json()
    return { data }
  },

  methods: {
    isPortrait (value) {
      const { width, height } = value.medium_large
      return height > width
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  max-width 1180px
  margin 0 auto
  padding-left 16px
  padding-right 16px
</style>
