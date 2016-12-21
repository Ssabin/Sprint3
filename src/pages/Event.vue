<template>
    <section>
        <h1>Event Page</h1>
        <nav>
            <router-link to="/event" active-class="active" exact>Event List</router-link> 
            <router-link to="/event/edit" active-class="active" exact>Add Event</router-link> 
        </nav>
        <router-view :events="events"></router-view>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                events: []    
            }
        },
        methods: {
            loadEvents() {
                this.$http.get('event')
                   .then(res => res.json())
                   .then(events => this.events = events);
                // this.carToEdit = undefined;   
                // this.showCarEdit = false;
           }
        },
        components: {
           
        },
        created(){
            this.loadEvents();
        }
    }
</script>

<style scoped>

</style>