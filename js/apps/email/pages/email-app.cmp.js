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

    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => {
                    this.emails = emails
                })
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
        }

    },
    components: {
        emailList,
        emailSideRuler,
        emailFilter,
    }
};