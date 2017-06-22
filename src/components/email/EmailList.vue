<template>
  <div class="home">
    <h2>Email list</h2>
    <email-preview></email-preview>
    <email-preview></email-preview>
    <email-preview></email-preview>
    <email-preview></email-preview>
    <email-preview></email-preview>
    <email-preview></email-preview>
    <email-preview></email-preview>
    <email-preview></email-preview>
  </div>
</template>

<script>
import EmailPreview from './EmailPreview'

export default {
  name: 'email-list',
  components: {
    EmailPreview
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
