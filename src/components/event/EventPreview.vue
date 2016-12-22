<template>
    <section>
         <div>  
             Name: <h3>{{event.name}}</h3>
             <div>
                 <h3>Location</h3>
                 <ul>
                     <li>
                         {{event.venue.name}}
                     </li>
                     <li>
                         {{event.venue.address_1}} , {{event.venue.city}} , {{event.venue.localized_country_name}} 
                     </li>
                 </ul>
             </div>
             <span>At: {{day}}</span>
             <!--Link: <a :href="`${event.link}`">Link To MeetUp</a>-->
             <h3>description</h3>
              <p v-html="eventDescription"></p>
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
        computed:{
            eventDescription(){
                //removes all HTML elements from description for the preview and bring only 100 chars
                return this.event.description.replace(/(<([^>]+)>)/ig,'').slice(0,100) + '...';
            }
        }

    }
</script>

<style scoped>

</style>