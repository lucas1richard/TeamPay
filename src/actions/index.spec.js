import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  it('toggleCompleted should create SHOW_COMPLETED action', () => {
    expect(actions.toggleCompleted(true)).toEqual({
      type: 'SHOW_COMPLETED',
      showCompleted: true
    })
  })

  it('updateDueDate should create UPDATE_DUE_DATE action', () => {
    expect(actions.updateDueDate(1, '2019-02-08')).toEqual({
      type: 'UPDATE_DUE_DATE',
      id: 1,
      dueDate: '2019-02-08'
    })
  })

  it('updateSortBy should create UPDATE_SORT_BY action', () => {
    expect(actions.updateSortBy('dueDate')).toEqual({
      type: 'UPDATE_SORT_BY',
      sortBy: 'dueDate'
    })
  })
})
