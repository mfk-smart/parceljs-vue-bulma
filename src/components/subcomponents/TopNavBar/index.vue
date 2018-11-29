<template lang='pug'>
    div.topmenu.level.has-background-grey
        div.level-left
            div.level-item.accbutton
                a.has-text-white.is-size-4(href="#", @click='toggle'): div.fas.fa-bars
        div.level-item.has-text-centered
            div.is-size-6
                | Kullanıcı Yönetim Platformu
        div.level-left
            div.level-item
                div.signout
                    a.has-text-white.is-size-4(href="../../../index.html"): div.fas.fa-sign-out-alt
</template>
<script>
// import './topNavbar.scss'

module.exports = {
  methods: {
    toggle() {
      if (this.$store.state.SideMenu.isMenuOpen) {
        this.$store.commit('SideMenu/close')
      } else {
        this.$store.commit('SideMenu/open')
      }
    },
  },
}
</script>
<style lang='scss' scoped>
.topmenu {
  color:white;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  margin-bottom: 0px !important;
}
</style>
