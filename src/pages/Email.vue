<template>
    <section>
        <h1 class="">Email</h1>
        <!--<nav class="app-nav">
            <button class="btn btn-primary">
                <router-link to="/email" exact>Email List</router-link>
            </button>
            <button class="btn btn-primary">
                <router-link to="/email/compose" exact>Add Email</router-link>
            </button>
        </nav>-->
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
</style>