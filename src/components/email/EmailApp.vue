<template>
  <div class="home">
    <h2>emails!</h2>
  <div class="compose-email" v-show="false">
        
  </div>

    <button @click="showComposeMsg">Compose</button>
    <div class="email-box flex">
      <email-list class="email-list" 
      :emails="emails" 
      @archive="archiveEmail"
      @select="selectEmail">
        <h2>Email list</h2>
        
      </email-list>
      <email-details class="email-details" :email="selectedEmail">
      </email-details>

    </div>
    <email-status class="email-status"></email-status>
  </div>
</template>

<script>

import EmailList from './EmailList'
import EmailDetails from './EmailDetails'
import EmailStatus from './EmailStatus'
import EmailService from '../../services/email/email.service';

export default {
  
  name: 'email',

  components: {
  EmailList,
  EmailDetails,
  EmailStatus
},
  created() {
      EmailService.getEmails().then(emails => {
          this.emails = emails;
          this.selectedEmail = emails[0];
          console.log('got email', emails[0]);
      })
  },
  computed: {
        // emailsToDisplay: function () {
        //     if (this.filterBy) {
        //         return this.emails.filter(email =>
        //             email.subject.toLowerCase().includes(this.filterBy.subject.toLowerCase())
        //         );
        //     }
        //     else return this.emails;
        // }
    },

  data () {
    return {
      emails: null,
      selectedEmail: null,  
      newSubject: '',
      newBody: ''
    }
  },
  methods: {
    selectEmail(email) {
      this.selectedEmail = email;
      console.log('email at selected email');
      console.log(this.selectedEmail);
      
    },
    archiveEmail(email){
      console.log('Email handled in EmailApp')
      EmailService.archiveEmail(email)
    },

    showComposeMsg() {
      
    },

    createEmail() {
      EmailService.generateEmail(newSubject, newBody, emails.length);
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
    }
    .email-list {
    width: 30%;
    margin: 5px;
    }
  .email-details {
    width: 70%;
    margin: 5px;
    border: 1px solid blue;
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
