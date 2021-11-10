import { storageService } from '../../../services/async-storage-service.js';
const EMAIL_KEY = 'emails';
export const emailService = {};


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
const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'], // has any of the labels
};


_createBooks()

function query() {
    return email;
}




function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId);
}

function save(email) {
    if (email.id) return storageService.put(EMAIL_KEY, email);
    else return storageService.post(EMAIL_KEY, email);
}

// function addReview(review, bookId) {
//     return getById(bookId).then(book => {
//         console.log('from addReview', book)
//         if (!book.reviews) book.reviews = []
//         book.reviews.push(review)
//         return storageService.put(BOOKS_KEY, book) //.then(updatedBook => updatedBook)
//     })
// }


function getById(emailId) {
    return storageService.get(EMAIL_KEY, emailId);
}


function _createBooks() {
    let books = utilService.loadFromStorage(EMAIL_KEY);
    if (!books || !books.length) {
        utilService.saveToStorage(EMAIL_KEY, gEmails);
    }
    return books;
}