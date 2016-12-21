<template>
    <section>
         Place List 
         <place-preview></place-preview>
         <!--{{filteredPlaces}}-->
    </section>
</template>

<script>
    import PlacePreview from './PlacePreview.vue'
    export default {
        props:{
            filteredPlaces:{
                required: true,
                type: Array
            }
        },
        data () {
            return {        
            }
        },
        methods: {
        },
        components:{
          PlacePreview
        },
        computed:{
            //Divide filteredEvents by days.
        }
    }
</script>

<style scoped>

</style>