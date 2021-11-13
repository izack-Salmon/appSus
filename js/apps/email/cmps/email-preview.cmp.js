export default {
    props: ['email'],
    template: `
    <section  class="preview-box flex"  @click="goToDetails(email.id)">
        <div class="div-email-info">
            <div class="email-starred-box">

            </div>
            <p class="p-subject">{{email.subject}}</p>
            <p class="p-body">{{email.body}}</p>  
        </div>
        
    </section>
    `,
    created() {
        console.log(this.email.isRead)
    },
    methods: {
        goToDetails(id) {
            this.$router.push(`/email/${id}`);
        },

    },
};