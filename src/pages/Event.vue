<template>
    <section class="eventBg">
        <h1 class="page-title">Events</h1>
        <router-view class="app-container well"></router-view>
    </section>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods: {
        },
        components: {
           
        },
        created(){
        }
    }
</script>

<style scoped>
    .app-nav{
        margin: 10px 0;
        text-align: center;
    }
    .eventBg{
        height: 100%;
        background-image: url('../assets/imgs/cover2.jpg'); 
        background-attachment: fixed;
        background-position: center center;
        background-repeat: repeat;
        background-size: cover;
    }
</style>