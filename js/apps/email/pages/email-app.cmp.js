import { emailService } from '../services/email-services.js';
import { eventBus } from '../../../services/event-bus-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailSideRuler from '../cmps/email-side-ruler.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';


export default {
    template: `
        <main class="app-content">
        <email-sideRuler />
        <div>
            <email-filter  @filtered="setFilter" />
            <email-list :emails="emailsToShow" />
        </div>
        </main>
    `,
    data() {
        return {
            criteria: {
                status: 'inbox',
                txt: '',
                // isRead: null,
                // isStared: true, 
            },
            emails: null,
        }
    },
    created() {
        this.loadEmails()
        eventBus.$on('new email created', (newEmail) => {
            return emailService.add(newEmail)
                .then(() => {
                    this.loadEmails();
                })
        })
        eventBus.$on('mail to delete', (id) => {
            return emailService.remove(id)
                .then(() => {
                    this.loadEmails();
                    const msg = { type: 'success', txt: 'Email deleted' };
                    eventBus.$emit('showMsg', msg);
                })
        })
        eventBus.$on('change status', (folderStr) => {
            this.criteria.status = folderStr;
            this.loadEmails();
        })
        eventBus.$on('set isRead to true', (id) => {
            emailService.getById(id).then((email) => {
                email.isRead = true
                emailService.save(email).then(
                    this.loadEmails()
                )
            })
        })
        eventBus.$on('set not read', (id) => {
            emailService.getById(id).then((email) => {
                email.isRead = false
                emailService.save(email).then(
                    this.loadEmails()
                )
            })
        })

    },
    methods: {
        // sortByTitle(emails) {
        //     emails.sort(function(a, b) {
        //         if (a.subject < b.subject) { return -1; }
        //         if (a.subject > b.subject) { return 1; }
        //         return 0;
        //     })
        //     return emails
        // },
        loadEmails() {
            emailService.query(this.criteria)
                .then((emails) => {
                    this.emails = emails
                });
        },
        setFilter(str) {
            console.log(str)
            this.criteria.txt = str;
            this.loadEmails()
        },
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            const searchStr = this.filterBy.txt.toLowerCase();
            const emailsToShow = this.emails.filter(email => {
                return email.to.toLowerCase().includes(searchStr)
            });
            return emailsToShow;
        },

        emailCriteriaToShow() {
            if (!this.criteria) {
                const status = this.status;
                this.emails.filter(email => {
                    return email.status.includes(status)
                });
            } else {
                const status = this.status;
                const searchStr = this.criteria.txt.toLowerCase();
                const emailsToShow = this.emails.filter(email => {
                    return email.txt.toLowerCase().includes(searchStr) ||
                        email.subject.toLowerCase().includes(searchStr) &&
                        email.status.includes(status)
                });
                return emailsToShow;

            }
        }

    },
    components: {
        emailList,
        emailSideRuler,
        emailFilter,
    }
};