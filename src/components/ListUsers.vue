<template>
    <ul class="list-cards">
        <UsersItem v-for="user in currUsers" v-bind:user="user" v-bind:key="user.id" />
    </ul>
</template>
<script>
import UsersItem from './UsersItem.vue';
export default {
    setup() {
        
    },
    props: {
        users: Array,
        activeBot: Number,
    },
    components: {
        UsersItem,
    },
    computed: {
        currUsers: function() {
            const test = this.users.filter((user) => user.subscribes.includes(this.activeBot));
            console.log(test, this.activeBot)
            return test;
        }
    }
}
</script>