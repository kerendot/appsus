<template>
  <div id="app">
    <div class="topbar animated fadeInLeftBig"></div>
    <div class="navbar-wrapper">
        <div class="container">

            <div class="navbar navbar-default navbar-fixed-top" role="navigation" id="top-nav">
                <div class="container">

                    <!-- Nav Starts -->
                    <div class="navbar-collapse  collapse">
                        <ul class="nav navbar-nav navbar-right scroll">
                            <li class="active"><router-link to="/home">Home </router-link></li>
                            <li> <router-link to="/email">Emails </router-link></li>
                            <li><router-link to="/book">Books Store </router-link></li>
                            <li><router-link to="/place">Places</router-link></li>
                            <router-view></router-view>
                        </ul>
                    </div>
                    <!-- #Nav Ends -->

                </div>
            </div>

        </div>
    </div>
    
  
    

     
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
  margin-top: 60px;
}


a{color:#00a9c6; text-decoration:none;}
a:hover{color:#666;}
.btn,a,.btn:hover,a:hover {
transition: all 0.3s ease-in-out;
outline: none !important;
}

h1,h2,h3,h4{margin: 0;line-height: 1em;}
h1{font:700 5em Roboto,Arial,Helvetica;margin:0.25em 0;text-transform: uppercase;}
h2{font:300 2.5em Roboto,Arial,Helvetica;margin-bottom: 1.5em;}
h3{font:300 2em Roboto,Arial,Helvetica;margin:2em 0 1em 0;}
h4{font:300 1.5em Roboto,Arial,Helvetica;margin-bottom: 1em;}
h4 i{margin-right: 0.5em;}

p{font-size:1em;line-height: 1.7em; margin-bottom: 1.7em;}

.spacer{padding: 6em 0;}

.btn{border:none;border-radius: 0;padding: 1em 4em;background: rgba(0,0,0,0.5);text-transform: uppercase;}
.btn:hover,.btn:active{color: #fff;}
.btn-default{color: #ccc;border: 1px solid #aaa;}
.btn-default:hover,.btn-default:active{background: rgba(0,0,0,0.8);}
.btn-primary{color: #fff;background:#00a9c6;width: 100%;outline: none;}
.btn-primary:hover,.btn-primary:active,.btn-primary:focus{background:#1BC0DC;box-shadow: none;}

.topbar {background:url(assets/lines.png);	height:5px;position: fixed;top: 0;width: 100%;z-index: 1000;}
.navbar-nav > li {font-size: 1em;line-height: 3.6em; list-style: none; display:block; float: left; padding: 15px}
.navbar-fixed-top{top: 5px;}
.navbar-inverse{background: #111;}
.navbar-default .navbar-nav>.active, .navbar-default .navbar-nav>.active:hover, .navbar-default .navbar-nav>.active:focus{background: none;color: #21abca;}


#head,.carousel{margin-top: 0;}


</style>
