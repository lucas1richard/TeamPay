import React from 'react';
import { shallow } from 'enzyme';
import { AddTodo } from './index';

describe('AddTodo container', () => {
  it('renders without crashing', () => {
    shallow(<AddTodo dispatch={jest.fn()} />);
  })
})
