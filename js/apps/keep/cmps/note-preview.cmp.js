import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';
export default {
  props: ['note'],
  template: `
       <div class='note-preview-txt'>
            <div v-if='txtType'>
            <note-txt :note='note'/>
            </div>
            <div v-else-if='imgType'>
            <note-img :note='note'/>
            </div>
            <div v-else-if='todosType'>
            <note-todos :note='note'/>
            </div>
            <div v-else-if='videoType'>
            <note-video :note='note'/>
            </div>
       </div>
    `,
  methods: {
    getType() {
      return this.note.type;
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
  },
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo,
  },
};
