<template>
  <div class="home">
    <!--<h2>Keren's Appsus - Home Page</h2>-->
    <el-col class="col">
      <el-card class="card">
        <img src="http://marketingland.com/wp-content/ml-loads/2014/08/email-data-blue-ss-1920-800x450.jpg" class="image">
        <div>
          <div class="bottom">
            <el-button type="text" class="button">
              <router-link to="/email">EMAILS </router-link>
            </el-button>
  
          </div>
        </div>
      </el-card>
      <el-card class="card">
        <img src="http://az616578.vo.msecnd.net/files/2016/01/03/635873821517718970351055939_Stack-of-books-great-education.jpg" class="image">
        <div>
          <div class="bottom">
            <el-button type="text" class="button">
              <router-link to="/book">BOOKS STORE </router-link>
            </el-button>
          </div>
        </div>
      </el-card>
      <el-card class="card">
        <img src="https://previews.123rf.com/images/tovovan/tovovan1312/tovovan131200017/24170069-Abstract-city-map-with-places-of-interest-Stock-Vector-location.jpg" class="image">
        <div>
          <div class="bottom">
            <el-button type="text" class="button">
              <router-link to="/place">PLACES </router-link>
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  display: flex;
}

.col {
  display: flex;
  overflow: hidden;  
  justify-content: center;
  width: 100%;
}

.card {
  width: 33%;
  }
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
}

a{color:#00a9c6; text-decoration:none; text-transform: uppercase; font-size: 20px;}
a:hover{color:#666;}
.btn,a,.btn:hover,a:hover {
transition: all 0.3s ease-in-out;
outline: none !important;
}

</style>