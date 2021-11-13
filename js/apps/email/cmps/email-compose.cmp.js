import { eventBus } from '../../../services/event-bus-service.js';
export default {
  template: `
    <div class="box">
    <div @click=" isHidden = !isHidden" class="compose-button">
        <div class="icon">+</div>
        <div class="name-holder">Compose</div>
    </div>
        <div v-if="!isHidden" class="new-msg-box">
            <div class="flex-column">
                <div class="top-msg flex">
                    <div class="title">New Message</div>
                    <div class="btn-ruler">
                        <span  @click="isHidden = !isHidden" class="material-icons min-icon">minimize</span>
                    </div>
                </div>
                <div class="recipient-div">
                    <input v-model="newEmail.to" class="recipient-input" placeholder="recipient" type="text" value="">
                </div>
                <div class="subject-div">
                    <input v-model="newEmail.subject" class="subject-input" placeholder="subject" type="text" value="">
                </div>
                <div class="msg-div">
                    <form class="msg-form" action="">
                        <textarea v-model="newEmail.body" class="msg-textarea" name="message" value="">
                        </textarea>
                    </form>
                <div class="bottom-bar">
                    <div @click="sendEmail();isHidden = !isHidden" class="send-btn">send</div>
                    <span class="material-icons trash-icon">delete</span>
                </div>
                </div>
            </div>
        </div> 
    </div>

    `,
  data() {
    return {
      isHidden: true,
      newEmail: {
        to: '',
        subject: '',
        body: '',
        isRead: true,
        sentAt: 0,
        status: 'sent',
      },
    };
  },
  created() {
    eventBus.$on('noteToEmail', this.getNote);
  },
  methods: {
    getNote(note) {
      this.isHidden = !this.isHidden;
      console.log(note);
      if (note.type === 'note-txt') {
        this.newEmail.body = note.info.txt;
      } else if (note.type === 'note-img') {
        this.newEmail.subject = note.info.title;
        this.newEmail.body = note.info.url;
      } else if (note.type === 'note-todos') {
        this.newEmail.subject = note.info.label;
        note.info.todos.forEach((element) => {
          this.newEmail.body += ` 
                      • ${element.txt}`;
        });
      } else if (note.type === 'note-video') {
        this.newEmail.subject = note.info.label;
        this.newEmail.body = note.info.url;
      } else {
        this.newEmail.subject = note.subject;
        this.newEmail.to = note.to;
        this.newEmail.body = note.body;
      }
    },
    sendEmail() {
      if (this.newEmail.to !== '' && this.newEmail.subject !== '') {
        this.newEmail.sentAt = Date.now();
        eventBus.$emit('new email created', this.newEmail);
        const msg = { type: 'success', txt: 'Sending email..' };
        eventBus.$emit('showMsg', msg);
      } else {
        const msg = { type: 'error', txt: 'Fields EMPTY' };
        eventBus.$emit('showMsg', msg);
      }
    },
    cleanfields() {
      this.newEmail.to = '';
      this.newEmail.subject = '';
      this.newEmail.body = '';
      this.newEmail.sentAt = 0;
      //   console.log('good');
    },
  },
};
