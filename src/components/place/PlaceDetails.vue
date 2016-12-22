<template>
    <section>
        <h1>Place Details Section</h1>
        <p>name:</p> <span>{{place.name}}</span>
        <!--TODO show adress-->
        <p>tags:</p> <span v-for="tag in place.tags">{{tag}},</span>
        <hr>
    </section>
</template>

<script>
    export default {
        data () {
            return {    
                place: {id: 1}    
            }
        },
        methods: {
            loadEvent(placeId) {    
                this.$http.get(`place/${placeId}`)
                   .then(res => res.json())
                   .then(place => this.place = place);
           }
        },
        created(){
            const placeId = this.$route.params.id;
            this.loadEvent(placeId);
        }
    }
</script>

<style scoped>

</style>