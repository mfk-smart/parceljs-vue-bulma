<template lang='pug'>
    div
        topmenu
        h1.title Welcome
        p This is home view

        .container
          .box
            .notification.is-primary {{ $t('message.hello') }}
</template>
<script>
const TopMenu = () => import('../../subcomponents/TopMenu/index.vue')

module.exports = {
    components: {
        'topmenu':TopMenu,
    }
}
</script>
