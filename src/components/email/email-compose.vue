<template>
    <section class="message">
        <p class="control">
            <input ref="subject" class="input" type="text" placeholder="Subject" v-model="composedEmail.subject" />
        </p>
        <p class="control">
            <input ref="to" class="input" type="email" placeholder="To" v-model="composedEmail.to" />
        </p>
        <p class="control">
            <input ref="" class="input" disabled type="text" placeholder="From" :value="emailComposer" />
        </p>
        <p class="control">
        <textarea ref="content" class="textarea" v-model="composedEmail.content" placeholder="Write Your Message Here..."></textarea>
        </p>
        <button class="button is-primary" @click="emitComposedEmail"> Send </button>
    </section>
</template>

<script>
    export default{
        props:{
            emailComposer:{
                required: true,
                type: String
            }
        },
        data(){
            return {
                composedEmail:{
                    subject: '',
                    from: this.emailComposer,
                    to: '',
                    content: ``,
                    isRead: false
                }
            }
        },
        methods:{
            emitComposedEmail(){
                // console.log('refs' , this.$refs)
                this.$refs.subject.value = '';
                this.$refs.to.value = '';
                this.$refs.content.value = '';
                this.$emit('emitComposedEmail' , this.composedEmail);
                this.composedEmail = {
                    subject: '',
                    from: this.emailComposer,
                    to: '',
                    content: ``,
                    isRead: false
                }
            }
        }
    }
</script>

<style>
    .message{
        padding: 20px;
    }
</style>