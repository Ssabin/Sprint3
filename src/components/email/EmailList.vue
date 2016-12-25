<template>
    <section>
            <email-preview
                :class="{notRead: !email.isRead}"
                v-for="email in filteredEmails"
                :email="email">
            </email-preview>
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
        components: {
            EmailPreview
        }
    }
</script>

<style scoped>
    .notRead{
        font-weight: bold;  
        background: #e3e3e3;
    }
</style>