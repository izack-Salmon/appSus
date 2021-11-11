import emailCompose from "../cmps/email-compose.cmp.js"


export default {
    template: `
        <section class="email-side-ruler">
            <email-compose/>
            <div class="row-ruler">
                <span class="material-icons span-icon">inbox</span>
                <span class="span-title">Inbox</span>
            </div>
            <div class="row-ruler">
                <span class="material-icons span-icon">star</span>
                <span class="span-title">Starred</span>   
            </div>
            <div class="row-ruler">
                <span class="material-icons span-icon">content_paste_go</span>
                <span class="span-title">Sent</span>   
            </div>
            <div class="row-ruler">
                <span class="material-icons span-icon">drafts</span>
                <span class="span-title">Drafts</span>   
            </div>
            <div class="row-ruler">
                <span class="material-icons span-icon">delete</span>
                <span class="span-title">Trash</span>   
            </div>
        </section>
    `,
    components: {
        emailCompose,
    }

}