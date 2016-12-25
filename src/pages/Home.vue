<template>
    <section>
        <div class="full-page__section home">
            <div class="full-page__inner-container">
                <h1>Sprint 3</h1>
                <p>By Saharsabin14@gmail.com & max@maxvoronov.com</p>
            </div>
        </div>
        <about id="about" class="full-page__section about"></about>
        <contact id="contact" class="full-page__section contact"></contact>
    </section>
</template>

<script>
    import About from '../components/home/About.vue'
    import Contact from '../components/home/Contact.vue'
    export default {
        data () {
            return {        
            }
        },
        methods: {
        },
        components: {
           About ,
           Contact
        }
    }
</script>

<style>
    .full-page__section {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .full-page__inner-container {
        width: 50%;
        height: auto;
        padding: 25px;
        background: rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 2px;
        text-align: center;
    }
    
    .home {
        background-image: url('../assets/imgs/cover1.jpg');
    }
    
    .about {
        background-image: url('../assets/imgs/cover2.jpg');
    }
    
    .contact {
        background-image: url('../assets/imgs/cover3.jpg');
    }
    
    h1 {
        margin: 0;
    }
</style>