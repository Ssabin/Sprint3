<template>
    <section>
        <slot></slot>
        <div class="email-preview box" :class="{'notRead': !currEmail.isRead}" v-for="currEmail in emails">
            <email-preview :email="currEmail" @click.native="showEmailDetails(currEmail.id)"></email-preview>
        </div>
    </section>
</template>

<script>
    import EmailPreview from './email-preview.vue'
    export default {
        props:{
            emails:{
                required: true,
                type: Array
            }
        },
        data(){
            return {

            }
        },
        methods:{
            showEmailDetails(emailId) {
                    console.log(emailId);
                    this.$emit('showEmailDetails',emailId)
            }
        },
        components: {
            'email-preview': EmailPreview
        }
    }
</script>

<style scoped>
    .email-preview {
        border: 1px solid white;
        padding: 10px 30px;
        margin-right: 10px;
        cursor: pointer;
    }
    
  .notRead{
    background: #e3e3e3;
  }
</style>