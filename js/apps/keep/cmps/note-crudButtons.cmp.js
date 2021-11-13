import { eventBus } from '../../../services/event-bus-service.js';
// import
export default {
  props: ['note'],
  template: `
          <section class='icons-in-notes'>
            <span @click="pinNote(note.id)" :class='{pined :note.isPinned}' class="material-icons">push_pin</span>
            <span class='palette-continer'>
              <span class="material-icons">palette</span>
              <input value='#111111' @change="pickColor($event)" class='input-palette' type="color" >
            </span>
            <span @click="sendEmail(note)" class="material-icons">email</span>
            <span @click="editNote(note.id)" class="material-icons">edit</span>
           <span @click="deleteNote(note.id)" class="material-icons">delete</span>
           <span @click="duplicNote(note.id)" class="material-icons">content_copy</span>
          </span>
          </section>
        `,
  methods: {
    pickColor(e) {
      var pickColor = {
        color: e.target.value,
        id: this.note.id,
      };
      // console.log(e.target.value);
      eventBus.$emit('noteColor', pickColor);
    },
    deleteNote(noteId) {
      eventBus.$emit('deleteNote', noteId);
    },
    editNote(noteId) {
      this.$router.push(`/keep/${noteId}`);
    },
    pinNote(noteId) {
      eventBus.$emit('pinted', noteId);
    },
    duplicNote(noteId) {
      eventBus.$emit('duplicat', noteId);
    },
    sendEmail(note) {
      this.$router.push(`/email`);
      const msg = { type: 'success', txt: 'Converting note..' };
      eventBus.$emit('showMsg', msg);
      setTimeout(() => {
        eventBus.$emit('noteToEmail', note);
      }, 500);
    },
  },
};
