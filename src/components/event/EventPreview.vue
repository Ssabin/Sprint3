<template>
    <section>
         <div>  
             Title: <h3>{{event.name}}</h3>
             Link: <a :href="`${event.link}`">Link To MeetUp</a>
             description <p v-html="eventDescription"></p>
             <router-link :to="`/event/edit/${event.id}`">Edit</router-link>
             <router-link :to="`/event/${event.id}`">Read more</router-link>
         </div>
    </section>
</template>

<script>
    export default {
        props:{
            event:{
                required: true,
                type: Object
            }
        },
        data () {
            return {
                       
            }
        },
        methods: {
        },
        computed:{
            eventDescription(){
                return this.event.description.slice(0,100);
            }
        }

    }
</script>

<style scoped>

</style>