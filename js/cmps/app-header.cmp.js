import appsButton from "./apps-button.cmp.js";

export default {
    template: `
        <header class="app-header">
            <router-link class="logo-router" to="/"> <h3>appSus</h3></router-link>
            <nav>
                <apps-button />
            </nav>
        </header>
    `,
    components: {
        appsButton,
    }
};