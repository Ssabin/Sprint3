<template>
    <section>
        <h1>Email Page</h1>
        <nav>
            <router-link to="/email" active-class="active" exact>Email List</router-link> 
            <router-link to="/email/compose" active-class="active" exact>Add Email</router-link> 
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