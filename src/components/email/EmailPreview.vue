<template>
    <section class="email">
        
        <!--<router-link :to="`/email/edit/${email.id}`">Edit</router-link>-->
        <router-link :to="`/email/${email.id}`">
            <h3>{{email.subject}}</h3>
            <p>{{email.date}}</p>
            <p>{{email.content.slice(0,20)}}...</p>
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
            
            // showEmailDetails () {
            //     this.$emit('showEmailDetails' , this.email.id);

            // }
        }
    }
</script>

<style>

    .email {
        border: 1px solid #585858;
    }

</style>