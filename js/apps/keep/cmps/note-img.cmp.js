export default {
  props: ['note'],
  template: `
    <div class='img-container'>
      <img class='img' :src="note.info.url" alt="">
      <div class=info-container>
      <p class=title>{{note.info.title}}</p> 
      </div>
    </div>
        `,
  data() {
    return {};
  },
  computed: {
    getImgUrl(note) {
      return note.info.url;
    },
  },
};
