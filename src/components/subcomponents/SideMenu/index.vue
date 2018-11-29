<template lang='pug'>
    div(:class="['sidemenu','has-background-dark', isOpen ? '' : 'collapsed']")
        ul
          li(v-for='item in menu')
            a.accordion(href="#", @click='expandMenu(item)')
              span(:class="['icon', item.isActive ? 'expanded' : '']")
                i.is-size-7.fas.fa-angle-right
              span.is-size-7 {{ item.label }}
            div(:class="['panel', item.isActive ? 'expanded' : '']")
                ul
                   li(v-for='child in item.children',:class="['is-size-7', child.isActive ? 'active' : '']", @click='navigateTo(child)') {{ child.label }}
</template>
<script>
import { mapState } from 'vuex'

module.exports = {
  computed: {
    ...mapState({
      isOpen: state => state.SideMenu.isMenuOpen,
      menu: state => state.SideMenu.menu,
    }),
  },

  methods: {
    expandMenu: function(item) {
      this.menu.forEach(item => {
        item.isActive = false
      })
      item.isActive = !item.isActive
      console.log('item isActive : ' + item.isActive)
    },
  },
}
</script>
<style lang='scss'>
.sidemenu {
  // background-image: linear-gradient(to bottom right, #9f3f4a, #16397d);
  height: 100vh;
  width: 200px;
  transition: 0.3s margin-left ease-out;
  &.collapsed {
    margin-left: -200px;
  }
  ul {
    ul {
      li {
        cursor: pointer;
        padding: 5px 5px 5px 29px;
        color: white;
        &:hover,
        &.active {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
    li {
      a {
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
        width: 100%;
        height: 30px;
        display: block;
        padding: 0px;
        box-sizing: border-box;
      }
      .accordion {
        cursor: pointer;
        transition: 0, 5s;
        &.active,
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .icon {
          transform-origin: center;
          transition: 0.3s all ease-in-out;
          &.expanded {
            transform: rotate(90deg);
          }
          .fa-angle-right {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
      .panel {
        max-height: 0px;
        overflow: hidden;
        transition: max-height 100ms ease-out;
        &.expanded {
          max-height: 100px;
        }
      }
    }
  }
}
</style>
