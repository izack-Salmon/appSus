export default {
  template: `
            <section>
                <div class="email-top-ruler">
                    <input @input="filter" v-model="filterBy.txt" type="text" placeholder="search mail">
                </div>
            </section>  
    `,
  data() {
    return {
      filterBy: {
        txt: '',
        isRead: false,
      },
    };
  },
  methods: {
    filter() {
      this.$emit('filtered', { ...this.filterBy });
    },
  },
};
