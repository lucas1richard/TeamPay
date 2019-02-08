import React from 'react';
import { shallow } from 'enzyme';
import SortBy from './index';

describe('SortBy', () => {
  it('renders without crashing', () => {
    shallow(<SortBy />);
  })
  it('renders without crashing with prop', () => {
    shallow(<SortBy sortBy="dueDate" />);
  })
})
