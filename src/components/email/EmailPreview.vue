<template>
  <div class="single-email home">
    <button @click.stop="archiveEmail"><i class="el-icon-delete"></i>
</button>
    <h3>{{email.subject}}</h3>
    <p>{{email.body}}</p>   
  </div>
</template>

<script>
import EmailList from './EmailList'

export default {  
  name: 'email-preview',
  props:['email'],
  methods: {
    archiveEmail() {
      console.log('activated')
      this.$emit('archive')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


.single-email {
  text-align: left;
  padding-left: 10px;
  border: 1px solid yellow;
  h3 {
    margin: 0;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 95%;
  } 
}
.read {
  color: red;
  font-weight: bold;

}

a {
  color: #42b983;
}
</style>
