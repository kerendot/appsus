
// Client Side State of the store
// Kind of caching...
var emails = [];
var archived = [];

function getEmails() {
  return new Promise(resolve => {
    // simple caching mechanism
    if (emails.length) {
      resolve(emails);
    }
    else {
      setTimeout(() => {
        emails = generateEmails();
        resolve(emails);
      }, 500);
    }

  });
}

function getEmailById(emailId) {
  return getEmails().then(emails => {
    const email = emails.find(email => emailId === email.id);
    return email;
  });
}

function archiveEmail(email) {
  console.log('Archiving the email', email)
  var idx = emails.indexOf(email)
  emails.splice(idx, 1);
  archived.push(idx);
  
}

function getNext(email) {
    // select next in a cyclic way
    var idx = emails.indexOf(email);
    return (idx < emails.length-1)?  
          emails[idx+1] : emails[0];
}

function saveEmail(subject, body) {

  console.log('new mail is in handler')

  var newEmail = {
    id: emails.length + 1,
    subject: `${subject}`,
    body: `${body}`,
    isRead: false
  }

  setTimeout(function() {
    emails.unshift(newEmail);
    alert('you have new mail!')
  }, 2000); 
  // console.log(newEmail)
};

// Used to create local data with no AJAX
function generateEmails() {
  const subject = ['Re: Your Avocode trial has ended', 
                  'The Future is made in Javascript',
                  'Reminder: You’re invited to join Coding Academy', 
                  'Discover interesting projects on GitHub',
                  'Your May Waze Carpool summary', 
                  '30-day challenges: could you do it?'];

  return subject.map(generateEmail);
}

function generateEmail(subject, body, i) {
  return {
    id: i + 1,
    subject: `${subject}`,
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, tenetur, nesciunt consequatur iusto molestiae quaerat hic! Similique aliquid quis id doloribus debitis libero corporis dignissimos, quibusdam, consequatur laboriosam amet consectetur.`,
    isRead: false
  }
}


export default {
  getEmails,
  archiveEmail,
  getNext,
  saveEmail,
  generateEmail
  
}