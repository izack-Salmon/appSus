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


const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus',
};

var gEmails = [{
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'SALE!',
        body: ' blablablabla 120!!',
        isRead: true,
        sentAt: 1551133930694,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'SALE!',
        body: 'blablablabla 120!!',
        isRead: false,
        sentAt: 1551133930593,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: true,
        sentAt: 1551133931594,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Hello there',
        body: 'Call me 052-1234567 ;)',
        isRead: false,
        sentAt: 1551133930494,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: true,
        sentAt: 1551133930591,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Hello there',
        body: 'Call me 052-1234567 ;)',
        isRead: false,
        sentAt: 1551133930514,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Hello',
        body: 'hi hola shalom',
        isRead: true,
        sentAt: 1551133930592,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'Free Tutorial bla bla bla bla',
        isRead: false,
        sentAt: 1551133930584,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: false,
        sentAt: 1551133930534,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: false,
        sentAt: 1551133930534,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Shalom Shalom',
        body: 'hey hey hey hey hey',
        isRead: false,
        sentAt: 1551133931234,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: false,
        sentAt: 1551133934321,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: false,
        sentAt: 1551133930534,
        to: 'user@appsus.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: false,
        sentAt: 1551133030034,
        to: 'user@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: false,
        sentAt: 1551133030034,
        to: 'user@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue Code',
        body: 'I "love" vue coding :)',
        isRead: false,
        sentAt: 1551133030034,
        to: 'user@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133830009,
        to: 'yossihalfon@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133833330,
        to: 'yossihalfon@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133830220,
        to: 'yossihalfon@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133830204,
        to: 'yossihalfon@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133830010,
        to: 'yossihalfon@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133830003,
        to: 'yossihalfon@appsus.com',
        status: 'drafts',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133830006,
        to: 'yossihalfon@appsus.com',
        status: 'trash',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133830005,
        to: 'yossihalfon@appsus.com',
        status: 'sent',
    },
    {
        id: utilService.makeId(),
        subject: 'Vue',
        body: 'Im a NINJA!',
        isRead: false,
        sentAt: 1551133830004,
        to: 'yossihalfon@appsus.com',
        status: 'trash',
    },
];


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