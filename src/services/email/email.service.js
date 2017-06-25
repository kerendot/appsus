const urlEmail = 'http://localhost:3003/email';
import axios from 'axios';

function getEmails() {
  return axios.get(urlEmail);
}

function getEmail(email){
  return axios.get(`${urlEmail}/${email.id}`);
}

function archiveEmail(email){
  return axios.delete(`${urlEmail}/${email.id}`);
}

function saveEmail(subject, body) {
  return axios.post(urlEmail, {
    subject,
    body
  });
}

export default {
  getEmails,
  archiveEmail,
  saveEmail
}