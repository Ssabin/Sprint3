<template>
    <section class="message">

        <h1>Email compose</h1>
            <input class="input" type="email" placeholder="To" v-model="composedEmail.to" />
            <input class="input" disabled type="text" placeholder="from myself"/>
            <input class="input" type="text" placeholder="Subject" v-model="composedEmail.subject" />
            <textarea ref="content" v-model="composedEmail.content" placeholder="Write Your Message Here..."></textarea>
            <button @click="sendEmail"> Send </button>

    </section>
</template>

<script>
    export default{
        data(){
            return {
                composedEmail:{
                    to: '',
                    from: 'Myself',
                    subject: '',
                    content: ``,
                    isRead: false,
                    date: null
                },
                dataSaved: false
            }
        },
        methods:{
            sendEmail() {
                this.composedEmail.date = new Date(Date.now());
                let that = this;
                function handleResult(res) {
                    res.json()
                   .then(res => {
                           console.log("Result from server", res);
                        this.dataSaved = true;
                        this.$router.push('/email');
                       }) 
                }

                // console.log('Saving', this.eventToEdit);
                // if (this.eventToEdit.id)  this.$http.put(`event`, this.eventToEdit).then(handleResult);
                this.$http.post('email', this.composedEmail).then(handleResult);
            }












            // emitComposedEmail(){
            //     // console.log('refs' , this.$refs)
            //     this.$refs.subject.value = '';
            //     this.$refs.to.value = '';
            //     this.$refs.content.value = '';
            //     this.$emit('emitComposedEmail' , this.composedEmail);
            //     this.composedEmail = {
            //         subject: '',
            //         from: this.emailComposer,
            //         to: '',
            //         content: ``,
            //         isRead: false
            //     }
            // }
        }
    }
</script>

<style>
    /*.message{
        padding: 20px;
    }*/
</style>