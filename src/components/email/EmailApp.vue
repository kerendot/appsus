<template>
  <div class="home">
    <h2>You have {{emailsLength}} emails</h2>
    <!-- NEW MSG -->
    <el-button v-show="!showCompose" @click="openComposeMsg"> Compose </el-button>
  
    <email-compose v-show="showCompose" @newMail="newEmailHandler" @cancel="closeComposeMsg">
    </email-compose>
  
    <!--EMAILS-->
    <div class="email-box flex">
      <div class="list-filter">
        <email-filter class="filter" @filter="setFilter"></email-filter>
        <email-list v-if="emailsToDisplay" class="email-list" :emails="emailsToDisplay" @archive="archiveEmail" @select="selectEmail">
          <h2>Email list</h2>
        </email-list>
      </div>
      <email-details class="email-details" :email="selectedEmail" @archiveEmail="archiveEmail">
      </email-details>
    </div>
  
    <email-status class="email-status" :readPerc="readPerc">
    </email-status>

  </div>
</template>

<script>

import EmailList from './EmailList'
import EmailDetails from './EmailDetails'
import EmailCompose from './EmailCompose'
import EmailStatus from './EmailStatus'
import EmailFilter from './EmailFilter'
import EmailService from '../../services/email/email.service';

export default {

  name: 'email',

  components: {
    EmailList,
    EmailDetails,
    EmailStatus,
    EmailCompose,
    EmailFilter

  },
  data() {
    return {
      emails: null,
      selectedEmail: null,
      showCompose: false,
      filter: null,
      emailsCountPrev: null //used to track when new email arrives
    }
  },
  created() {
    EmailService.getEmails().then(emails => {
      this.emails = emails;
      this.selectedEmail = emails[0];
      this.emailsCountPrev = emails.length;
    })
  },
  computed: {
    
    emailsToDisplay: function () {
      let filtered = this.emails;
      let filterObj = this.filter;
      if (filterObj) {
        if (filterObj.text) {
          filtered = this.emails.filter(function (email) {
            return email.body.toLowerCase().includes(filterObj.text.toLowerCase())
          });
        }
        if (filterObj.emailStatus === 'Read') {
          filtered = filtered.filter(email => email.isRead);
        }
        if (filterObj.emailStatus === 'UnRead') {
          filtered = filtered.filter(email => !email.isRead);
        }
      }
      return filtered;
    },
    readPerc: function () {
      if (this.emails) {
        let readFiltered = this.emails.filter(email => email.isRead);
        let readCount = readFiltered.length;
        return Math.round((readCount / (this.emails.length) * 100));
      }
      else return 0;
    },
    //this prop used to identify when new email arrives and alert the user
    emailsLength: function(){
      if (this.emails && this.emailsCountPrev){
          if (this.emails.length > this.emailsCountPrev)
            this.$message('You have new email');
          return this.emails.length;
      }
    },
  },
  methods: {
    selectEmail(email) {
      this.selectedEmail = email;
      setTimeout(function () {
        if (!email.isRead) return email.isRead = true;
      }, 1000);
    },
    archiveEmail(email) {
      EmailService.archiveEmail(email)
      this.selectedEmail = this.emails[0];
    },
    openComposeMsg() {
      this.showCompose = true;
    },
    closeComposeMsg() {
      this.showCompose = false;
    },
    newEmailHandler(subject, body) {
      EmailService.saveEmail(subject, body);
      this.closeComposeMsg();
    },
    setFilter(ev) {
      this.filter = ev;
    }
  },
  watch:{
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.flex {
  display: flex;
}

.home {
  .email-box {
    flex-direction: row;
    margin-top: 10px; 
  }

  .list-filter {
        width: 40%;
  }
  .email-list {
    // width: 40%;
    margin: 5px;
    border: 2px solid brown;

    background-image: linear-gradient(180deg, rgba(255, 255, 255, 1) 0, rgba(247, 245, 185, 1) 100%);
    background-position: 50% 50%;
    background-origin: padding-box;
    background-clip: border-box;
    background-size: auto auto;
  }
  .email-details {
    width: 60%;
    margin: 5px;
    border: 2px solid brown;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 1) 0, rgba(247, 245, 185, 1) 100%);
    background-position: 50% 50%;
    background-origin: padding-box;
    background-clip: border-box;
    background-size: auto auto;
  }
  .email-status {
    width: 100%;
  }
}

h1,
h2 {
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
