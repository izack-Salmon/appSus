export default {
    props: ['email'],
    template: `
    <section class="preview-box flex" @click=" goToDetails(email.id)">
        <div class="div-email-info">
            <p class="p-subject">{{email.subject}}</p>
            <p class="p-body">{{email.body}}</p>   
        </div>
        
    </section>
    `,
    methods: {
        goToDetails(id) {
            this.$router.push(`/email/${id}`);
        },
    },
};