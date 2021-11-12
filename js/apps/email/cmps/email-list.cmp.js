import emailPreview from './email-preview.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
    props: ['emails'],
    template: `
    <section class="list-holder">
        <div class="scroll-div">
            <table>
                <tbody>
                <tr class="preview-tr" v-for="email in emails" :key="email.id">
                    <email-preview :email="email" />
                    <span class="material-icons list-icons">drafts</span>
                    <span @click="deleteMail(email.id)" class="material-icons list-icons">delete</span>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
    `,
    methods: {
        deleteMail(id) {
            eventBus.$emit('mail to delete', id)
        },
    },
    components: {

        emailPreview,
    },
};