<template>
    <div>
        <input class="input search-input" type="text" placeholder="Search email" v-model="filter.txt" @input="emitFilter" />
        <div>
            <input type="radio" value="A" v-model="filter.emailStatus" @change="emitFilter" /> All
            <input type="radio" value="R" v-model="filter.emailStatus" @change="emitFilter" /> Read
            <input type="radio" value="U" v-model="filter.emailStatus" @change="emitFilter" /> Un-Read
        </div>
    </div>
</template>

<script>
    import debounce from 'debounce';
    export default{
        data(){
            return {
                filter:{
                    txt: '',
                    emailStatus: 'A'
                },
                delay: 1000
            }
        },
        methods:{
            emitFilter(){
                this.$emit('filterEmails' , this.filter);
            }
        },
        created(){
            this.emitFilter = debounce(this.emitFilter, this.delay);
        }
    }
</script>

<style>
    .search-input {
        width: 100%;
        padding: 5px 2px;
        border: 1px solid #e3e3e3;
        outline: none;
    }
    
    .search-input:focus {
        border-color: #51a7e8;
        box-shadow: 0 0 5px rgba(81, 167, 232, 0.5);
    }
</style>