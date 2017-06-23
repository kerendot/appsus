<template>
  <div class="single-email home">
    <button @click.stop="archiveEmail"><i class="el-icon-delete"></i>
</button>
    <h4>{{email.subject}}</h4>
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
<style scoped>

.single-email {
  text-align: left;
  padding-left: 10px;
  border: 1px solid yellow;
}

.read {
  color: red;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 95%;
    color: grey;
}
a {
  color: #42b983;
}
</style>
