<template>
    <Header></Header>
    <router-view :key="$route.fullPath"></router-view>
</template>
<script>
import Header from './Header.vue';

export default{
    components:{
        Header
    }
}
</script>