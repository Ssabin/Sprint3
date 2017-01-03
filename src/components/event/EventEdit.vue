<template>
    <section>
        <nav class="app-nav">
            <router-link class="btn btn-main" to="/event" exact>Event List</router-link>
        </nav>
        <h1>Event Edit Section</h1>
        <form>
            <div class="form-group">
                <input class="form-control" ref="name" type="text" placeholder="title" v-model.lazy="eventToEdit.name">
            </div>
            <div class="form-group">
                <input class="form-control" ref="address" type="text" placeholder="address" v-model.lazy="eventToEdit.venue.address_1">     
            </div>
            <div class="form-group">
                <input class="form-control" ref="date" type="date" :value="inputDateFormat" @input="getTimeStamp" />
            </div>
            <div class="form-group">
                <input class="form-control" ref="time" type="time" :value="inputTimeFormat" @input="getTimeStamp" />
            </div>
            <div class="form-group">
                <input class="form-control" ref="link" type="text" placeholder="Event link" v-model.lazy="eventToEdit.link" />
            </div>
            <div class="form-group">
                <textarea class="form-control" ref="description" cols="30" rows="10" v-model.lazy="eventToEdit.description"></textarea>
            </div>
            <button class="btn btn-add" @click.prevent="save">Save</button>
            <!--<button class="btn btn-warning" @click.prevent="resetForm">Reset</button>-->
            <button class="btn btn-delete" @click.prevent="goBack">Cancel</button>
            <!--Todo: Geocode search input-->
        </form>
    </section>
</template>

<script>
    // import GoogleMapsLoader from 'google-maps'; 
    // GoogleMapsLoader.KEY = 'AIzaSyCt_f62xnUudkGEFHC7UgShw58cYlVXf24';
    // GoogleMapsLoader.LIBRARIES = ['places'];
    
    export default {
        data () {
            return {     
                event:{
                    "created": 1478090304000,
                    "duration": 9000000,
                    "name": "",
                    "status": "upcoming",
                    "time": new Date().getTime(),
                    "updated": 0,
                    "utc_offset": 7200000,
                    "waitlist_count": 0,
                    "yes_rsvp_count": 0,
                    "venue": {
                        "id": 4761372,
                        "name": "Kenshoo",
                        "lat": 32.106529235839844,
                        "lon": 34.83524703979492,
                        "repinned": false,
                        "address_1": "",
                        "city": "Tel Aviv-Yafo",
                        "country": "il",
                        "localized_country_name": "Israel"
                    },
                    "group": {
                        "created": 1456749346000,
                        "name": "Tech-Talk-Teach",
                        "id": 19641607,
                        "join_mode": "open",
                        "lat": 32.06999969482422,
                        "lon": 34.77000045776367,
                        "urlname": "Tech-Talk-Teach",
                        "who": "Members"
                    },
                    "link": "",
                    "manual_attendance_count": 0,
                    "description": "",
                    "visibility": "public"
                },
                dataSaved: false
            }
        },
        computed:{
            eventToEdit(){
                return Object.assign({} , this.event);
            },
            inputDateFormat(){
                return this.getInputDateFormat(this.eventToEdit.time)
            },
            inputTimeFormat(){
                return this.getInputTimeFormat(this.eventToEdit.time)
            },
            addressToSearch(){
                return `https://maps.googleapis.com/maps/api/geocode/json?address=${this.event.venue.address_1}&key=AIzaSyCt_f62xnUudkGEFHC7UgShw58cYlVXf24`
            }
        },
        methods: {
            loadEvent(eventId) {
                this.$http.get(`event/${eventId}`)
                   .then(res => res.json())
                   .then(event => this.event = event);
           },
            getTimeStamp(){
                this.eventToEdit.time = new Date(`${this.$refs.date.value} ${this.$refs.time.value}`).getTime();
            },
            getInputDateFormat(timeStamp){
                let d = new Date(timeStamp);
                let formatedDate = `${d.getFullYear()}-${(d.getMonth() + 1) > 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}-${d.getDate() > 10 ? d.getDate() : '0' + d.getDate()}`;
                return formatedDate;
            },
            getInputTimeFormat(timeStamp){
                let d = new Date(timeStamp);
                let formatedTime = `${d.getHours() > 10 ?d.getHours():('0' + d.getHours())}:${d.getMinutes() > 10 ?d.getMinutes():('0' + d.getMinutes())}`;
                return formatedTime;
            },
            resetForm(){
                this.$refs.name.value = this.event.name; 
                this.$refs.status.value = this.event.status; 
                this.$refs.date.value = this.getInputDateFormat(this.event.time);
                this.$refs.time.value = this.getInputTimeFormat(this.event.time);
                this.$refs.description.value = this.event.description; 
                this.$refs.link.value = this.event.link; 
            },
            goBack(){
                window.history.back();                
            },
           save() {
                let that = this;
                toastr.options.closeButton = true;
                toastr.options.timeOut = 1000;
                toastr.success('The event have been saved');
                function handleResult(res) {
                    res.json()
                   .then(res => {
                        console.log("Result from server", res);
                        this.dataSaved = true;
                        this.$router.push('/event');
                       }) 
                }

                this.$http.get(this.addressToSearch)
                    .then(res => res.json())
                    .then(address => {
                        this.eventToEdit.venue.address_1 = address.results[0].formatted_address;
                        // console.log(address)
                        this.eventToEdit.venue.lat = address.results[0].geometry.location.lat;
                        this.eventToEdit.venue.lng = address.results[0].geometry.location.lng;
                        console.log('Saving', this.eventToEdit);
                        if (this.eventToEdit.id)  this.$http.put(`event`, this.eventToEdit).then(handleResult);
                        else this.$http.post('event', this.eventToEdit).then(handleResult);
                    })
            },
    },
    created(){
            const eventId = this.$route.params.id;
            if(eventId)     this.loadEvent(eventId);
    },
    mounted() {
            // console.log(this.$refs.address);

            // let defaultBounds = new google.maps.LatLngBounds(
            // new google.maps.LatLng(-33.8902, 151.1759),
            // new google.maps.LatLng(-33.8474, 151.2631));

            // let input = this.$refs.address;
            // let options = {
            //     bounds: defaultBounds,
            //     // types: ['establishment']
            // };

            // let autocomplete = new google.maps.places.Autocomplete(input, options);
    },
    beforeRouteLeave(to, from, next) {
            if (this.dataSaved) return next();
            if (this.event.name  === this.eventToEdit.name &&
                this.event.status  === this.eventToEdit.status &&
                this.event.time === this.eventToEdit.time &&
                this.event.description  === this.eventToEdit.description)
                return next();

            const ans = confirm('Change will not save!');
            if (ans)        next();
            else            next(false)
            
    }
}
</script>

<style scoped>

</style>