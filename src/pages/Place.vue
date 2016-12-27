<template>
    <section ref="place" class="placeBg">
        <h1 class="page-title">Places</h1>
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
    .placeBg{
        height: 100%;
        background-image: url('../assets/imgs/cover3.jpg'); 
        background-attachment: fixed;
        background-position: center center;
        background-repeat: repeat;
        background-size: cover;
    }
</style>