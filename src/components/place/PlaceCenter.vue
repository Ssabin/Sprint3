<template>
    <section>
        <h1>Event Center Section</h1>
        <place-filter></place-filter>
        <place-list :filteredPlaces="filteredPlaces"></place-list>
    </section>
</template>

<script>
    import PlaceFilter from './PlaceFilter.vue'
    import PlaceList from './PlaceList.vue'
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
           }
        },
        created(){
            this.loadPlaces();
        },
        components:{
            PlaceFilter,
            PlaceList
        },
        computed: {
            filteredPlaces() {
                return this.places;
            }
        }
    }
</script>

<style scoped>

</style>