export default {
  props: ['email'],
  template: `
    <section class="preview-box" @click="goToDetails(email.id)">
        <h3>{{email.subject}}</h3>
        <p>{{email.body}}</p>
        <div>isRead</div>
    </section>
    `,
  methods: {
    goToDetails(id) {
      this.$router.push(`/email/${id}`);
    },
  },
};
