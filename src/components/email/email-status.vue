<template>
    <section>
        <p>Not Read Emails: {{emailsNotReadCounter}}</p>
    </section>
</template>

<script>
    export default{
        props:{
            emailsNotReadCounter:{
                required: true,
                type: Number
            }
        },
        data(){
            return {
            }
        }
        // methods:{
            
        // }
    }
</script>

<style>

</style>