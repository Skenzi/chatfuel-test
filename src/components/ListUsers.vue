<template>
    <section class="users">
        <h2 class="users__header">
            Список пользователей
        </h2>
        <ul class="users__list">
            <UsersItem v-for="user in currUsers" v-bind:user="user" v-bind:key="user.id" />
        </ul>
    </section>
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
<style lang="scss">
    .users {
        flex: 5;
        background-color: var(--main-color);
        &__header {
            padding: var(--header-p);
            color: var(--second-color);
        }
        &__list {
            padding: 0 20px 20px 20px;
            & .list__item {
                display: flex;
                padding: 20px;
                background-color: var(--second-color);
                color: var(--main-color);
                & + .list__item {
                    margin-top: 10px;
                }
                & .item__text {
                    margin-left: 15px;
                }
            }
        }
    }
</style>