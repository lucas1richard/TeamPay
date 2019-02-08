import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

describe('TodoList', () => {
  const props = {
    toggleTodo: jest.fn(),
    incompleteTodos: [],
    completedTodos: [],
    showCompleted: false,
    newTodos: [],
    changeDueDate: jest.fn()
  }
  it('renders without crashing', () => {
    shallow(<TodoList {...props} />);
  })
})
