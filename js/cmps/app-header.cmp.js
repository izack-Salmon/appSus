import appsButton from "./apps-button.cmp.js";

export default {
    template: `
        <header class="app-header">
            <h3>appSus</h3>
            <nav>
                <apps-button />
            </nav>
        </header>
    `,
    components: {
        appsButton,
    }
};