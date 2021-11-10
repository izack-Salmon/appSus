export default {
  props: ['note'],
  template: `
  <div class='todo-container'>
  <h3 class=label>{{note.info.label}}</h3>
         <ul class>
             <li v-for="todo in note.info.todos">
                 {{todo.txt}}
             </li>
        </ul>
        </div>
          `,
};
