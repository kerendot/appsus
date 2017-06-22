<template>
  <div>
    <input v-model="newSubject" type="text" placeholder="Enter subject">
    <textarea v-model="newBody" type="text" placeholder="write some words..."></textarea>
    <button @click="createEmail">Send Email</button>   
      
  </div>
</template>

<script>

export default {  
  name: 'email-details',
  methods: {
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
