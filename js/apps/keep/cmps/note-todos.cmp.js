export default {
  props: ['note'],
  template: `
  <div class='todo-container'>
  <h3 class=label>{{note.info.label}}</h3>
  <hr>
         <ul>
             <li @click='struckThough' :class="{struckThough:isclick}" v-for="todo in note.info.todos">
                 {{todo.txt}}
             </li>
        </ul>
        </div>
          `,
  data() {
    return {
      isclick: false,
    };
  },
  methods: {
    struckThough() {
      this.isclick = !this.isclick;
    },
  },
};
