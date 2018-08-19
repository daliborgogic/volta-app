<template lang="pug">
footer
  nuxt-link(to="/contact") CONTACT
  nuxt-link(to="/about") WHAT WE DO
  nuxt-link(to="/collaboration") COLLABORATION
  nuxt-link(to="/privacy") PRIVACY
</template>

<style lang="stylus" scoped>
footer
  padding-top 20px
  background-color #01009b
  height 300px
  display flex
  align-items center
  justify-content center
a
  color white
  text-decoration none
  padding 0 1.5vw
  font-szie 14px
  font-weight 500
</style>
