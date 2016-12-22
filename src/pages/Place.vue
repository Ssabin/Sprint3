<template>
    <section>
        <h1>Place Page</h1>
        <nav>
            <router-link to="/place" active-class="active" exact>Place List</router-link> 
            <router-link to="/place/edit" active-class="active" exact>Add Place</router-link> 
        </nav>
        <router-view></router-view>
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

</style>