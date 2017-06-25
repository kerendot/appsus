<template>
  <div v-if="email">
    <i class="el-icon-close" @click.stop="archiveEmail(email)"></i>
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
.el-icon-close:hover{
  cursor: pointer;
}
  i {
    float: left;
    padding: 15px;
  }

  h3 {
    color: rgba(54,155,181,1);
  }
</style>
