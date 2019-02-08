import React from 'react';
import { shallow } from 'enzyme';
import Todo from './index';

describe('Todo', () => {
  const props = {
    onClick: jest.fn(),
    completed: true,
    text: 'Run the tests',
    dateString: 'Today',
    pastDue: false,
    dueToday: true
  }

  it('renders without crashing due today', () => {
    shallow(<Todo {...props} />);
  })
  it('renders without crashing past due', () => {
    shallow(
      <Todo
        {...props}
        dateString="2 days ago"
        pastDue
        dueToday={false}
      />
    );
  })
  it('renders without crashing no due set', () => {
    shallow(
      <Todo
        {...props}
        dateString="Set a Due Date"
        pastDue={false}
        dueToday={false}
      />
    );
  })
  it('renders without crashing due later', () => {
    shallow(
      <Todo
        {...props}
        dateString="Later"
        pastDue={false}
        dueToday={false}
      />
    );
  })
})
