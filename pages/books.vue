<template lang="pug">
.wrapper(v-if="data")
  div(v-for="place, index in data") {{place.title.rendered}}
  pre {{data}}
</template>

<script>
import r2 from 'r2'

export default {
  async asyncData () {
    const { TLD } = process.env
    const res = await r2(`https://cms.${TLD}/wp-json/wp/v2/interviews`).response
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
