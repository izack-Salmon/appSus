import { router } from './services/routes.js';
const options = {
  el: '#app',
  router,
  template: `
        <section>
          <div>hi</Div>
        </section>
    `,
  components: {},
};

new Vue(options);
