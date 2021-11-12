export default {
  template: `
      <section>
          <div class="email-top-ruler margin">
              <input @input="filter" v-model="filterBy.type" type="text" placeholder="search by type">
          </div>
      </section>  
    `,
  data() {
    return {
      filterBy: {
        type: '',
      },
    };
  },
  methods: {
    filter() {
      this.$emit('filtered', { ...this.filterBy });
    },
  },
};
