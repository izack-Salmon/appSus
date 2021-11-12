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
                status: 'sent',
                txt: '',
                // isRead: null,
                // isStared: true, 
            },
            emails: null,
            filterBy: null,
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
                })
        })
        eventBus.$on('change status', (folderStr) => {
            this.criteria.status = folderStr;
            console.log(folderStr, 'this.stat=', this.criteria.status)
            this.loadEmails();
        })

    },
    methods: {
        loadEmails() {
            emailService.query(this.criteria)
                .then((emails) => {
                    console.log(emails);
                    this.emails = emails
                });


        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
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