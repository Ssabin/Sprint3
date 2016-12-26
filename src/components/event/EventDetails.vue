<template>
    <section class="event-details">
        <nav class="app-nav">
            <router-link class="btn btn-main" to="/event" exact>Event List</router-link>
            <router-link class="btn btn-add" :to="`/event/edit/${event.id}`">Edit</router-link>
        </nav>
        <h1>{{event.name}}</h1>
        <p><strong>Status:</strong> {{event.status}}</p>
        <div class="description" v-html="event.description"></div>
        <p><strong>Location:</strong> {{event.venue.address_1}} - {{event.venue.city}} </p>
        <p><strong>Time:</strong> {{formatedDate}}</p>
        <p><strong>Link:</strong> <a :href="event.link">MEETUP</a> </p>

        <div class="map" ref="map"></div>
        <!--<hr>-->
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
                event: {venue:{},description: ''}   
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
            this.loadEvent(eventId);
        },
        computed: {
            formatedDate() {
                const event = this.event;
                const time = new Date(event.time);
                const day = time.getDate();
                const month = time.getMonth() + 1;
                const year = time.getFullYear();
                const hour = time.getHours();
                let minute = time.getMinutes();

                if (minute < 10) {
                    minute = '0' + minute;
                }

                return `${day}/${month}/${year} - ${hour}:${minute}`;
            }
        },
        updated() {
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

<style>
    .map {
        max-width: 400px;
        height: 400px;
    }
    
    .event-details {
        position: relative;
        width: 60%;
    }
    
    img {
        max-width: 100%;
        width: 100%;
    }
    
    @media screen and (max-width: 768px) {
        .event-details {
            width: 90%;
            margin: 0 auto;
        }
    }
</style>