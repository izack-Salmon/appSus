export default {
  props: ['note'],
  template: `
            <iframe width="100%" height="100%" :src="note.info.url"></iframe>
            `,
  created() {
    //
  },
};
