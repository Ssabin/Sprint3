<template>
    <section>
        <h1>Event Edit Section</h1>

        <div>
            <input type="text" placeholder="title" v-model.lazy="eventToEdit.name">
            <div><input type="text" placeholder="status" v-model.lazy="eventToEdit.status"> | <input type="date" @input="getTimeStamp($event)"
                /></div>
            <textarea cols="30" rows="10" v-model.lazy="eventToEdit.description"></textarea>
            <button @click.prevent="save">Save</button>
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
                }
            }
        },
        computed:{
            eventToEdit(){
                return Object.assign({} , this.event);
            }
        },
        methods: {
            //Todo: insert date to date input 'year-month-day'
            getTimeStamp(ev){
                let [year , month , day] = ev.target.value.split('-');
                this.eventToEdit.time = new Date(+year , month-1 , +day).getTime();
                
            },
            loadEvent(eventId) {
                this.$http.get(`event/${eventId}`)
                   .then(res => res.json())
                   .then(event => this.event = event);
           },
           save() {
                let that = this;
                function handleResult(res) {
                    res.json()
                   .then(res => {
                           console.log("Result from server", res);
                        //    that.$emit('done')
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
        }
}
</script>

<style scoped>

</style>