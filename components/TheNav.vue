<template lang="pug">
nav(ref="nav")
  nuxt-link.link(to="/places") #[span PLACES]
  span.link(role="default") PEOPLE
    div
      nuxt-link.link(to="/interviews") #[span INTERVIEWS]
      nuxt-link.link(to="/time-off") #[span TIME OFF]
  span.link(role="default") LIVING
    div
      nuxt-link.link(to="/travel") #[span TRAVEL]
      nuxt-link.link(to="/books") #[span BOOKS]
      nuxt-link.link(to="/inspiration") #[span INSPIRATION]
      nuxt-link.link(to="/mind-and-body") #[span MIND &amp; BODY]
  nuxt-link.logo(to="/")
    TheLogo(:fill="fill")
  a.link(href="https://magic.smartvolta.com/") #[span EVENTS]
  span.link(role="default") CREATIVE
    div
      nuxt-link.link(to="/portfolios") #[span PORTFOLIO]
      nuxt-link.link(to="/services") #[span SERVICES]
      nuxt-link.link(to="/collaboration") #[span COLLABORATION]
  span.link(role="default") MORE
    div
      nuxt-link.link(to="/about") #[span WHAT WE DO]
      nuxt-link.link(to="/contact") #[span CONTACT]
      nuxt-link.link(to="/privacy") #[span PRIVACY]
</template>

<script>
import TheLogo from '@/components/icons/TheLogo'

export default {
  components: { TheLogo },

  data () {
    return {
      fill: '#01009b',
      minNavHeight: 64,
      navHeight: 300,
    }
  },

  mounted () {
    window.addEventListener('scroll', () => this.nav())
    window.addEventListener('resize', () => this.nav())
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.nav())
    window.removeEventListener('resize', this.nav())
  },

  methods: {
    nav () {
      let scrollTop = window.scrollY

      if (scrollTop < 0) {
         this.fill = '#01009b'
        this.$refs.nav.classList.remove('foo')
        this.$refs.nav.setAttribute(
          'style',
          `height: ${this.navHeight}px;`
        )
      } else if (scrollTop > 232) {
        this.fill = '#fff'
        this.$refs.nav.setAttribute(
          'style',
          `height: ${this.minNavHeight}px; background-color: #01009b;`
        )
        this.$refs.nav.classList.add('foo')
      } else {
        this.fill = '#01009b'
        this.$refs.nav.classList.remove('foo')
        this.$refs.nav.setAttribute(
          'style',
          `height: ${300 - this.minNavHeight * scrollTop / this.minNavHeight}px`
        )
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
nav
  position fixed
  top 0
  left 0
  right 0
  height 300px
  background-color white
  display flex
  align-items center
  justify-content center
  border-top 20px solid
  border-left 20px solid
  border-right 20px solid
  border-color $brandColor
.link
  // outline 1px dashed
  position relative
  min-width 100px
  font-size 14px
  text-align center
  text-decoration none
  color $brandColor
  font-weight 500
  div
    // outline 1px dashed tomato
    display none
    position absolute
    top 0
    left -10px
    right -10px
    margin-top 26px
    flex-direction column
    a
      font
  &:hover div
    display flex
  span
    border-bottom 1px solid transparent
    &:hover
      border-bottom 1px solid $brandColor
.logo
  margin-left 3vw
  margin-right 3vw
.exact-nuxt-active
  border-bottom 1px solid inherit
[role="default"]
  cursor default
.foo
  .link
    color white
  svg
    transform scale(0.7)
    g.smart
    g.living
      display none
</style>
