<template lang='pug'>
    div.columns.is-gapless
        div.column.is-narrow
            sidemenu
        div.column
            topnavbar
            router-view
</template>
<script>
// const TopMenu = () => import('../../subcomponents/TopMenu/index.vue')
import SideMenu from '../../../components/subcomponents/SideMenu'
import TopNavBar from '../../../components/subcomponents/TopNavBar'

module.exports = {
  components: {
    sidemenu: SideMenu,
    topnavbar: TopNavBar,
  },
}
</script>
