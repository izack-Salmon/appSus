export default {
  template: `
            <section>
                <div class="email-top-ruler">
                    <input class='search-emails' @input="filter" v-model="txt" type="text" placeholder="search mail">
                    <select @change="selectRead($event)"  name="emailToshow">
                        <option value="ShowAll">Show All</option>
                        <option value="Read">Read</option>
                        <option value="unRead">un Read</option>
                    </select>
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
    selectRead(event) {
      console.log(event.target.value);
      if (event.target.value === 'Read') {
        this.$emit('filterRead', true);
      } else if (event.target.value === 'unRead') {
        this.$emit('filterRead', false);
      } else {
        this.$emit('filterRead', null);
      }
    },
  },
};
