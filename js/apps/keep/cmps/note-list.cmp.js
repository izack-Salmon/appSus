import notePreview from '../cmps/note-preview.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['notes'],
  template: `
        <div class='note-container' v-if='notes'>
           <div v-for="note in notes" :style="{backgroundColor: note.style.backgroundColor}" @dragStart='startDrage($event,note)' v-if='!note.isPinned' draggable='true' :class='note.id' class='note-preview-container'>
             <!-- <div v-if=note></div> -->
               <note-preview :note="note"/>
            </div>
        </div>
    `,
  created() {},
  data() {
    return {
      container: '#f0f0f0',
      evnet: null,
    };
  },
  methods: {
    getClass() {},
  },
  computed: {},
  components: {
    notePreview,
  },
};
