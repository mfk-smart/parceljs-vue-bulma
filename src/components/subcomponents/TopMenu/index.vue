<template lang='pug'>
nav.navbar.is-dark(role='navigation', aria-label='main navigation')
  .navbar-brand
    a.navbar-item(href='https://bulma.io')
      img(src='https://bulma.io/images/bulma-logo-white.png', width='112', height='28')
    a.navbar-burger.burger(role='button', aria-label='menu', aria-expanded='false', data-target='navbarBasicExample')
      span(aria-hidden='true')
      span(aria-hidden='true')
      span(aria-hidden='true')
  #navbarBasicExample.navbar-menu
    .navbar-start
      a.navbar-item(v-for='item in items')
        | {{ item.label }}
    .navbar-end
      .navbar-item
        .buttons
          a.button.is-primary
            strong Sign up
          a.button.is-light
            | Log in
</template>
<script>
import { mapState } from 'vuex'

module.exports = {
  computed: {
    ...mapState({
      items: state => state.TopMenu.menu,
    }),
  },
}
</script>
