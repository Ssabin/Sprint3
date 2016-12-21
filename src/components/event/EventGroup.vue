<template>
    <section>
         Event Group 
         <event-group-list></event-group-list>
    </section>
</template>

<script>
    import EventGroupList from './EventGroupList.vue'
    export default {
        props:{
            filteredEvents:{
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
          EventGroupList  
        },
        computed:{
            //Divide filteredEvents by days.
        }
    }
</script>

<style scoped>

</style>