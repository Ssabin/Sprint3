<template>
    <section class="place-list-section">
        <div class="map" ref="map"></div>
    </section>
</template>

<script>

    import GoogleMapsLoader from 'google-maps'; 
    GoogleMapsLoader.KEY = 'AIzaSyCt_f62xnUudkGEFHC7UgShw58cYlVXf24';

    import PlacePreview from './PlacePreview.vue'
    export default {
        props:{
            filteredPlaces:{
                required: true,
                type: Array
            }
        },
        data () {
            return {        
            }
        },
        methods: {
        },
        components:{
          PlacePreview
        },
        created() {
            GoogleMapsLoader.load(google => {
                var myLatlng = new google.maps.LatLng(32.106529235839844, 34.83524703979492);
                var mapOptions = {
                    center: myLatlng,
                    zoom: 15,
                    zoomControl: true
                };

                var map = new google.maps.Map(this.$refs.map, mapOptions);
                this.filteredPlaces.forEach(place => {
                    let lat = place.lat;
                    let lng = place.lng;
                    let myLatlng = new google.maps.LatLng(lat,lng);
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        title: 'Hello World!',
                        animation: google.maps.Animation.DROP
                     });
                    marker.addListener('click' , () => {
                        this.$router.push(`/place/${place.id}`);
                    });
                });
            });       
        }
    }
</script>

<style scoped>
    .place-list-section {
        height: 100%;
        width: 100%;
    }
    
    .map {
        margin: 0 auto;
        width: 80%;
        height: 400px;
    }
</style>