<template>
    <section>
        <nav class="app-nav">
                <router-link class="btn btn-primary" to="/place/edit" exact>
                    Add Place
                </router-link> 
        </nav>
        <place-filter @filterPlaces="updateFilter"></place-filter>
        <place-list :filteredPlaces="filteredPlaces"></place-list>
    </section>
</template>

<script>
    import PlaceFilter from './PlaceFilter.vue'
    import PlaceList from './PlaceList.vue'
    export default {
        data () {
            return {     
                places: [], 
                filter: {
                    txt: '',
                    mode: 'N'
                }
            }
        },
        methods: {
            loadPlaces() {
                this.$http.get('place')
                   .then(res => res.json())
                   .then(places => this.places = places);
           },
           updateFilter(filter){
               this.filter = filter;
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
                return this.places.filter(place => {
                    if (this.filter.mode === 'N'){
                        return place.name.toLowerCase().includes(this.filter.txt.toLowerCase());
                    } else {
                        return place.tags.some(tag => tag.toLowerCase().includes(this.filter.txt.toLowerCase()))
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>