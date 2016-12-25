<template>
    <section class="place-filter__container">
        <h3>Search Places</h3>
        <div>
            <input class="search-input" type="text" placeholder="Search place" v-model="filter.txt" @input="emitFilter" />
            <div>
                <input type="radio" value="N" v-model="filter.mode" @change="emitFilter" /> Name
                <input type="radio" value="T" v-model="filter.mode" @change="emitFilter" /> Tags
            </div>
        </div>
    </section>
</template>

<script>
    import debounce from 'debounce';
    export default {
        data () {
            return {     
                filter: {
                    txt: '',
                    mode: 'N'
                },
                delay: 1000
            }
        },
        methods: {
            emitFilter(){
                this.$emit('filterPlaces' , this.filter);
            }
        },
        created(){
            this.emitFilter = debounce(this.emitFilter, this.delay);
        }
    }
</script>

<style scoped>
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