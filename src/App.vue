<template>
  <div id="app">
     <h2>Keren's Appsus - Home Page</h2>
    <router-link to="/">Home | </router-link>
    <router-link to="/email">Emails | </router-link>
    <router-link to="/book">Books Store | </router-link>
    <router-link to="/place">Places</router-link>
    <router-view></router-view>

    <!--<input v-model=vm.searchPlace v-gmaps-searchbox:location=vm>
    {{vm}}-->


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
            return {
               
                // vm: {
                //     searchPlace: '',
                //     location: {}

                // }
            }
        },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
