<template>
    <li>
        <button type="button" v-on:click="setActiveBot(bot.id)">{{bot.name}}</button>
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