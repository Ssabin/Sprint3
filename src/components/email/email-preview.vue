<template>
    <section >
        <div>{{email.subject}}</div>
        <div>{{email.preview}} , {{email.date}}</div>
        <!--<button class="delete-btn" @click="deleteEmail">x</button>-->
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
            showEmailDetails () {
                this.$emit('showEmailDetails' , this.email.id);

            }
        }
    }
</script>

<style>

</style>