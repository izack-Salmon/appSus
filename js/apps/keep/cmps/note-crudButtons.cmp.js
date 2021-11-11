import { eventBus } from '../../../services/event-bus-service.js';
// import
export default {
  props: ['note'],
  template: `
          <section class='icons-in-notes'>
            <span class="material-icons">push_pin</span>
            <span class='palette-continer'>
              <span @click='pickColor' class="material-icons">palette</span>
              <input class='input-palette' type="color">
            </span>
            <span class="material-icons">email</span>
            <span @click="editNote(note.id)" class="material-icons">edit</span>
           <span @click="deleteNote(note.id)" class="material-icons">delete</span>
          </span>
          </section>
        `,
  methods: {
    pickColor() {},
    deleteNote(noteId) {
      eventBus.$emit('deleteNote', noteId);
    },
    editNote(noteId) {
      this.$router.push(`/keep/${noteId}`);
    },
  },
};
