<template>
  <div class="home">
    <h2>Read emails:</h2>
    <el-progress :percentage="readPerc"></el-progress>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar'

export default {
  name: 'email-status',
  props: ['readPerc'],
  components: {
    ProgressBar,
  },
  methods: {
  },
  computed: {
  
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
