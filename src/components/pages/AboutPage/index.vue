<template lang='pug'>
    div 
      TopMenu
      section.hero.is-info.is-medium
        .hero-body
          .is-overlay
          .container
            h1.title
              | Hakkında
            h2.subtitle
              | Vuejs, Bulma, Parcel
      section.blog-body
          .tile.is-ancestor
            .tile.is-4.is-vertical.is-parent
              .tile.is-child.box
                p.title Parcel
                p Blazing fast, zero configuration web application bundler
                a(target='_blank', href='https://parceljs.org') https://parceljs.org
              .tile.is-child.box
                p.title Bulma
                p Bulma is an open source CSS framework based on Flexbox and used by more than 100,000 developers
                a(target='_blank', href='https://bulma.io') https://bulma.io
            .tile.is-parent
              .tile.is-child.box
                p.title Vuejs
                p Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
                a(target='_blank', href='https://vuejs.org') https://vuejs.org
</template>
<script>
const TopMenu = () => import('../../subcomponents/TopMenu/index.vue')
import { mapState } from 'vuex'

module.exports = {
  components: {
    TopMenu,
  },
  computed: {
    ...mapState({
      menu: state => state.TopMenu.menu,
    }),
  },
  mounted() {
    this.menu.forEach(item => {
      if (item.label === 'nav_aboutus') {
        item.isActive = true
      } else {
        item.isActive = false
      }
    })
  },
}
</script>
<style scoped>
.blog-body {
  padding: 10px;
}
.is-overlay {
  background: black;
  opacity: 0.6;
}
.hero-body {
  position: relative;
  background: url(../../../images/chad-kirchoff-202730-unsplash.jpg);
  background-position: 0px 0px;
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
