<template>
    <ol>
        <BotsItem :bot="bot" :setActiveBot="setActiveBot" v-for="bot in bots" :key="bot.id" />
    </ol>
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