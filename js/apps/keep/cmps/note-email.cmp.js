export default {
  props: ['note'],
  template: `
          <section>
            <div>
              <h4>{{note.to}}</h4>
              <hr>
              <h5>{{note.subject}}</h5>
              <hr>
              <div>{{note.body}}</div>
            </div>
          </section>
        `,
};
