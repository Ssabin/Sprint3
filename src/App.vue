<template>
  <div id="app">
    <nav class="navbar navbar-default">
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
          <a class="navbar-brand" href="#">M&S</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/" active-class="active" exact>Home</router-link>
            </li>
            <li>
              <router-link to="/email" active-class="active" exact>Email</router-link>
            </li>
            <li>
              <router-link to="/event" active-class="active" exact>Event</router-link>
            </li>
            <li>
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
  }
}
</script>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
  
  h1 {
    text-align: center;
  }
  
  .app-nav {
    margin: 10px 0;
    text-align: center;
  }
  
  @media screen and (min-width: 768px) {
    .app-container {
      width: 80%;
      margin: 10px auto;
    }
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
  .active{
    background-color: #E7E7E7;
  }
  .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus{
    background-color: #E7E7E7;    
  }
  a:hover, a:focus {
    color: inherit;
    text-decoration: none;
  }
</style>