import { emailService } from '../services/email-services.js';
import emailList from '../cmps/email-list.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    template: `
        <main class="app-content">
        <section class="side-ruler">
            <email-compose />
        </section>
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
        emailCompose,

    }
};