export default {
  props: ['note'],
  template: `
        <section>
          <div>
            <div class=txt>{{note.info.txt}}</div>
          </div>
        </section>
      `,
};
