<template>
    <section>
        <h1>Home Page</h1>
        <about></about>
        <contact></contact>
    </section>
</template>

<script>
    import About from '../components/home/About.vue'
    import Contact from '../components/home/Contact.vue'
    export default {
        data () {
            return {        
            }
        },
        methods: {
        },
        components: {
           About ,
           Contact
        }
    }
</script>

<style scoped>

</style>