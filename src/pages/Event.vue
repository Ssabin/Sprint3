<template>
    <section>
        <h1>Event Page</h1>
        <nav>
            <router-link to="/event" active-class="active" exact>Event List</router-link> 
            <router-link to="/event/edit" active-class="active" exact >Add Event</router-link> 
        </nav>
        <router-view ></router-view>
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

</style>