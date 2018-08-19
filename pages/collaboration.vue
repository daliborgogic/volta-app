<template lang="pug">
.wrapper
  h1(v-html="data.title.rendered")
  div(v-html="data.content.rendered")
  .clients
    .client(v-for="client, index in data.acf.clients" :key="index")
      a(v-if="client.link" :href="client.link")
        img(:src="client.logo.sizes.thumbnail")
        h3 {{client.title}}
      span(v-else)
        img(:src="client.logo.sizes.thumbnail")
        h3 {{client.title}}
  pre {{data}}
</template>

<script>
import r2 from 'r2'

export default {
  async asyncData () {
    const { TLD } = process.env
    const res = await r2(`https://cms.${TLD}/wp-json/wp/v2/pages/14`).response
    const data = await res.json()

    return { data }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  max-width 1280px
  margin 0 auto
  padding-left 16px
  padding-right 16px
.clients
  width 100%
  display flex
  flex-wrap wrap
.client
  width 20%
  padding-left 3vw
  padding-right 3vw
  text-align center
  &:hover img
    opacity 1
    filter grayscale(0)
  img
    width 100%
    heigth auto
    vertical-align middle
    object-fit cover
    filter grayscale(100)
    opacity 0.5
</style>
