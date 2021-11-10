import homePage from '../pages/home-page.cmp.js';
import noteApp from '../apps/keep/pages/note-app.cmp.js';
import emailApp from '../apps/email/pages/email-app.cmp.js';
// D:\dev\appSus\js\

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/email',
    component: emailApp,
  },
  {
    path: '/keep',
    component: noteApp,
  },
];

export const router = new VueRouter({ routes });
