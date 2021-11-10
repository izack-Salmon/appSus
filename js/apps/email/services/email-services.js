import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js';
const EMAIL_KEY = 'emails';
export const emailService = {
    query,
};
var gEmails = []

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus',
};

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
};
const email2 = {
    id: 'e103',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
};
const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'], // has any of the labels
};

gEmails.push(email)
gEmails.push(email2)

_createEmails()

function query() {
    return storageService.query(EMAIL_KEY);
}




function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId);
}

function save(email) {
    if (email.id) return storageService.put(EMAIL_KEY, email);
    else return storageService.post(EMAIL_KEY, email);
}

// function addReview(review, bookId) {

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