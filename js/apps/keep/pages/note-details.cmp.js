import { noteService } from '../services/note-Service.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
  template: `
  <section v-if='note' class='app-main flex-column-center'>
    <h2>details page / edit note</h2>
    <h3>note type : {{note.type}}</h3>
    <h3 class='center'>isPinned</h3><input type="checkbox" id="checkbox" v-model="note.isPinned">
    <div class='note-txt' v-if='txtType'>
      <input v-model='note.info.txt'>
    </div>
    <div v-else-if='imgType'>
    <h3 class='center'>title</h3><input type="text" v-model='note.info.title'>
    <h3 class='center'>img url</h3><input type="text" v-model='note.info.url'>
    </div>
    <div v-else-if='todosType'>
    <input type="text" v-model='note.info.label'> 
    <template v-for="(todo,index) in note.info.todos">
      <input v-model='note.info.todos[index].txt' type="text">
    </template>
    </div>
    <div v-else-if='videoType'>
      <h3 class='center'>label</h3> <input v-model='note.info.label' type="text">
      <h3 class='center'>url</h3> <input v-model='note.info.url' type="text">
      </div>
    <div v-else-if='emailType'>
      <h3 class='center'>to</h3> <input v-model='note.to' type="text">
      <h3 class='center'>subject</h3> <input v-model='note.subject' type="text">
      <h3 class='center'>body</h3> <input v-model='note.body' type="text">
      </div>
    <span @click='saveNote' class="material-icons">save</span>

  </section>
    `,
  data() {
    return {
      note: null,
      editNote: null,
      noteInfoTxt: null,
    };
  },
  methods: {
    getType() {
      return this.note.type;
    },
    saveNote() {
      noteService.save(this.note);
      const msg = { type: 'success', txt: 'Save note..' };
      eventBus.$emit('showMsg', msg);
      this.$router.push(`/keep`);
    },
  },
  computed: {
    txtType() {
      if (this.getType() === 'note-txt') {
        return true;
      }
    },
    imgType() {
      if (this.getType() === 'note-img') {
        return true;
      }
    },
    todosType() {
      if (this.getType() === 'note-todos') {
        return true;
      }
    },
    videoType() {
      if (this.getType() === 'note-video') {
        return true;
      }
    },
    emailType() {
      if (this.getType() === 'note-email') {
        return true;
      }
    },
  },
  watch: {
    '$route.params.noteId': {
      handler() {
        const noteId = this.$route.params.noteId;
        noteService.getById(noteId).then((note) => {
          this.note = note;
          // bookService.getNextBookId(noteId).then((noteId) => (this.nextBookId = bookId));
        });
      },
      immediate: true,
    },
  },
};
