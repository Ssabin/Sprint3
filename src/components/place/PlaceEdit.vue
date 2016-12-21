<template>
    <section>
        <h1>Place Edit Section</h1>
        {{place}}
        <hr>
    </section>
</template>

<script>
    export default {
        data () {
            return {     
                place: {}   
            }
        },
        methods: {
        //     loadEvent(eventId) {
        //         this.$http.get(`event/${eventId}`)
        //            .then(res => res.json())
        //            .then(event => this.event = event);
        //    }
        },
        created(){
            console.log('yayay')
            // const eventId = this.$route.params.id;
            // if(eventId)     this.loadEvent(eventId);
        }
    }
</script>

<style scoped>

</style>