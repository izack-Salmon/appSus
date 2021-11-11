import noteCrudButtons from './note-crudButtons.cmp.js';
export default {
  props: ['note'],
  template: `
        <section>
          <div>
            <div class=txt>{{note.info.txt}}</div>
          </div>
        </section>
      `,
  components: {
    noteCrudButtons,
  },
};
