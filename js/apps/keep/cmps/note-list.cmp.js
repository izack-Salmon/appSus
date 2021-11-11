import { noteService } from '../services/note-Service.js';
import notePreview from '../cmps/note-preview.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['notes'],
  template: `
        <div class='note-container' v-if='notes'>
           <div v-for="note in notes" :style="{backgroundColor: note.style.backgroundColor}" :class='note.id' class='note-preview-container'>
               <note-preview :note="note"/>
            </div>
        </div>
    `,
  created() {
    // this.evnet = $event;
  },
  data() {
    return {
      // notes: this.notes,
      container: '#f0f0f0',
      evnet: null,
    };
  },
  methods: {
    getClass() {},
  },
  computed: {
    // getColor(pickColor) {
    //   console.log(pickColor.id);
    //   console.log(pickColor.color);
    //   return pickColor.color;
    // },
    // this.container = color;
  },
  components: {
    notePreview,
  },
};
