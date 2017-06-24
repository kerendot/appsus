<template>
  <div id="app">
    <div class="topbar animated fadeInLeftBig"></div>
    <div class="navbar-wrapper">
        <div class="container">

            <div class="navbar navbar-default navbar-fixed-top" role="navigation" id="top-nav">
                <div class="container">
                    <div class="navbar-header">
                        <!-- Logo Starts -->
                        <!--<a class="navbar-brand" href="#home"><img src="images/logo.png" alt="logo"></a>-->
                        <!-- #Logo Ends -->


                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

                    </div>


                    <!-- Nav Starts -->
                    <div class="navbar-collapse  collapse">
                        <ul class="nav navbar-nav navbar-right scroll">
                            <li class="active"><router-link to="/">Home | </router-link></li>
                            <li> <router-link to="/email">Emails | </router-link></li>
                            <li><router-link to="/book">Books Store | </router-link></li>
                            <li><router-link to="/place">Places</router-link></li>
                            <router-view></router-view>
                        </ul>
                    </div>
                    <!-- #Nav Ends -->

                </div>
            </div>

        </div>
    </div>
    
   
    
    

    
    <!--<input v-model=vm.searchPlace v-gmaps-searchbox:location=vm>
    {{vm}}-->


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
            return {
        
            }
        },
}
</script>

<style lang="scss">
    @import "/../dist/static/css/style.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
