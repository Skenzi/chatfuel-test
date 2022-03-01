<template>
<main class="main">
    <SideBar :bots="bots" :setActiveBot="setActiveBot" />
    <ListUsers :users="users" :activeBot="activeBot" />
</main>
</template>
<script>
import ListUsers from './ListUsers.vue';
import SideBar from './SideBar.vue';
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
        SideBar,
    }
}
</script>
<style lang="scss">
    .main {
        display: flex;
        height: 100vh;
    }
    .button {
        border: none;
        background: transparent;
        cursor: pointer;
    }
</style>