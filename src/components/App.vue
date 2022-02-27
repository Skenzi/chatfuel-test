<template>
    <MainPage :users="state.users" :setActiveBot="setActiveBot" :activeBot="state.activeBot" :bots="state.bots" />
</template>
<script>
import { reactive } from 'vue';
import MainPage from './MainPage.vue';
export default {
    name: 'App',
    setup() {
        const state = reactive({
            users: [
                { id: 0, name: 'user1', subscribes: [0,1], avatar: '#'},
                { id: 1, name: 'user2', subscribes: [1,2], avatar: '#'},
                { id: 2, name: 'user3', subscribes: [0], avatar: '#'},
                { id: 3, name: 'user4', subscribes: [2], avatar: '#'}
            ],
            bots: [
                { id: 0, name: 'bot1', followers: ['user1', 'user3'] },
                { id: 1, name: 'bot2', followers: ['user1', 'user2'] },
                { id: 2, name: 'bot3', followers: ['user2', 'user4'] },
            ],
            activeBot: 0,
        });
        return {
            state,
        }
    },
    methods: {
        setActiveBot: function(id) {
            this.state.activeBot = id;
        }
    },
    components: {
        MainPage,
    },
}
</script>