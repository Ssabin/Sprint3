<template>
    <div>
        <input class="input search-input" type="text" placeholder="Search email" v-model="filter.txt" @input="emitFilter"/>
        <div>
            <input type="radio" value="A" v-model="filter.emailStatus" @change="emitFilter"/> All
            <input type="radio" value="R" v-model="filter.emailStatus" @change="emitFilter"/> Read
            <input type="radio" value="U" v-model="filter.emailStatus" @change="emitFilter"/> Un-Read
        </div>
    </div>
</template>

<script>
    export default{
        // props:{
        //     emails:{
        //         required: true,
        //         type: Array
        //     }
        // },
        data(){
            return {
                filter:{
                    txt: '',
                    emailStatus: 'A'
                }
            }
        },
        methods:{
            emitFilter(){
                this.$emit('filterEmails' , this.filter);
                
            }
        }
    }
</script>

<style>
    .search-input{
        width: 80%;
    }
</style>