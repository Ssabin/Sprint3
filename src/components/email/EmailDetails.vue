<template>
    <section class="email-details__container">
        <nav class="app-nav">
            <router-link class="btn btn-main" to="/email" exact>Email List</router-link>
            <button class="btn btn-delete" @click="deleteEmail">DELETE</button>
        </nav>
        <div class="email-detail">
            <span>Subject:</span>
            <p class="title">{{email.subject}}</p>
        </div>
        <div class="email-detail">
            <span>From:</span>
            <p>{{email.from}}</p>
        </div>
        <div class="email-detail">
            <span>At:</span>
            <p>{{email.date}}</p>
        </div>
        <div class="shadow-divider"></div>
        <div class="email-content">
            {{email.content}}
        </div>
    </section>
</template>

<script>
    export default{
        data(){
            return {
                email: {venue:{},description: ''}
            }
        },
        methods:{
            loadEmail(emailId) {
                this.$http.get(`email/${emailId}`)
                   .then(res => res.json())
                   .then(email => this.email = email);
            },
            deleteEmail() {
                const isSure = confirm('Are you sure you want to delete?');
                if (!isSure) return;
                let that = this;
                function handleResult(res) {
                    res.json()
                   .then(res => {
                           console.log("Result from server", res);
                        //    that.$emit('done')
                        // this.dataSaved = true;
                        this.$router.push('/email');
                       }) 
                }

                this.$http.delete(`email/${this.email.id}`).then(handleResult);
            }
        },
        created(){
            const emailId = this.$route.params.id;

            this.loadEmail(emailId);
        }
    }
</script>

<style scoped>
    .email-details__container{
        position: relative;
    }
    .email-detail{
        display: flex;
        font-weight: bold;
    }
    .shadow-divider{
        width: 100%;
        height: 1px;
        box-shadow: 0 1px 2px #000;
        opacity: 0.5;
        margin-bottom: 10px;
    }
</style>