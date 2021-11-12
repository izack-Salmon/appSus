import { utilService } from '../../../services/util-service.js';
export default {
  props: ['note'],
  template: `
  <div class='todo-container'>
  <h3 class=label>{{note.info.label}}</h3>
  <hr>
         <ul>
             <li v-if="id" @click='struckThough' :class="{struckThough:isclick,true:id}" v-for="todo in note.info.todos">
                 {{todo.txt}}
             </li>
        </ul>
        </div>
          `,
  data() {
    return {
      isclick: false,
      id: null,
    };
  },
  created() {
    this.id = utilService.makeId;
  },
  methods: {
    makeId() {},
    struckThough() {
      this.isclick = !this.isclick;
    },
  },
  components: {
    utilService,
  },
};
