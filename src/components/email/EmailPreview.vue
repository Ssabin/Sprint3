<template>
    <section class="email">
        <router-link :to="`/email/${email.id}`" class="email-preview">
            <p class="email-preview__subject">{{email.subject}}</p>
            <p>{{email.content.slice(0,20)}}...</p>
            <p>{{email.date}}</p>
        </router-link>
    </section>
</template>

<script>
    export default {
        props:{
            email:{
                required: true,
                type: Object
            }
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped>
    .email {
        border-top: 1px solid #585858;
        border-left: 1px solid #585858;
        border-right: 1px solid #585858;
    }
    .email:last-child{
        border-bottom: 1px solid #585858;
    }
    .email-preview{
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        color: #444;
    }
    .email-preview:hover{
        text-decoration: none;
    }
    .email-preview__subject{
        width: 20%;
    }
</style>