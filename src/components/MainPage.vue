<template>
    <ListBots :bots="bots" :setActiveBot="setActiveBot" />
    <ListUsers :users="users" :activeBot="activeBot" />
</template>
<script>
import ListUsers from './ListUsers.vue';
import ListBots from './ListBots.vue';
export default {
    props: {
        bots: Array,
        users: Array,
        activeBot: Number,
        setActiveBot: Function,
    },
    setup() {
        
    },
    components: {
        ListUsers,
        ListBots,
    }
}
</script>