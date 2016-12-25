<template>
    <section>
         <div style="border: 1px solid black">
             <p>
                 {{place.name}}
             </p>
             <p>
                 <span v-for="tag in place.tags">{{tag}},</span>
             </p>
         </div>
    </section>
</template>

<script>
    export default {
        props:{
            place:{
                required: true,
                type: Object
            }
        },
        data () {
            return {        
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>