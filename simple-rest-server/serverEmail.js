const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// This is my data (one day it will come from database)
let emails = generateEmails();
let archived = [];

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

// *** REST API ***
//LIST
app.get('/email', (request, response) => {
  console.log(`Returning ${emails.length} emails`);
  response.json(emails)
})

//READ
app.get('/email/:id', (req, res) => {
  const id = +req.params.id;
  const email = emails.find(currItem => currItem.id === id);
  res.json(email)
})

// ARCHIVE (delete)
app.delete('/email/:id', (req, res) => {
  const id = +req.params.id;
  archived = emails.filter(currItem => currItem.id === id);
  emails = emails.filter(currItem => currItem.id !== id);
  res.json(emails);
})

// CREATE
app.post('/email', (req, res) => {
  const email =  req.body; 
  email.id = findNextId();
  email.isRead = false;
  emails.unshift(email);
  res.json(emails);
})

function findNextId() {
    var maxId = 0;
    emails.forEach(email => {
        if (email.id > maxId) maxId = email.id;
    });
    return maxId + 1;
}


// // UPDATE
// app.put('/email:id', (req, res) => {
//   const id = +req.params.id;
//   const email =  req.body; 
//   emails = emails.map(currEmail => (currEmail.id === email.id)? email: currEmail);
//   res.json({msg: 'Item was updates!'});
// })