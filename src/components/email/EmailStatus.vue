<template>
    <section>
        <p>Total email count: {{totalEmailCount}}</p>
        <p>Unread email count: {{unreadEmailCount}}</p>
    </section>
</template>

<script>
    export default{
        props:{
            totalEmailCount: {
                required: true,
                type: Number
            },
            unreadEmailCount: {
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