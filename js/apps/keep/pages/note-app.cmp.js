import { noteService } from '../services/note-Service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFillter from '../cmps/note-filter.cmp.js';
export default {
  template: `
        <section class="app-main">
        <note-fillter></note-Fillter>
            <note-list :notes='notesToShow' />
        </section>
    `,
  data() {
    return {
      notes: null,
      selectednote: null,
      filterBy: null,
    };
  },
  created() {
    this.loadNotes();
  },
  methods: {
    loadNotes() {
      noteService.query().then((notes) => (this.notes = notes));
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
  },
};
