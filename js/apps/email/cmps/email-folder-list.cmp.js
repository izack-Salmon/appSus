import { eventBus } from "../../../services/event-bus-service.js"

export default {
    template: `
    <section>
        <div @click="setStatus('inbox')" class="row-ruler">
            <span class="material-icons span-icon">inbox</span>
            <span class="span-title">Inbox</span>
        </div>
        <div @click="setStatus('/starred')" class="row-ruler">
            <span class="material-icons span-icon">star</span>
            <span class="span-title">Starred</span>   
        </div>
        <div @click="setStatus('sent')" class="row-ruler">
            <span class="material-icons span-icon">send</span>
            <span class="span-title">Sent</span>   
        </div>
        <div @click="setStatus('drafts')" class="row-ruler">
            <span class="material-icons span-icon">drafts</span>
            <span class="span-title">Drafts</span>   
        </div>
        <div @click="setStatus('trash')" class="row-ruler">
            <span class="material-icons span-icon">folder_delete</span>
            <span class="span-title">Trash</span>   
        </div> 
    </section>
    `,
    data() {
        return {
            status: '',
        }
    },
    methods: {
        setStatus(folderStr) {
            eventBus.$emit('change status', folderStr)
        }
    },
};