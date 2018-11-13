<template lang='pug'>
    div 
      TopMenu
      h1.title Your Brand New Page
      h1.subtitle This is from template
      p This is new page
      
</template>
<script>
const TopMenu = () => import('../../subcomponents/TopMenu/index.vue')
module.exports = {
    components: {
       TopMenu,
    }
}
</script>
