import emailPreview from './email-preview.cmp.js';
export default {
  props: ['emails'],
  template: `
    <section class="list-holder">
        <table>
            <tbody>
            <tr v-for="email in emails" :key="email.id">
                <email-preview :email="email" />
            </tr>
            </tbody>
        </table>
    </section>
    `,
  methods: {},
  components: {
    emailPreview,
  },
};
