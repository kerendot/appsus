<template>
  <div class="home">
    <email-preview v-for="currEmail in emails" 
          :key="currEmail.id"
          :email="currEmail"
          :class="{unread:!currEmail.isRead}"
          @archive="archiveEmail(currEmail)"
          @click.native="selectEmail(currEmail)">
    </email-preview>
  </div>
</template>

<script>
import EmailPreview from './EmailPreview'

export default {
  name: 'email-list',
  props: ['emails'],
  components: {
    EmailPreview,
  },
  
  methods: {
    selectEmail(email){
      this.$emit('select', email);
    },
    archiveEmail(email) {
      this.$emit('archive', email);
    },
    
  },

  data() {
    return {
    }
  },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

email-preview {
  padding: 0;
}


</style>
