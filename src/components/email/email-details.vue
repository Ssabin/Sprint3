<template>
    <section class="email-details message">
        <div class="close" @click="closeDetails">X</div>
        <h1 class="title">{{email.subject}}</h1>
        <div class="details">
            <div>
                <p>From: {{email.from}}</p>
                <p>From: {{email.to}}</p>
            </div>
            <p class="time">At: {{email.date}}</p>
        </div>
        <p class="email-title title">Content:</p>
        <div class="email-content">
            {{email.content}}
        </div>
        <button class="delete-btn" @click="deleteEmail">Delete Email</button>
    </section>
</template>

<script>
    export default{
        props:{
            email:{
                type: Object
            }
        },
        data(){
            return {

            }
        },
        methods:{
            closeDetails(ev){
                this.$emit('closeDetails');
            },
            deleteEmail(){
                this.$emit('deleteEmail',this.email.id);
            }
        }
    }
</script>

<style scoped>
    .email-details {
        padding: 10px 30px;
        position: relative;
    }
    .close{
        position: absolute;
        right: 10px;
        cursor: pointer;
    }
    .email-title{
        margin: 10px 0;
    }

    .details{
        display: flex;
        justify-content: space-between;
        color: #a5a5a5;
    }
    .email-content{
        padding-bottom:100px;
    }
    .time{
        align-self: flex-end;
    }
    .delete-btn{
        background: whitesmoke;
        border: #333 1px solid;
        padding: 10px;
        position: absolute;
        bottom: 10px;
        cursor: pointer;
        transition: all 0.7s ease;
    }

    .delete-btn:hover{
        color: #FFF;
        background: #333;
    }
</style>