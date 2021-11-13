import emailPreview from './email-preview.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
  props: ['emails'],
  template: `
    <section class="list-holder">
        <div class="scroll-div">
            <table>
                <tbody>
                <tr @click="markAsRead(email.id)" v-bind:class="{markit:email.isRead}" class="preview-tr" v-for="email in emails" :key="email.id">
                    <email-preview :email="email" />
                    <span class="material-icons list-icons on-icon">drafts</span>
                    <span @click="deleteMail(email.id)" class="material-icons list-icons on-icon">delete</span>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
    `,
  data() {
    return {};
  },
  methods: {
    deleteMail(id) {
      eventBus.$emit('mail to delete', id);
    },
    markAsRead(id) {
      eventBus.$emit('set isRead to true', id);
    },
  },
  components: {
    emailPreview,   
  },
};
