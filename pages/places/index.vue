<template lang="pug">
div(v-if="data")
  div(v-for="place, index in data") {{place.title.rendered}}
</template>

<script>
import r2 from 'r2'

export default {
  async asyncData () {
    const { CMS_DOMAIN } = process.env
    const res = await r2(`https://${CMS_DOMAIN}/wp-json/wp/v2/places`).response
    const data = await res.json()

    return {data}
  }
}
</script>

<style lang="stylus" scoped>
div
  max-width 1440px
  margin 0 auto
</style>
