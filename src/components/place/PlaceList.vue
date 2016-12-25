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
                map: null,
                markers: []
                 
            }
        },
        methods: {
            removeMarkers() {

                for (var i = 0; i < this.markers.length; i++) {
                    this.markers[i].setMap(null);
                }
                this.markers = [];
            },
            loadMarkers() {
                console.log('filteredPlaces',this.filteredPlaces)
                this.filteredPlaces.forEach(place => {
                    let lat = place.lat;
                    let lng = place.lng;
                    let myLatlng = new google.maps.LatLng(lat,lng);
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: this.map,
                     });
                    this.markers.push(marker);
                     
                    marker.addListener('click' , () => {
                        this.$router.push(`/place/${place.id}`);
                    });
                });
            }
        },
        watch: {
            filteredPlaces(curr, prev) {
                console.log('curr', curr)
                console.log('prev', prev)
                if(this.map) {
                    this.removeMarkers();
                    this.loadMarkers();
                }
            }    
        },
        components:{
          PlacePreview
        },
        mounted() {
            GoogleMapsLoader.load(google => {
                var myLatlng = new google.maps.LatLng(32.106529235839844, 34.83524703979492);
                this.mapOptions = {
                    center: myLatlng,
                    zoom: 12,
                    zoomControl: true
                };
                this.map = new google.maps.Map(this.$refs.map, this.mapOptions);
                this.loadMarkers();
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