<template>
    <section>
        <div class="full-page__section home">
            <nav class="home-nav">
                <a href="#about" class="btn btn-filter" @click="setAnchoresAnimations($event)">
                About
            </a>
                <a href="#contact" class="btn btn-filter" @click="setAnchoresAnimations($event)">
                Contact
            </a>
            </nav>
            <div class="full-page__inner-container">
                <h1>Welcome to M&S Apsus</h1>
                <p>Developed By Saharsabin14@gmail.com & max@maxvoronov.com</p>
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
            setAnchoresAnimations(ev){
                $('html, body').animate({
                    scrollTop: $($(ev.currentTarget).attr('href')).offset().top - 15
                }, 500);
            }
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
        position: relative;
    }
    
    .full-page__inner-container {
        width: 80%;
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
    
    .home-nav {
        position: absolute;
        top: 10px;
    }
    
    .home-nav .btn-filter {
        background: #449D44;
        color: white;
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
    
    @media screen and (max-width: 480px) {
        .full-page__inner-container {
            width: 100%;
        }
    }
</style>