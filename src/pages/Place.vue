<template>
    <section>
        <h1>Place Page</h1>
        <nav>
            <router-link to="/place" active-class="active" exact>Place List</router-link> 
            <router-link to="/place/edit" active-class="active" exact>Add Place</router-link> 
        </nav>
        <router-view :places="places"></router-view>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                places: []        
            }
        },
        methods: {
            loadPlaces() {
                this.$http.get('place')
                   .then(res => res.json())
                   .then(places => this.places = places);
                // this.carToEdit = undefined;   
                // this.showCarEdit = false;
           }

        },
        components: {
           
        },
        created(){
            this.loadPlaces();
        }
    }
</script>

<style scoped>

</style>