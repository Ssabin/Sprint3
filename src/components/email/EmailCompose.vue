<template>
    <section class="message">
        <nav class="app-nav">
            <router-link class="btn btn-main" to="/email" exact>Email List</router-link>
        </nav>
        <form>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="To" v-model="composedEmail.to" />
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Subject" v-model="composedEmail.subject" />
            </div>
            <div class="form-group">
                <textarea class="form-control" rows="5" ref="content" v-model="composedEmail.content" placeholder="Write Your Message Here..."></textarea>
            </div>
            <button type="submit" class="btn btn-add" @click.prevent="sendEmail">Submit</button>
            <button class="btn btn-delete" @click.prevent="goBack">Cancel</button>
        </form>
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

                this.$http.post('email', this.composedEmail).then(handleResult);
            },
            goBack(){
                window.history.back();                
            }
        }
    }
</script>

<style>

</style>