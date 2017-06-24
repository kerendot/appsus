<template>
  <div >
    <el-form class="compose" ref="form" :model="form">
      <el-form-item>
        <h3>Compose new email</h3>        
        <el-input placeholder="Subject" v-model="newSubject"></el-input>
      </el-form-item>
      <el-form-item >
        <el-input placeholder="Write something" type="textarea" v-model="newBody"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="newMail">Send</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {  
  name: 'email-compose',

  data() {
    return {
      newSubject: '',
      newBody: '',
    } 
  },
  methods: {
    newMail() {
      this.$emit('newMail', this.newSubject, this.newBody);
      // clear values for next compose 
      this.newSubject = '';
      this.newBody = '';
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.compose {
  h3 {
    text-align: center;   
  }
    background: lightgray;
    padding: 0px 100px 0px 100px;
    border-radius: 1em;
    text-align: center;
    position: absolute;
    left: 35%;
    top: 30%;  
  
}
</style>
