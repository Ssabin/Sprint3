<template>
    <section>
        <h1>Event Edit Section</h1>
        {{event}}
        <hr>
    </section>
</template>

<script>
    export default {
        data () {
            return {     
                event: {}   
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
            if(eventId)     this.loadEvent(eventId);
        }
    }
</script>

<style scoped>

</style>