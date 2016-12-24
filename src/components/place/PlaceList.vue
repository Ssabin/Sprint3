<template>
    <section class="place-list-section">
         {{filteredPlaces}}
        <div class="map" ref="map"></div>
        <button @click="removeMarkers">Remove markers</button>
        
       
        
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
                console.log(this.filteredPlaces)
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
            },
            createMap() {
                this.map = new google.maps.Map(this.$refs.map, this.mapOptions);
                this.loadMarkers();
            }
        },
        watch: {
            filteredPlaces(curr, prev) {
                console.log('curr', curr)
                console.log('prev', prev)
                this.removeMarkers();
                if(prev.length !== 0) {
                    this.loadMarkers();
                }
            }    
        },
        components:{
          PlacePreview
        },
        // created monuted !?!
        mounted() {
            

            GoogleMapsLoader.load(google => {
                var myLatlng = new google.maps.LatLng(32.106529235839844, 34.83524703979492);
                this.mapOptions = {
                    center: myLatlng,
                    zoom: 2,
                    zoomControl: true
                };
                this.map = new google.maps.Map(this.$refs.map, this.mapOptions);
                this.loadMarkers();
                     
            });

            // console.log(this.filteredPlaces)
               
        },
        beforeMount() {
            }
        // mounted() {
        //     console.log('mounted')
        //     console.log(this.isMapCreated)
        //     console.log(this.$refs)
        //     if (!this.isMapCreated) {
        //         this.createMap()
        //         // this.loadMarkers()
        //         };
            
        // }
           
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