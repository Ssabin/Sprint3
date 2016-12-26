<template>
    <section class="email-filter__container">
        <h3>Filter Events</h3>
        <input type="text" v-model.lazy="filter.name" placeholder="Name" />
        <input type="text" v-model.lazy="filter.city" placeholder="City" />
        <input type="date" v-model.lazy="choosenDate" @change="checkIfValidDate">
        <button class="btn btn-filter" @click="$emit('filterEvents', filter)">Filter</button>
        <hr>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                filter: {
                    name: '',
                    date: Date.now(),
                    city: ''
                },
                choosenDate: undefined     
            }
        },
        methods: {

            checkIfValidDate() {
                if (new Date(this.choosenDate) >= Date.now()) {
                    this.filter.date = this.choosenDate;   
                } else {
                    this.filter.date = Date.now();
                    alert('Can\'t go back in TIME !!!');
                }  
            }
            
        },
        created(){
            
        }
    }
</script>

<style scoped>
    .email-filter__container{
        text-align: center;
    }
    input{
        padding: 4px 0;
    }
    @media screen and (max-width: 560px){
        .email-filter__container{
            display: flex;
            flex-direction: column;       
        }
        .email-filter__container input{
            margin-bottom: 5px;
        }
    }
</style>