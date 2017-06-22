<template>
  <div class="single-email home">
    <button @click.stop="archiveEmail">X</button>
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
    }
  }
// TODO --- MAKE PREVIEW TEXT TO MSGS (text overflow --- ellipsis)
//   computed: {
//     textPreview() {}
// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.single-email {
  text-align: left;
  padding-left: 10px;
  border: 1px solid yellow;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
p {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
