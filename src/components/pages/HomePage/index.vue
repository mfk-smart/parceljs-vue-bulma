<template lang='pug'>
    div
        topmenu
        section.hero.is-dark.is-fullheight-with-navbar
          .hero-body
            .is-overlay Test
            .container
              h1.title
                | {{ $t('home_title') }}
              h2.subtitle
                | {{ $t('home_subtitle') }}
</template>
<script>
const TopMenu = () => import('../../subcomponents/TopMenu/index.vue')
import { mapState } from 'vuex'

module.exports = {
  computed: {
    locale() {
      return this._i18n.locale
    },
    ...mapState({
      menu: state => state.TopMenu.menu,
    }),
  },
  components: {
    topmenu: TopMenu,
  },
  mounted() {
    this.menu.forEach(item => {
      if (item.label === 'nav_home') {
        item.isActive = true
      } else {
        item.isActive = false
      }
    })
  },
}
</script>
<style scoped>
.is-overlay {
  background: black;
  opacity: 0.6;
}
.hero-body {
  background: url(../../../images/rich-tervet-662093-unsplash.jpg);
  background-size: 150%;
  background-repeat: no-repeat;
}
</style>
