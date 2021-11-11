import { noteService } from '../services/note-Service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFillter from '../cmps/note-filter.cmp.js';
import addNote from '../cmps/add-note.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';
export default {
  template: `
        <section class="app-main flex-column-center">
        <add-note />
            <note-list :notes='notesToShow' />
            <note-fillter></note-Fillter>
        </section>
    `,
  data() {
    return {
      notes: null,
      selectednote: null,
      filterBy: null,
      istextFormatActive: null,
      isImageActive: null,
      isListActive: null,
    };
  },
  created() {
    eventBus.$on('textFormatActive', (istextFormatActive) => {
      this.istextFormatActive = istextFormatActive;
    });
    eventBus.$on('isImageActive', (isImageActive) => {
      this.isImageActive = isImageActive;
    });
    eventBus.$on('isListActive', (isListActive) => {
      this.isListActive = isListActive;
    });
    eventBus.$on('deleteNote', this.deleteNote);
    eventBus.$on('textareaTxt', this.addNote);
    eventBus.$on('noteColor', this.setColor);
    this.loadNotes();
  },
  methods: {
    setColor(pickColor) {
      console.log(pickColor);
      noteService.getById(pickColor.id).then((note) => {
        note.style.backgroundColor = pickColor.color;
        noteService.save(note).then(() => {
          this.loadNotes();
        });
      });
    },
    loadNotes() {
      noteService.query().then((notes) => (this.notes = notes));
    },
    addNote(textareaTxt) {
      if (this.istextFormatActive) {
        var noteTxt = {
          info: {
            txt: textareaTxt,
          },
          style: {
            backgroundColor: '#11111',
          },
          isPinned: false,
          type: 'note-txt',
        };
        noteService.add(noteTxt).then(() => this.loadNotes());
      } else if (this.isImageActive) {
        var noteImage = {
          info: {
            title: 'puki and me',
            url: textareaTxt,
          },
          style: {
            backgroundColor: 'lightblue',
          },
          isPinned: false,
          type: 'note-img',
        };
        noteService.add(noteImage).then(() => this.loadNotes());
      } else if (this.isListActive) {
        var emptyObject = {};
        var noteList = {
          info: {
            label: 'i real trying my best :(',
            todos: [],
          },
          style: {
            backgroundColor: 'lightblue',
          },
          isPinned: false,
          type: 'note-todos',
        };
        var list = textareaTxt.split(',');
        list.forEach((line, idx) => {
          noteList.info.todos.push({});
          noteList.info.todos[idx].txt = line;
          noteList.info.todos[idx].doneAt = Date.now();
          console.log('im here');
        });
        noteService.add(noteList).then(() => this.loadNotes());
      }
    },
    deleteNote(noteId) {
      noteService.remove(noteId).then(() => this.loadNotes());
    },
  },
  computed: {
    notesToShow() {
      console.log(this.notes);
      return this.notes;
    },
  },
  components: {
    noteList,
    noteFillter,
    addNote,
  },
};
