<template>
    <section>
        <h1>Event Details Section</h1>
        {{event}}
        <hr>
    </section>
</template>

<script>
    export default {
        data () {
            return {    
                event: null    
            }
        },
        methods: {
            loadEvent(eventId) {
                this.$http.get(`event/${eventId}`)
                   .then(res => res.json())
                   .then(event => this.event = event);
           }
        },
        created(){
            const eventId = this.$route.params.id;
            this.loadEvent(eventId);
        }
    }
</script>

<style scoped>

</style>