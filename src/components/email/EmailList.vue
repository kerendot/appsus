<template>
  <div class="home">
    <h2>Email list</h2>
    <email-preview v-for="currEmail in emailsToDisplay" 
    :key="currEmail.id"
    :email="currEmail"
    @delete="deleteEmail(currEmail)">
    </email-preview>
  </div>
</template>

<script>
import EmailPreview from './EmailPreview'
import EmailService from '../../services/email/email.service';

export default {
  name: 'email-list',
  components: {
    EmailPreview
  },

  created() {
      EmailService.getEmails().then(emails => {
          this.emails = emails;
      })
  },
  data() {
    return {
    emails: null
    }
  },
  computed: {
        emailsToDisplay: function () {
            if (this.filterBy) {
                return this.emails.filter(email =>
                    email.subject.toLowerCase().includes(this.filterBy.subject.toLowerCase())
                );
            }
            else return this.emails;
        }
    },
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
