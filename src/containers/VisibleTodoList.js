import moment from 'moment';
import { connect } from 'react-redux'
import { toggleTodo, updateDueDate } from '../actions'
import TodoList from '../components/TodoList'

/**
 * Determines what the dateString should display and coloration in the Todo
 * component
 */
export const getDueInfo = (todo) => {
  let dateString = 'Set Due Date';
  let pastDue = false;
  let dueToday = false;
  if (todo.dueDate) {
    const dateDiff = moment().diff(todo.dueDate, 'days');
    if (dateDiff > 0) {
      pastDue = true;
      if (dateDiff === 1) {
        dateString = 'Yesterday';
      } else {
        dateString = todo.dueDate.fromNow();
      }
    } else if (moment().format('MMMM DD YYYY') === todo.dueDate.format('MMMM DD YYYY')) {
      dueToday = true;
      dateString = 'Today';
    } else {
      dateString = todo.dueDate.format('MMM DD');
    }
  }
  return {
    dateString,
    dueToday,
    pastDue
  };
}

/**
 * Categorize tasks as complete, incomplete, or new. Sort incompete tasks if
 * applicable
 */
export function separateTodoTypes(todosBase, sortBy) {
  const todos = todosBase.map(t => ({ ...t, ...(getDueInfo(t)) }));
  const output = {
    completedTodos: [],
    incompleteTodos: [],
    newTodos: []
  };
  todos.forEach((t) => {
    if (t.completed) {
      output.completedTodos.push(t);
    } else if (!t.completed && !t.dueDate) {
      output.newTodos.push(t);
    } else if (!t.completed) {
      output.incompleteTodos.push(t);
    }
  });
  if (sortBy) {
    output.incompleteTodos.sort((a, b) => {
      if(a[sortBy] < b[sortBy]) { return -1; }
      if(a[sortBy] > b[sortBy]) { return 1; }
      return 0;
    });
  }
  return output;
}

const mapStateToProps = state => ({
  showCompleted: state.visibilityFilter.showCompleted,
  ...separateTodoTypes(state.todos.list, state.todos.sortBy),
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  changeDueDate: (id, dueDate) => dispatch(updateDueDate(id, dueDate))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
