<template>
  <div id="app">
    <!--<h1>Hi im {{txt}}</h1>-->
    <nav>
      <router-link to="/" active-class="active" exact>Home</router-link> --
      <router-link to="/email" active-class="active" exact>Email</router-link> --
      <router-link to="/event" active-class="active" exact>Event</router-link> --
      <router-link to="/place" active-class="active" exact>Place</router-link>
    </nav>
    <router-view></router-view>
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

<style scoped>
  .active {
    color: green;
  }
</style>