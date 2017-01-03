<template>
    <section>
        <nav class="app-nav">
            <router-link class="btn btn-add" to="/event/edit" exact>
                Add Event
            </router-link>
        </nav>
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
           },
            updateFilter(filter) {
                this.filter = filter;
            },
            sortFilteredEvents(events){
                return events.sort((eventA , eventB) => {
                    return eventA.time - eventB.time;
                });
            }
        },
        components:{
            EventFilter,
            EventGroup
        },
        computed: {
            filteredEvents() {
                let filteredArray = this.events.filter((event, idx) => {
                    
                    const filter = this.filter;
                    const name = event.name.toLowerCase();
                    if(!event.venue) return false;
                    const city = event.venue.city.toLowerCase();
                    const time = event.time;


                    return(name.includes(filter.name.toLowerCase()) && 
                           city.includes(filter.city.toLowerCase()) && 
                           time >= new Date(filter.date).getTime())
                    
                });
                this.sortFilteredEvents(filteredArray)
                return filteredArray;
            }
        },
        created(){
            this.loadEvents();
        }
    }
</script>

<style scoped>

</style>