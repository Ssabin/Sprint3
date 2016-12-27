<template>
  <div id="app">
    <nav class="my-navbar navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand" exact>M&S</router-link>

        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div ref="menu" class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li @click="closeMenu">
              <router-link to="/" active-class="active" exact>Home</router-link>
            </li>
            <li @click="closeMenu">
              <router-link to="/email" active-class="active" exact>Email</router-link>
            </li>
            <li @click="closeMenu">
              <router-link to="/event" active-class="active" exact>Event</router-link>
            </li>
            <li @click="closeMenu">
              <router-link to="/place" active-class="active" exact>Place</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <router-view class="content-container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      txt: 'app'
    }
  },
  methods: {
    closeMenu(){
      $(this.$refs.menu).collapse('hide')
    }
  }
}
</script>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
  
  .page-title {
    color: #fff;
    text-shadow: 0px 1px 2px rgba(150, 150, 150, 1);
  }
  
  h1 {
    text-align: center;
  }
  
  .app-nav {
    margin: 10px 0;
    text-align: center;
  }
  
  .navbar {
    margin-bottom: 0;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    border-radius: 0;
  }
  
  .content-container {
    margin-top: 52px;
  }
  
  .active {
    background-color: #5E97F6;
  }
  
  .navbar-default .navbar-nav > li > a:hover,
  .navbar-default .navbar-nav > li > a:focus {
    color: #FFF;
    background-color: #5E97F6;
  }
  
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
  }
  
  .my-navbar {
    background: #4285F4;
    border-color: #5E97F6;
  }
  
  .navbar-default .navbar-nav > li > a,
  .navbar-default .navbar-brand {
    color: #fff;
  }
  
  .my-navbar .navbar-brand:hover {
    color: #f1f1f1;
  }
  
  .navbar-default .navbar-toggle {
    border-color: #5E97F6;
  }
  
  .navbar-default .navbar-toggle .icon-bar {
    background: #fff;
    color: #fff;
  }
  
  .navbar-default .navbar-toggle:hover,
  .navbar-default .navbar-toggle:focus {
    background: #5E97F6;
  }
  
  .btn {
    background: transparent;
    border: 1px solid black;
    font-weight: bold;
    transition: all 0.25s ease;
  }
  
  .btn-filter {
    border-color: #449D44;
    color: #449D44;
  }
  
  .btn-filter:hover,
  .btn-filter:focus {
    background: #449D44;
    color: #fff;
  }
  
  .btn-add {
    border-color: #D23F31;
    color: #D23F31;
  }
  
  .btn-add:hover,
  .btn-add:focus {
    background: #D23F31;
    color: #fff;
  }
  
  .btn-main {
    border-color: #4285F4;
    color: #4285F4;
  }
  
  .btn-main:hover,
  .btn-main:focus {
    color: #fff;
    background: #4285F4;
  }
  
  .btn-delete {
    border-color: #e7a61a;
    color: #e7a61a;
  }
  
  .btn-delete:hover,
  .btn-delete:focus {
    background: #e7a61a;
    color: #fff;
  }

  .map {
          max-width: 100%;
          height: 400px;
      }

  
  @media screen and (min-width: 768px) {
    .app-container {
      width: 80%;
      margin: 10px auto;
    }
  }
</style>