import todos, { initialState } from './todos'
import moment from 'moment';

const makeInitialState = (list) => ({
  ...initialState,
  list: list || []
});

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual(makeInitialState())
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos(makeInitialState(), {
        type: 'ADD_TODO',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual(makeInitialState([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ])
    )

    expect(
      todos(makeInitialState([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ]), {
        type: 'ADD_TODO',
        text: 'Use Redux',
        id: 1
      })
    ).toEqual(makeInitialState([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      ])
    )

    expect(
      todos(makeInitialState([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      ]), {
        type: 'ADD_TODO',
        text: 'Fix the tests',
        id: 2
      })
    ).toEqual(makeInitialState([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }, {
          text: 'Fix the tests',
          completed: false,
          id: 2
        }
      ])
    )
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(makeInitialState([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ]), {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual(makeInitialState([
        {
          text: 'Run the tests',
          completed: true,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ])
    )
  })

  it('should handle UPDATE_DATE', () => {
    expect(
      todos(
        makeInitialState([
          {
            id: 0,
            text: 'Run the tests',
            completed: false
           }
        ]),
        {
          type: 'UPDATE_DUE_DATE',
          id: 0,
          dueDate: '2019-02-08'
        }
      )
    ).toEqual(makeInitialState([
        {
          text: 'Run the tests',
          id: 0,
          completed: false,
          dueDate: moment('2019-02-08')
        }
      ])
    )
  })
  it('should handle UPDATE_SORT_BY', () => {
    expect(
      todos(
        makeInitialState(),
        {
          type: 'UPDATE_SORT_BY',
          sortBy: 'dueDate'
        })
    ).toEqual({
      sortBy: 'dueDate',
      list: []
    });
  })
})
