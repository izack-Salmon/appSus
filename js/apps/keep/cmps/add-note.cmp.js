import { eventBus } from '../../../services/event-bus-service.js';

export default {
  template: `
        <section class=input-icon>
          <textarea :placeholder="[[ placeholderTxt ]]" v-model='textareaTxt' @change="addNote" class=add-note type="text"></textarea>
          <span @click="getActiveClass('text_format')" :class="{active:istextFormatActive}" class="material-icons">text_format</span>
          <span  @click="getActiveClass('image')" :class="{active:isImageActive}" class="material-icons">image</span>
          <span @click="getActiveClass('smart_display')" :class="{active:isSmartDisplayActive}" class="material-icons">smart_display</span>
          <span @click="getActiveClass('list')" :class="{active:isListActive}" class="material-icons">list</span>
        </span>
        </section>
      `,
  data() {
    return {
      placeholderTxt: 'What on your mind... ',
      textareaTxt: null,
      istextFormatActive: false,
      isImageActive: false,
      isSmartDisplayActive: false,
      isListActive: false,
    };
  },
  computed: {},
  methods: {
    addNote() {
      if (this.textareaTxt) eventBus.$emit('textareaTxt', this.textareaTxt);
    },
    getActiveClass(id) {
      this.istextFormatActive = false;
      this.isImageActive = false;
      this.isSmartDisplayActive = false;
      this.isListActive = false;
      eventBus.$emit('textFormatActive', this.istextFormatActive);
      eventBus.$emit('isImageActive', this.isImageActive);
      eventBus.$emit('isListActive', this.isListActive);
      if (id === 'text_format') {
        this.istextFormatActive = !this.istextFormatActive;
        this.placeholderTxt = 'What on your mind... ';
        eventBus.$emit('textFormatActive', this.istextFormatActive);
      } else if (id === 'image') {
        this.isImageActive = !this.isImageActive;
        this.placeholderTxt = 'Enter image URL';
        eventBus.$emit('isImageActive', this.isImageActive);
      } else if (id === 'smart_display') {
        this.isSmartDisplayActive = !this.isSmartDisplayActive;
        this.placeholderTxt = 'Enter video URL';
      } else if (id === 'list') {
        this.isListActive = !this.isListActive;
        this.placeholderTxt = 'Enter comma separated list...';
        eventBus.$emit('isListActive', this.isListActive);
      }
    },
  },
};
