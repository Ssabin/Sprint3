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
        props: {
            events:{
                required: true,
                type: Array
            }
        },
        data () {
            return {
                filter: {
                    name: '',
                    date: Date.now(),
                    city: ''
                }           
            }
        },
        methods: {
            updateFilter(filter) {
                this.filter = filter;
                // console.log(filter);
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
        }
    }
</script>

<style scoped>

</style>