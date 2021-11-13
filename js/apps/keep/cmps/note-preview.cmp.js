import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteEmail from './note-email.cmp.js';
import noteCrudButtons from './note-crudButtons.cmp.js';
export default {
  props: ['note'],
  template: `
       <div class='note-preview-txt'>
            <div class='txt-contaier' v-if='txtType'>
            <note-txt :note='note'/>
            <note-crud-buttons :note='note'/>
            </div>
            <div v-else-if='imgType'>
            <note-img :note='note'/>
            <note-crud-buttons :note='note'/>
            </div>
            <div class='todo-contaier' v-else-if='todosType'>
            <note-todos :note='note'/>
            <note-crud-buttons :note='note'/>
            </div>
            <div class='video-contaier' v-else-if='videoType'>
            <note-video :note='note'/>
            <note-crud-buttons :note='note'/>
            </div>
            <div class='video-contaier' v-else-if='emailType'>
            <note-email :note='note'/>
            <note-crud-buttons :note='note'/>
            </div>
          </div>
    `,
  created() {},
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
    emailType() {
      if (this.getType() === 'note-email') {
        return true;
      }
    },
  },
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo,
    noteCrudButtons,
    noteEmail,
  },
};
