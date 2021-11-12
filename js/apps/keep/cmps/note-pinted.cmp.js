import notePreview from '../cmps/note-preview.cmp.js';
export default {
  props: ['notes'],
  template: `
      <div v-if='notes' class='note-container'>
      <div v-for="note in notes" :style="{backgroundColor: note.style.backgroundColor}" v-if='note.isPinned' :class='note.id' draggable='true' class='note-preview-container'>
               <note-preview :note="note"/>
            </div>
      </div>
          `,
  data() {
    return {};
  },
  components: {
    notePreview,
  },
};
