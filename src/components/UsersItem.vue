<template>
    <li class="list__item">
        <div class="item__img"><img alt="avatar" v-bind:src="user.avatar"></div>
        <div class="item__text">{{user.name}}</div>
    </li>
</template>
<script>
export default {
    name: 'UsersItem',
    props: {
        user: Object,
    }
};
</script>
