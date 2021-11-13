import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js';
const EMAIL_KEY = 'emails';

export const emailService = {
  query,
  add,
  remove,
  getById,
  save,
};
var gEmails = [];

const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
};

const email = {
  id: 'd121',
  subject: 'Vue Code',
  body: 'I "love" vue coding :)',
  isRead: false,
  sentAt: 1551133930594,
  to: 'user@appsus.com',
  status: 'inbox',
};

_createEmails();

function query(data) {
  var emailsToShow;

  const criteira = {
    status: data.status,
    txt: data.txt,
    isRead: data.isRead,
    // isStared: true, // (optional property, if missing: show all)
  };
  console.log(criteira);
  emailsToShow = storageService.query(EMAIL_KEY).then((emails) => {
    console.log(emails);
    emailsToShow = emails.filter((email) => {
      if (criteira.isRead !== null) {
        return (
          email.status.includes(criteira.status) &&
          email.isRead === criteira.isRead &&
          (email.body.includes(criteira.txt) || email.subject.includes(criteira.txt))
        );
      } else {
        return (
          email.status.includes(criteira.status) &&
          (email.body.includes(criteira.txt) || email.subject.includes(criteira.txt))
        );
      }
    });
    console.log(emailsToShow);
    return emailsToShow;
  });
  console.log('dsdsd', emailsToShow);
  return Promise.resolve(emailsToShow);
}

function add(email) {
  return storageService.post(EMAIL_KEY, email);
}

function remove(emailId) {
  return storageService.remove(EMAIL_KEY, emailId);
}

function save(email) {
  if (email.id) return storageService.put(EMAIL_KEY, email);
  else return storageService.post(EMAIL_KEY, email);
}

function getById(emailId) {
  return storageService.get(EMAIL_KEY, emailId);
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY);
  if (!emails || !emails.length) {
    utilService.saveToStorage(EMAIL_KEY, gEmails);
  }
  return emails;
}
