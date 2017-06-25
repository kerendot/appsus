<template>
  <div v-if="email">
    <button @click.stop="archiveEmail(email)"><i class="el-icon-delete"></i>
    </button>
    <h3> {{email.subject}} </h3>
    <p> {{email.body}} </p>
      
  </div>
</template>

<script>

export default {  
  name: 'email-details',
  props: ['email'],
  methods: {
    archiveEmail(email) {
      this.$emit('archiveEmail', email)
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
