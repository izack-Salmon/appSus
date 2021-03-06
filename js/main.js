import { router } from './services/routes.js';
import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';
// import homePage from './pages/home-page.cmp.js';
const options = {
    el: '#app',
    router,
    template: `
        <section>
        <app-header />
        <user-msg />
        <router-view />
        <app-footer />
        </section>
    `,
    components: {
        appFooter,
        appHeader,
        userMsg,
        // homePage
    },
};

new Vue(options);