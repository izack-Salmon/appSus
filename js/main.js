import { router } from './services/routes.js';
import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
const options = {
  el: '#app',
  router,
  template: `
        <section>
        <app-header />
        <router-view />
        <app-footer />
        </section>
    `,
  components: {
    appFooter,
    appHeader,
  },
};

new Vue(options);
