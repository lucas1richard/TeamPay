import { getDueInfo, separateTodoTypes } from './VisibleTodoList'
import moment from 'moment';

describe('getDueInfo', () => {
  it('handles pastDue older than yesterday', () => {
    expect(
      getDueInfo(
        {
          dueDate: moment().subtract(2, 'days')
        }
      )
    ).toEqual({
      dateString: '2 days ago',
      dueToday: false,
      pastDue: true
    })
  })
  it('handles pastDue yesterday', () => {
    expect(
      getDueInfo(
        {
          dueDate: moment().subtract(1, 'days')
        }
      )
    ).toEqual({
      dateString: 'Yesterday',
      dueToday: false,
      pastDue: true
    })
  })
  it('handles due today', () => {
    expect(
      getDueInfo(
        {
          dueDate: moment()
        }
      )
    ).toEqual({
      dateString: 'Today',
      dueToday: true,
      pastDue: false
    })
  })
  it('handles due later', () => {
    expect(
      getDueInfo(
        {
          dueDate: moment().add(2, 'days')
        }
      )
    ).toEqual({
      dateString: moment().add(2, 'days').format('MMM DD'),
      dueToday: false,
      pastDue: false
    })
  })
})

describe('separateTodoTypes', () => {
  const futureDate = moment().add(1, 'day')
  const pastDate = moment().subtract(2, 'days')
  const makeTodosBase = () => ([
    {
      text: 'Run the tests (future)',
      id: 0,
      completed: false,
      dueDate: futureDate
    },
    {
      text: 'Run the tests (no dueDate set)',
      id: 1,
      completed: false
    },
    {
      text: 'Run the tests (complete)',
      id: 2,
      completed: true
    },
    {
      text: 'Run the tests (pastDue)',
      id: 3,
      dueDate: pastDate,
      completed: false
    }
  ])
  it ('handles todos without sorting', () => {
    expect(
      separateTodoTypes(makeTodosBase())
    ).toEqual(
      {
        completedTodos: [{
          text: 'Run the tests (complete)',
          id: 2,
          completed: true,
          dateString: 'Set Due Date',
          dueToday: false,
          pastDue: false
        }],
        incompleteTodos: [{
          text: 'Run the tests (future)',
          id: 0,
          completed: false,
          dueDate: futureDate,
          dateString: futureDate.format('MMM DD'),
          pastDue: false,
          dueToday: false
        }, {
          text: 'Run the tests (pastDue)',
          id: 3,
          dueDate: pastDate,
          completed: false,
          dateString: pastDate.fromNow(),
          pastDue: true,
          dueToday: false
        }],
        newTodos: [{
          text: 'Run the tests (no dueDate set)',
          id: 1,
          completed: false,
          dateString: 'Set Due Date',
          dueToday: false,
          pastDue: false
        }]
      }
    );
  })
  it ('handles todos with sorting', () => {
    expect(
      separateTodoTypes(makeTodosBase(), 'dueDate')
    ).toEqual(
      {
        completedTodos: [{
          text: 'Run the tests (complete)',
          id: 2,
          completed: true,
          dateString: 'Set Due Date',
          dueToday: false,
          pastDue: false
        }],
        incompleteTodos: [{
          text: 'Run the tests (pastDue)',
          id: 3,
          dueDate: pastDate,
          completed: false,
          dateString: pastDate.fromNow(),
          pastDue: true,
          dueToday: false
        }, {
          text: 'Run the tests (future)',
          id: 0,
          completed: false,
          dueDate: futureDate,
          dateString: futureDate.format('MMM DD'),
          pastDue: false,
          dueToday: false
        }],
        newTodos: [{
          text: 'Run the tests (no dueDate set)',
          id: 1,
          completed: false,
          dateString: 'Set Due Date',
          dueToday: false,
          pastDue: false
        }]
      }
    );
  })
})
