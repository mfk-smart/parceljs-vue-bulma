<template lang='pug'>
nav.navbar.is-dark(role='navigation', aria-label='main navigation')
  .navbar-brand
    a.navbar-item(href='./')
      img(src='https://bulma.io/images/bulma-logo-white.png', width='112', height='28')
    a.navbar-burger.burger(role='button', aria-label='menu', aria-expanded='false', data-target='navbarBasicExample')
      span(aria-hidden='true')
      span(aria-hidden='true')
      span(aria-hidden='true')
  .navbar-menu
    .navbar-start
      a.navbar-item(:class='item.isActive ? "is-active" : ""', v-for='item in items', @click='navigateTo(item)')
        | {{ $t(item.label) }}
    .navbar-end
      .navbar-item
        .buttons
          a.button.is-small.is-black(:class='locale==="tr" ? "is-black" : "is-outlined"', @click='change_language("tr")')
            strong TR
          a.button.is-small.is-black(:class='locale==="en" ? "is-black" : "is-outlined"', @click='change_language("en")')
            strong EN
</template>
<script>
import { mapState } from 'vuex'

module.exports = {
  methods: {
    change_language(lang) {
      localStorage.setItem('locale', lang)
      this._i18n.locale = lang
    },
    navigateTo: function(item) {
      this.items.forEach(el => {
        el.isActive = false
      })
      item.isActive = true
      const link = this.$router.resolve({
        name: item.path,
      })
      console.log(link)
      if (link) {
        this.$router.push({ name: item.path })
      } else {
        alert('No route!')
      }
    },
  },
  computed: {
    locale() {
      return this._i18n.locale
    },
    ...mapState({
      items: state => state.TopMenu.menu,
    }),
  },
}
</script>
