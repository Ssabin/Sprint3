<template>
    <section class="emails">
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

    .emails{
        box-shadow: 10px 9px 27px -8px rgba(120,120,120,0.5);
    }
</style>