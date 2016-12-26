<template>
    <section>
        <nav class="app-nav">
            <router-link class="btn btn-main" to="/place" exact>
                Place List
            </router-link>

            <router-link class="btn btn-add" :to="`/place/edit/${place.id}`">
                Edit
            </router-link>
        </nav>
        <h1>{{place.name}}</h1>
        <div class="tags">
            <h4>People tagged this place has:</h4>
            <ul class="clean-list">
                <li v-for="tag in place.tags">{{tag}}</li>
            </ul>
            <!--<span class="tag" v-for="tag in place.tags">{{tag}} , </span>-->
        </div>
        <div class="map" ref="map"></div>
        
    </section>
</template>

<script>
    import GoogleMapsLoader from 'google-maps'; 
    GoogleMapsLoader.KEY = 'AIzaSyCt_f62xnUudkGEFHC7UgShw58cYlVXf24';

    export default {
        data () {
            return {    
                place: {id: 1}            
            }
        },
        methods: {
        },
        updated() {
             GoogleMapsLoader.load(google => {
                var myLatlng = new google.maps.LatLng(this.place.lat, this.place.lng);
                this.mapOptions = {
                    center: myLatlng,
                    zoom: 12,
                    zoomControl: true
                };
                
                let map = new google.maps.Map(this.$refs.map, this.mapOptions);
                
                new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'Hello World!',
                    animation: google.maps.Animation.DROP
                });
            });

        },
        created() {
            const placeId = this.$route.params.id;            
             this.$http.get(`place/${placeId}`)
                   .then(res => res.json())
                   .then(place => this.place = place);
            
        }
    }
</script>

<style scoped>
    .tags {
        text-align: center;
    }
    
    .map {
        width: 100%;
        max-width: 100%;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>