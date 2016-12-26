<template>
    <section class="emailBg">
        <h1 class="page-title">Email</h1>
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
           
        }
    }
</script>

<style scoped>
    .emailBg{
        height: 100vh;
        background-image: url('../assets/imgs/cover1.jpg'); 
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>