export default {
    template: ` 
        <section class="btn-apps">
            <span @click="isHidden = !isHidden" class="material-icons on-icon">apps</span>
            <div class="apps-menu" v-if="!isHidden">
                <div class="icon-row-box">
                    <router-link to="/"><span class="material-icons rout-icons">home</span></router-link> 
                    <router-link to="/email"><span class="material-icons rout-icons">email</span></router-link> 
                    <router-link to="/keep"><span class="material-icons rout-icons">edit_note</span></router-link> 
                </div>
            </div>
        </section>
        `,
    data() {
        return {
            isHidden: true,
        }
    },
    methods: {

    },
}