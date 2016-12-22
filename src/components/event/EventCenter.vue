<template>
    <section>
        <h1>Event Center Section</h1>
         <event-filter :events="events" @filterEvents="updateFilter"></event-filter>
         <event-group :filteredEvents="filteredEvents"></event-group>
    </section>
</template>

<script>
    import EventFilter from './EventFilter.vue'
    import EventGroup from './EventGroup.vue'
    export default {
        data () {
            return {
                events: [],
                eventToEdit: undefined,
                showEventEdit: false,
                filter: {
                    name: '',
                    date: Date.now(),
                    city: ''
                }           
            }
        },
        methods: {
            loadEvents() {
                this.$http.get('event')
                   .then(res => res.json())
                   .then(events => this.events = events);
                this.eventToEdit = undefined;   
                this.showEventEdit = false;
           },
            updateFilter(filter) {
                this.filter = filter;
            }
        },
        components:{
            EventFilter,
            EventGroup
        },
        computed: {
            filteredEvents() {
                let filteredArray = this.events.filter(event => {
                    const filter = this.filter;
                    const name = event.name;
                    const city = event.venue.city;
                    const time = event.time;


                    return(name.includes(filter.name) && 
                           city.includes(filter.city) && 
                           time >= new Date(filter.date).getTime())
                    
                });

                return filteredArray;
            }
        },
        mounted(){
            console.log('loadEvents')
            this.loadEvents();
        }
    }
</script>

<style scoped>

</style>