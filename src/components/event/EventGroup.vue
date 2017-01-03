<template>
    <section>
         <event-group-list v-for="(dayEvents,day) in eventsByDays" :dayEvents="dayEvents" :day="day"></event-group-list>
    </section>
</template>

<script>
    import EventGroupList from './EventGroupList.vue'
    export default {
        props:{
            filteredEvents:{
                required: true,
                type: Array
            }
        },
        data () {
            return {  

            }
        },
        methods: {
            getDateFormat(ts){
                let d = new Date(ts);
                let dateFormatStr = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
                return dateFormatStr;
            },
            arrangeEmailsByDays(){
                let events = {}; 
                this.filteredEvents.forEach(event => {
                    let dateStr = this.getDateFormat(event.time);
                    if(events[dateStr]) events[dateStr].push(event);
                    else{
                        events[dateStr] = [];
                        events[dateStr].push(event);
                    }                       
                });
                // console.log(events)
                return events;
            }
        },
        components:{
          EventGroupList  
        },
        computed:{
            //Divide filteredEvents by days.
            eventsByDays () {
                return this.arrangeEmailsByDays();
            }
        },
        created() {
            console.log(this.filteredEvents)
        }
    }
</script>

<style scoped>

</style>