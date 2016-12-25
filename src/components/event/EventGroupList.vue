<template>
    <section>
         <p class="day-date">{{day}}</p>
         <div class="events-day-container">
            <event-preview 
                v-for="event in dayEvents" 
                :event="event"
                :day="day"
                class="event-preview"></event-preview>
          </div>      
    </section>
</template>

<script>
    import EventPreview from './EventPreview.vue'
    export default {
        props:{
            dayEvents:{
                required: true,
                type: Array
            },
            day:{
                required: true,
                type: String
            }
        },
        data () {
            return {        
            }
        },
        methods: {
        },
        components: {
            EventPreview
        }
    }
</script>

<style scoped>

.events-day-container {
    display: flex;
    flex-wrap: wrap;
}

.event-preview {
    width: 30%;
    box-shadow: 0 0 3px #0275D8;
    border-radius: 0 30px 0 0px;
    margin: 0 1.666% 1% 1.666666%;
}

.day-date{
    font-size: 25px;
    text-align: center;
}

@media screen and (min-width: 560px) and (max-width: 890px) {
    .event-preview {
        width: 45%;
    }
    
}

@media screen and (max-width: 560px) {
    .event-preview {
        width: 95%;
    }
}

</style>