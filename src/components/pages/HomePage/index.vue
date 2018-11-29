<template lang='pug'>
    div
        section.hero.is-dark.is-fullheight-with-navbar
          .hero-body
            .is-overlay.has-background-black Test
            .container
              h1.title
                | {{ $t('home_title') }}
              h2.subtitle
                | {{ $t('home_subtitle') }}
</template>
<script>
import { mapState } from 'vuex'
import SideMenu from '../../../components/subcomponents/SideMenu'

module.exports = {
  components: {
    sidemenu: SideMenu,
  },
  computed: {
    locale() {
      return this._i18n.locale
    },
    ...mapState({
      menu: state => state.TopMenu.menu,
    }),
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
  opacity: 0.6;
}
.hero-body {
  background: url(../../../images/rich-tervet-662093-unsplash.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
