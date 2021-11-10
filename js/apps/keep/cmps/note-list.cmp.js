import { noteService } from '../services/note-Service.js';
import notePreview from '../cmps/note-preview.cmp.js';

export default {
  props: ['notes'],
  template: `
        <div class='note-container' v-if='notes'>
           <div class='note-preview-container' v-for="note in notes" key=note.id>
               <note-preview :note="note"/>
            </div>
        </div>
    `,
  created() {
    // console.log(this.notes);
  },
  data() {
    return {
      //   notes: this.notes,
    };
  },
  components: {
    notePreview,
  },
};
