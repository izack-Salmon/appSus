import { emailService } from '../services/email-services.js';
import { eventBus } from '../../../services/event-bus-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailSideRuler from '../cmps/email-side-ruler.cmp.js';



export default {
    template: `
        <main class="app-content">
        <email-sideRuler />
        <email-list :emails="emails" />
        </main>
    `,
    data() {
        return {
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
    },
    computed: {

    },
    components: {
        emailList,
        emailSideRuler,
    }
};