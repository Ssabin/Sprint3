<template>
    <section>
        <div>
        <input type="text" placeholder="Search email" v-model="filter.txt" @input="emitFilter"/>
        <div>
            <input type="radio" value="N" v-model="filter.mode" @change="emitFilter"/> Name
            <input type="radio" value="T" v-model="filter.mode" @change="emitFilter"/> Tags
        </div>
    </div>
    </section>
</template>

<script>
    export default {
        data () {
            return {     
                filter: {
                    txt: '',
                    mode: 'N'
                }
            }
        },
        methods: {
            emitFilter(){
                this.$emit('filterPlaces' , this.filter);
            }
        }
    }
</script>

<style scoped>

</style>