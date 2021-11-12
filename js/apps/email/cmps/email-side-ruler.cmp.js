import emailCompose from "../cmps/email-compose.cmp.js"
import emailFolderList from "./email-folder-list.cmp.js"



export default {
    template: `
        <section class="email-side-ruler">
            <email-compose/>
            <email-folder-list />
            
        </section>
    `,
    components: {
        emailCompose,
        emailFolderList,
    }

}