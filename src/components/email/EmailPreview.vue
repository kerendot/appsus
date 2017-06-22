<template>
  <div class="single-email home">
    <h4>{{email.subject}}</h4>
    <p>{{email.body}}</p>

     
   
  </div>
</template>

<script>

export default {  
  name: 'email-preview',
  props:['email']
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

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
