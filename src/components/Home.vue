<template>
  <div class="home">
    <h2>Keren's Appsus - Home Page</h2>
    <router-link to="/email">Emails | </router-link>
    <router-link to="/book">Books Store | </router-link>
    <router-link to="/place">Places</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
