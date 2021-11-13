import { emailService } from '../services/email-services.js';
import emailSideRuler from '../cmps/email-side-ruler.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';
import { router } from '../../../services/routes.js';

export default {
  template: `
    <section v-if="email" class="email-detail flex">
    <email-side-ruler />
    
        <div class="paper">
            <div class="action-ruler">
                <span @click="goToApp()" class="material-icons detail-icon on-icon">arrow_back</span>
                <span @click="deleteMail(email.id)" class="material-icons  detail-icon on-icon">delete</span>
                <span @click="notRead(email.id)" class="material-icons detail-icon on-icon">markunread</span>
                <span @click="emailToNote(email)" class="material-icons detail-icon on-icon">edit_note</span>
            </div>
            <div class="email-container">
                <div class="mail-header">{{email.subject}}</div>
                <div class="to-name">{{email.to}}</div>
                <div class="mail-body">{{email.body}}</div>
            </div>
        </div>
      
    </section>
    `,
  data() {
    return {
      email: null,
    };
  },
  created() {},
  methods: {
    emailToNote(email) {
      eventBus.$emit('emailToNote', email);
      this.$router.push('/keep');
    },
    notRead(id) {
      eventBus.$emit('set not read', id);
      const msg = { type: 'success', txt: 'Mark as Unread' };
      eventBus.$emit('showMsg', msg);
    },
    goToApp() {
      this.$router.push(`/email`);
    },
    deleteMail(id) {
      return emailService.remove(id).then(() => {
        this.$router.push(`/email`);
      });
    },
  },
  components: {
    emailSideRuler,
  },
  watch: {
    '$route.params.noteId': {
      handler() {
        const emailId = this.$route.params.emailId;
        emailService.getById(emailId).then((email) => {
          this.email = email;
          // console.log(this.email);
        });
      },
      immediate: true,
    },
  },
};
