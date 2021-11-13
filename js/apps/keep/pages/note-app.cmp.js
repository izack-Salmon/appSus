import { noteService } from '../services/note-Service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFillter from '../cmps/note-filter.cmp.js';
import addNote from '../cmps/add-note.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';
import notePinted from '../cmps/note-pinted.cmp.js';
export default {
  template: `
        <section class="app-main flex-column-center">
        <add-note />
        <note-fillter @filtered="setFilter"/>
        <note-pinted :notes='notes'/>
        <hr>
            <note-list :notes='notesToShow' />
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
      isSmartDisplayActive: null,
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
    eventBus.$on('isSmartDisplayActive', (isSmartDisplayActive) => {
      this.isSmartDisplayActive = isSmartDisplayActive;
    });
    eventBus.$on('deleteNote', this.deleteNote);

    eventBus.$on('textareaTxt', this.addNote);

    eventBus.$on('noteColor', this.setColor);

    eventBus.$on('pinted', this.notePin);

    eventBus.$on('duplicat', this.duplicatingNote);

    eventBus.$on('emailToNote', this.emailToNote);

    this.loadNotes();
  },
  methods: {
    emailToNote(email) {
      var noteEmail = {
        body: email.body,
        subject: email.subject,
        to: email.to,
        isPinned: true,
        type: 'note-email',
        style: { backgroundColor: '#6a1515' },
      };
      noteService.add(noteEmail).then(() => {
        this.loadNotes();
      });
    },
    duplicatingNote(noteId) {
      noteService.getById(noteId).then((note) => {
        noteService.add(note).then(() => {
          const msg = { type: 'success', txt: 'Note duplicated' };
          eventBus.$emit('showMsg', msg);
          this.loadNotes();
        });
      });
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    setColor(pickColor) {
      noteService.getById(pickColor.id).then((note) => {
        note.style.backgroundColor = pickColor.color;
        noteService.save(note).then(() => {
          this.loadNotes();
        });
      });
    },
    notePin(noteId) {
      noteService.getById(noteId).then((note) => {
        note.isPinned = !note.isPinned;
        noteService.save(note).then(() => {
          this.loadNotes();
          const msg = { type: 'info', txt: 'Note pined' };
          eventBus.$emit('showMsg', msg);
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
        noteService
          .add(noteTxt)
          .then(() => this.loadNotes())
          .then(() => {
            const msg = { type: 'success', txt: 'Note added' };
            eventBus.$emit('showMsg', msg);
          });
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
        });
        noteService.add(noteList).then(() => this.loadNotes());
      } else if (this.isSmartDisplayActive) {
        var noteYoutube = {
          info: {
            label: 'i real trying my best :(',
            url: textareaTxt,
          },
          style: {
            backgroundColor: 'lightblue',
          },
          isPinned: false,
          type: 'note-video',
        };
        noteService.add(noteYoutube).then(() => this.loadNotes());
      }
    },
    deleteNote(noteId) {
      noteService
        .remove(noteId)
        .then(() => this.loadNotes())
        .then(() => {
          const msg = { type: 'info', txt: 'Note deleted' };
          eventBus.$emit('showMsg', msg);
        });
    },
  },
  computed: {
    notesToShow() {
      if (!this.filterBy) return this.notes;
      const searchStr = this.filterBy.type.toLowerCase();
      console.log(this.notes);
      const notesToShows = this.notes.filter((note) => {
        return !note.isPinned && note.type.toLowerCase().includes(searchStr);
      });
      return notesToShows;
    },
  },
  components: {
    noteList,
    noteFillter,
    addNote,
    notePinted,
  },
};
