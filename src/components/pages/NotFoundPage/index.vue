<template lang='pug'>
    div
        section.hero.is-dark.is-fullheight-with-navbar
          .hero-body
            .is-overlay.has-background-black Test
            .container
              h1.title
                | {{ $t('notfound_404') }}
              h2.subtitle
                | {{ $t('notfound_description') }}
</template>
<script>
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
  mounted() {
    this.menu.forEach(item => {
      item.isActive = false
    })
  },
}
</script>
<style scoped>
.is-overlay {
  opacity: 0.6;
}
.hero-body {
  background: url(../../../images/wil-stewart-23388-unsplash.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
