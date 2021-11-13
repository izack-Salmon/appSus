export default {
    template: `
            <section>
                <div class="email-top-ruler">
                    <input @input="filter" v-model="txt" type="text" placeholder="search mail">
                </div>
            </section>  
    `,
    data() {
        return {
            txt: '',
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', this.txt);
        },
    },
};