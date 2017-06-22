<template>
  <div class="home">
    <h2>emails!</h2>
    <div class="email-box flex">
      <email-list class="email-list"></email-list>
      <email-details class="email-details"></email-details>
    </div>
    <email-status class="email-status"></email-status>
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
<style lang="scss" scoped>

.flex {
  display: flex;
}

.home {
  border: 1px solid red;
  .email-box {
    border: 1px solid purple;
    flex-direction: row;
    .email-list {
    width: 30%;
    margin: 5px;
    }
  .email-details {
    width: 70%;
    margin: 5px;
    
    }
  }
  
  .email-status {
    width: 100%;
  }
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
