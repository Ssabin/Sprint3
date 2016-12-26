<template>
    <section class="email">
        <router-link :to="`/email/${email.id}`" class="email-preview">
            <p class="email-preview__subject">{{email.subject}}</p>
            <p class="email-preview__description">{{email.content.slice(0,20)}}...</p>
            <p>{{getDateFormat(email.date)}}</p>
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
        },
        methods: {
            getDateFormat(ts){
                let d = new Date(ts);
                let dateFormatStr = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
                return dateFormatStr;
            }
        }
    }
</script>

<style scoped>
    .email {
        border-bottom: 1px solid #787878;
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
    @media screen and (max-width: 480px){
        .email-preview__subject{
            width: 100%;
        }
        .email-preview__description{
            display: none;
        }
    }
</style>