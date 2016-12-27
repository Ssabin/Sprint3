<template>
    <section>
        <nav class="app-nav">
            <router-link class="btn btn-main" to="/place" exact>
                Place List
            </router-link>
        </nav>

        
        <form>
            <div class="form-group">
                <input class="form-control" ref="name" type="text" placeholder="name" v-model.lazy="place.name">
            </div>
            <div class="form-group">
                <input type="text" ref="address" class="form-control" placeholder="Address" v-model="place.address">
            </div>
            <div class="form-group">
                <input class="form-control" ref="tags" type="text" placeholder="Tags" v-model.lazy="tagsString">
            </div>
            <button class="btn btn-add" @click.prevent="save">Submit</button>
            <button class="btn btn-delete" @click.prevent="goBack">Cancel</button>
        </form>
    </section>
</template>

<script>
    export default {
        data () {
            return {     
                place: {
                    name: '',
                    lat: 32,
                    lng: 33,
                    address: '',
                    tags: []
                },
                tagsString: '',
                dataSaved: false,
            }
        },
        computed: {
            placeToEdit(){
                return Object.assign({} , this.place)
            },
            addressToSearch(){
                return `https://maps.googleapis.com/maps/api/geocode/json?address=${this.place.address}&key=AIzaSyCt_f62xnUudkGEFHC7UgShw58cYlVXf24`
            }
        },
        methods: {
            loadPlace(placeId) {
                this.$http.get(`place/${placeId}`)
                   .then(res => res.json())
                   .then(place => {
                       this.place = place;
                       this.tagsString = place.tags.join(' ');
                    })
           },
           insertTags(){
               this.placeToEdit.tags = this.tagsString.split(' ');
           },
           goBack(){
                window.history.back();                
            },
           save() {
                let that = this;
                toastr.options.closeButton = true;
                toastr.options.timeOut = 1000;
                toastr.success('The place have been saved'); 
                this.insertTags();
                function handleResult(res) {
                    res.json()
                   .then(res => {
                        this.dataSaved = true;
                        this.$router.push('/place');
                       }) 
                }
                // console.log('this.addressToSearch',this.addressToSearch)
                this.$http.get(this.addressToSearch)
                    .then(res => res.json())
                    .then(address => {
                        
                        this.placeToEdit.address = address.results[0].formatted_address;
                        this.placeToEdit.lat = address.results[0].geometry.location.lat;
                        this.placeToEdit.lng = address.results[0].geometry.location.lng;
                        if (this.placeToEdit.id)  this.$http.put(`place`, this.placeToEdit).then(handleResult);
                        else this.$http.post('place', this.placeToEdit).then(handleResult);
                });   
            },
        },
        created(){
            const placeId = this.$route.params.id;
            if(placeId)     this.loadPlace(placeId);
        }
    }
</script>

<style scoped>
    
</style>