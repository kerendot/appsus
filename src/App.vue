<template>
  <div id="app">
    <h1> K & K Appsus <img src="./assets/appsus.png" alt="appsus logo"> </h1>

    <div class="topbar"></div>
    
     <!-- Nav Starts -->
        <div class="navbar navbar-default navbar-fixed-top" role="navigation" id="top-nav">
            <div class="navbar-collapse  collapse">
                <ul class="nav navbar-nav navbar-right scroll">
                    <li class="active"><router-link to="/home">Home </router-link></li>
                    <li> <router-link to="/email">Emails </router-link></li>
                    <li><router-link to="/book">Books Store </router-link></li>
                    <li><router-link to="/place">Places</router-link></li>
                </ul>
                <br>
            </div>
        </div>
         <!-- #Nav Ends -->
     <router-view></router-view>
</div>

   
    
    

    
    <!--<input v-model=vm.searchPlace v-gmaps-searchbox:location=vm>
    {{vm}}-->


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

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

a{color:#00a9c6; text-decoration:none; text-transform: uppercase}
a:hover{color:#666;}
.btn,a,.btn:hover,a:hover {
transition: all 0.3s ease-in-out;
outline: none !important;
}

.topbar {background:url(assets/lines.png);	height:10px;position: fixed;top: 0;width: 100%;z-index: 1000;}
.navbar-nav > li {font-size: 1em; list-style: none; display:inline-block;padding: 15px;}
.navbar-default .navbar-nav>.active, .navbar-default .navbar-nav>.active:hover, .navbar-default .navbar-nav>.active:focus{background: none;color: #21abca;}

ul {
    background-color: rgba(193,193,193,0.38);
    box-shadow: 0 0 11px 30px rgba(193,193,193,0.38) ;
    width:100%;
}

h1 {
    float: right;
    margin-top: -10px;
    text-align: center;
    img {
    max-width: 50px;
    max-height: 60px;
    
    }
}

</style>
