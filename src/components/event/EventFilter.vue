<template>
    <section>
        <input type="text" v-model.lazy="filter.name" placeholder="Name" />
        <input type="text" v-model.lazy="filter.city" placeholder="City" />
        <input type="date" v-model.lazy="choosenDate" @change="checkIfValidDate">
        <button @click="$emit('filterEvents', filter)">Filter</button>
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

                //DOTO: if we choose today we get false
                // console.log(new Date(this.filter.date) >= Date.now());

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

</style>