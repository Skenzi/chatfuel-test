<template>
    <section class="sidebar">
        <h2 class="header">Боты</h2>
        <ol class="list">
            <BotsItem :bot="bot" :setActiveBot="setActiveBot" v-for="bot in bots" :key="bot.id" />
        </ol>
    </section>
</template>
<script>
import BotsItem from './BotsItem.vue';
export default {
    props: {
        bots: Array,
        setActiveBot: Function,
    },
    setup() {
        
    },
    components: {
        BotsItem,
    }
}
</script>