<template>
    <section>
        <!--<h1>Event Details Section</h1>-->
        <h1>{{event.name}}</h1>
        <p><strong>Status:</strong> {{event.status}}</p>
        <div v-html="event.description"></div>
        <p><strong>Location:</strong> {{event.venue.address_1}} - {{event.venue.city}} </p>
        <p>Time: {{new Date(event.time)}}</p>
        <p>Link: <a :href="event.link">MEETUP</a> </p>

        <router-link :to="`/event/edit/${event.id}`">Edit</router-link>
        <div class="map" ref="map">
            <hr>
    </section>
</template>

<script>

    import GoogleMapsLoader from 'google-maps'; 
    GoogleMapsLoader.KEY = 'AIzaSyCt_f62xnUudkGEFHC7UgShw58cYlVXf24';
    export default {
        
        data () {
            // if null insted of object 
            // loadEvent lo maspik to load .....
            // should make loader in case the call to server takes time
            return {    
                event: {venue:{}}   
            }
        },
        methods: {
            loadEvent(eventId) {
                
                this.$http.get(`event/${eventId}`)
                   .then(res => res.json())
                   .then(event => this.event = event);
           }
        },
        created(){
            const eventId = this.$route.params.id;
            console.log(eventId);

            this.loadEvent(eventId);
        },
        updated() {


            // Some events have lon/lat of zero!!!
            const lat = this.event.venue.lat;
            const lon = this.event.venue.lon;
            GoogleMapsLoader.load(google => {
                var myLatlng = new google.maps.LatLng(lat, lon);
                var mapOptions = {
                    center: myLatlng,
                    zoom: 15,
                    zoomControl: true
                };

                var map = new google.maps.Map(this.$refs.map, mapOptions);

                new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'Hello World!',
                    animation: google.maps.Animation.DROP
                });
            });       
        }
    }
</script>

<style scoped>
    .map {
        width: 400px;
        height: 400px;
    }
</style>