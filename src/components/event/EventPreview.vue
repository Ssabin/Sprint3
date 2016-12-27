<template>
    <section>
        <div class="event-preview-container">
            <h3>{{event.name}}</h3>
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
            <p v-html="eventDescription"></p>
            <div class="event-preview__buttons">
                <router-link class="btn btn-main" :to="`/event/${event.id}`">Read more</router-link>
                <router-link class="btn btn-add" :to="`/event/edit/${event.id}`">Edit</router-link>
            </div>
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
                return this.event.description.replace(/(<([^>]+)>)/ig,'').slice(0,100) + '...';
            }
        }
    }
</script>

<style scoped>
    .event-preview-container {
        padding: 5px;
        height: 100%;
        position: relative;
        padding-bottom: 50px;
    }
    
    .event-preview__buttons {
        position: absolute;
        bottom: 5px;
        left: 5px;
        display: flex;
        justify-content: space-between;
        width: 95%;
    }
</style>