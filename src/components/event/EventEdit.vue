<template>
    <section>
        <h1>Event Edit Section</h1>
        <div>
            <input ref="name" type="text" placeholder="title" v-model.lazy="eventToEdit.name">
            <div>
                <input ref="status" type="text" placeholder="status" v-model.lazy="eventToEdit.status"> | 
                <input ref="time" type="date" :value="inputDateFormat" @input="getTimeStamp($event)"/>
            </div>
            <!--Todo: Geocode search input-->
            <input ref="link" type="text" placeholder="Event link" v-model.lazy="eventToEdit.link"/>
            <br>
            <textarea ref="description" cols="30" rows="10" v-model.lazy="eventToEdit.description"></textarea>
            <button @click.prevent="save">Save</button>
            <button @click.prevent="resetForm">Reset</button>
        </div>
        <hr>
    </section>
</template>

<script>
    export default {
        data () {
            return {     
                event:{
                    "created": 1478090304000,
                    "duration": 9000000,
                    "name": "",
                    "status": "upcoming",
                    "time": 0,
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
                        "address_1": "HaBarzel 6",
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
            }
        },
        methods: {
            loadEvent(eventId) {
                this.$http.get(`event/${eventId}`)
                   .then(res => res.json())
                   .then(event => this.event = event);
           },
            getTimeStamp(ev){
                this.eventToEdit.time = new Date(ev.target.value).getTime();
            },
            getInputDateFormat(timeStamp){
                let d = new Date(timeStamp);
                let formatedDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
                return formatedDate;
            },
            resetForm(){
                this.$refs.name.value = this.event.name; 
                this.$refs.status.value = this.event.status; 
                this.$refs.time.value = this.getInputDateFormat(this.event.time);
                this.$refs.description.value = this.event.description; 
                this.$refs.link.value = this.event.link; 
            },
           save() {
                let that = this;
                function handleResult(res) {
                    res.json()
                   .then(res => {
                        console.log("Result from server", res);
                        this.dataSaved = true;
                        this.$router.push('/event');
                       }) 
                }

                console.log('Saving', this.eventToEdit);
                if (this.eventToEdit.id)  this.$http.put(`event`, this.eventToEdit).then(handleResult);
                else this.$http.post('event', this.eventToEdit).then(handleResult);
            },
    },
    created(){
            const eventId = this.$route.params.id;
            if(eventId)     this.loadEvent(eventId);
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