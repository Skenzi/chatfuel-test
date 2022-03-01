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
<style>
    :root {
        --main-color: rgb(223, 217, 217);
        --second-color: rgb(95, 90, 90);
        --header-p: 20px;
        --darkgrey: rgb(92, 85, 85);
    }
    * {
        box-sizing: border-box;
    }
    body, ol, ul, h1, h2 {
        margin: 0;
    }
    ol, ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    .container {
        margin: auto;
        max-width: 1380px;
    }
</style>