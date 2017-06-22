<template>
  <div class="home">
    <h2>emails!</h2>
    <email-list></email-list>
    <email-details></email-details>
    <email-status></email-status>
  </div>
</template>

<script>

import EmailList from './EmailList'
import EmailDetails from './EmailDetails'
import EmailStatus from './EmailStatus'

export default {
  name: 'email',
  components: {
  EmailList,
  EmailDetails,
  EmailStatus
  },

  data () {
    return {
    }
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
