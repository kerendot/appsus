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
  var idx = emails.indexOf(email)
  emails.splice(idx, 1);
  archived.push(idx);

}

function getNext(email) {
  // select next in a cyclic way
  var idx = emails.indexOf(email);
  return (idx < emails.length - 1) ?
    emails[idx + 1] : emails[0];
}

function saveEmail(subject, body) {
  var newEmail = {
    id: emails.length + 1,
    subject,
    body,
    isRead: false
  }

// timeout - to simultae server processing
  setTimeout(function () {
    emails.unshift(newEmail);
  }, 2000);
};

// Used to create local data with no AJAX
function generateEmails() {
  var emails = [];
  emails.push(generateEmail(1, 'Re: Your Avocode trial has ended', 'Re: Your Avocode trial has ended Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in  '));
  emails.push(generateEmail(2, 'The Future is made in Javascript', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'));
  emails.push(generateEmail(3, 'Reminder: You’re invited to join Coding Academy', 'Reminder: You’re invited to join Coding Academy, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal '));
  emails.push(generateEmail(4, 'Discover interesting projects on GitHub', 'Reminder: Discover interesting projects on GitHub It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal '));
  emails.push(generateEmail(5, 'Your May Waze Carpool summary', 'Your May Waze Carpool summary The point of using Lorem Ipsum is that it has a more-or-less normal '));
  emails.push(generateEmail(6, '30-day challenges: could you do it?', 'R30-day challenges: could you do it? is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal '));
  return emails;

}


function generateEmail(id, subject, body) {
  return {
    id,
    subject,
    body,
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