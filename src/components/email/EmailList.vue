<template>
    <section>
        <!--<slot></slot>-->
        <!--<div v-for="currEmail in emails">-->
            <!--{{filteredEmails}}-->
            <email-preview 
                v-for="email in filteredEmails"
                :email="email">
            </email-preview>
        <!--</div>-->
    </section>
</template>

<script>
    import EmailPreview from './EmailPreview.vue'
    export default {
        props:{
            filteredEmails:{
                required: true,
                type: Array
            }
        },
        data(){
            return {

            }
        },
        methods:{
            // showEmailDetails(emailId) {
            //         console.log(emailId);
            //         this.$emit('showEmailDetails',emailId)
            // }
        },
        components: {
            EmailPreview
        }
    }
</script>

<style scoped>
    /*.email-preview {
        border: 1px solid white;
        padding: 10px 30px;
        margin-right: 10px;
        cursor: pointer;
    }
    
  .notRead{
    background: #e3e3e3;
  }*/
</style>