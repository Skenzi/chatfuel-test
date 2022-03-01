<template>
    <section class="sidebar">
        <h2 class="sidebar__header">Боты</h2>
        <ol class="sidebar__list">
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
<style lang="scss">
    .sidebar {
        flex: 1;
        background-color: var(--second-color);
        &__header {
            padding: var(--header-p);
            color: var(--main-color);
        }
        &__list {
            padding: 0 20px 20px 20px;
            & .list__item + .list__item {
                margin-top: 10px;
            }
        }
        &__button {
            width: 100%;
            padding: 20px;
            color: var(--second-color);
            background-color: var(--main-color) !important;
            &:hover {
                background-color: rgb(255, 253, 253) !important;
            }
        }
    }
</style>