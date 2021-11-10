import { emailService } from '../services/email-services.js';
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