<template lang="pug">
.insta
  .tag Instagram
  .content(v-if="loading") Loading...
  .content
    a(v-for="img, index in insta" href="#" :class="{first: index === 0, last: index === 11}")
      img(:src="img.images.standard_resolution.url")
</template>

<script>
import r2 from 'r2'

export default {
  data () {
    return {
      loading: false,
      insta: []
    }
  },

  mounted () { this.instagram() },

  methods: {
    async instagram () {
      this.loading = true
      const { INSTAGRAM_TOKEN } = process.env
      const res = await r2(`https://api.instagram.com/v1/users/self/media/recent?access_token=${INSTAGRAM_TOKEN}&count=12&callback=?`).response
      const { data } = await res.json()
      this.loading = false
      this.insta = data
    }
  }
}
</script>


<style lang="stylus" scoped>
.insta
  max-width 1184px
  margin 10vh auto
.content
  display grid
  height 100%
  grid-template-rows repeat(3, 1fr)
  grid-template-columns repeat(6, 1fr)
  grid-template-areas  'first first . . . .'\
                       'first first . . last last'\
                       '. . . . last last'
.first
  grid-area first
.last
  grid-area last
img
  width 100%
  height 100%
  object-fit cover
  vertical-align middle
</style>
