<template>
  <div>
    <el-form class="compose">
      <el-form-item>
        <h3>Compose new email</h3>
        <el-input placeholder="Subject..." v-model="newSubject"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Write something..." type="textarea" v-model="newBody"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="newMail">Send</el-button>
        <el-button @click="close">Cancel</el-button>
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
    },
    close() {
      this.$emit('cancel');
      this.newSubject = '';
      this.newBody = '';
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.compose {
//   width: 80%;
//   max-width: 600px;
//   background: lightgray;
//   border: 1px solid gray;
//   padding: 0px 50px 0px 50px;
//   border-radius: 1em;
//   text-align: center;
//   position: absolute;
//   z-index: 999;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   h3 {
//     text-align: center;
//   }
// }
// .popup {
    display: flex;
    flex-direction: column;
    background: rgba(232, 232, 232, 1);
    padding: 30px;
    box-shadow: 0 0 9px 4px rgba(47, 64, 68, 0.5);
    text-align: center;
    position: fixed;
    left: 42%;
    top: 20%;
    h1 {
        color: darkcyan;
        margin-top: 0px;
    }
}
</style>
