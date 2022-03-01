<template>
    <li class="list__item">
        <button type="button" class="button sidebar__button" v-on:click="setActiveBot(bot.id)">{{bot.name}}</button>
    </li>
</template>
<script>
export default {
    props: {
        bot: Object,
        setActiveBot: Function,
    },
    setup() {
        
    },
}
</script>