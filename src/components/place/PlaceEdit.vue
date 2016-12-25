<template>
    <section>
        <nav class="app-nav">
            <router-link class="btn btn-primary" to="/place" exact>
                Place List
            </router-link>
        </nav>
        <h1>Place Edit Section</h1>
        <form>
            <div class="form-group">
                <input class="form-control" ref="name" type="text" placeholder="name" v-model.lazy="placeToEdit.name">
            </div>
            <div class="form-group">
                <input type="text" ref="address" class="form-control" placeholder="Address" v-model="place.address">
            </div>
            <div class="form-group">
                <input class="form-control" ref="tags" type="text" placeholder="Tags" v-model.lazy="tagsString">
            </div>
            <button class="btn btn-success" @click.prevent="save">Submit</button>
            <button class="btn btn-danger" @click.prevent="goBack">cancel</button>
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
                return `https://maps.googleapis.com/maps/api/geocode/json?address=${this.place.adress}&key=AIzaSyCt_f62xnUudkGEFHC7UgShw58cYlVXf24`
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
                this.insertTags();
                
                this.$http.get(this.addressToSearch)
                    .then(res => res.json())
                    .then(address => {
                        this.placeToEdit.address = address.results[0].formatted_address;
                        // console.log(address)
                        this.placeToEdit.lat = address.results[0].geometry.location.lat;
                        this.placeToEdit.lng = address.results[0].geometry.location.lng;
                        console.log('Saving', this.placeToEdit);
                        if (this.placeToEdit.id)  this.$http.put(`place`, this.placeToEdit).then(handleResult);
                        else this.$http.post('place', this.placeToEdit).then(handleResult);
                });   

                function handleResult(res) {
                    res.json()
                   .then(res => {
                        console.log("Result from server", res);
                        this.dataSaved = true;
                        this.$router.push('/place');
                       }) 
                }

                
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