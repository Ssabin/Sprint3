<template>
    <section>
         <p>{{day}}</p>
         <event-preview 
            v-for="event in dayEvents" 
            :event="event" 
            style="border: 1px solid black"></event-preview>
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

</style>