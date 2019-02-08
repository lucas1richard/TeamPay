let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const toggleCompleted = showCompleted => ({
  type: 'SHOW_COMPLETED',
  showCompleted
});

export const updateDueDate = (id, dueDate) => ({
  type: 'UPDATE_DUE_DATE',
  id,
  dueDate
})

export const updateSortBy = (sortBy) => ({
  type: 'UPDATE_SORT_BY',
  sortBy
})
