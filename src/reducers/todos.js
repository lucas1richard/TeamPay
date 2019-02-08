import moment from 'moment';

export const initialState = {
  sortBy: undefined,
  list: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
          ...state,
          list: state.list.concat({
            id: action.id,
            text: action.text,
            completed: false
          })
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        list: state.list.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      }
    case 'UPDATE_DUE_DATE':
        return {
          ...state, 
          list: state.list.map(todo =>
            (todo.id === action.id)
            ? {...todo, dueDate: moment(action.dueDate)}
            : todo
          )
        }
      case 'UPDATE_SORT_BY':
        return {
          ...state,
          sortBy: action.sortBy
        }
    default:
      return state
  }
}

export default todos
