<template>
    <section>
        <nav class="app-nav">
            <router-link class="btn btn-primary" to="/place" exact>
                Place List
            </router-link>

            <router-link class="btn btn-warning" :to="`/place/edit/${place.id}`">
                Edit
            </router-link>
        </nav>
        <h1>{{place.name}}</h1>
        <div class="tags">
            <h4>People tagged this place has:</h4>
            <span class="tag" v-for="tag in place.tags">{{tag}} , </span>
        </div>
        <div class="map" ref="map"></div>
        <!--<ul class="clean-list">
            <li v-for="tag in place.tags">{{tag}}</li>
        </ul>-->
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
            loadPlace(placeId) {    
                this.$http.get(`place/${placeId}`)
                   .then(res => res.json())
                   .then(place => this.place = place);
           }
        },
        mounted(){
            const placeId = this.$route.params.id;
            this.loadPlace(placeId);

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
        }
        // },
        // beforeRouteLeave(to, from, next) {
        //         if (this.dataSaved) return next();
        //         if (this.place.name === this.placeToEdit.name &&
        //             this.place.lat === this.placeToEdit.lat &&
        //             this.place.lng === this.place.lng &&
        //             this.place.tags === this.place.tags)
        //         // if (this.event.name  === this.eventToEdit.name &&
        //         //     this.event.status  === this.eventToEdit.status &&
        //         //     this.event.time === this.eventToEdit.time &&
        //         //     this.event.description  === this.eventToEdit.description)
        //             return next();

        //         const ans = confirm('Change will not save!');
        //         if (ans)        next();
        //         else            next(false)
                
        // }
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
</style>