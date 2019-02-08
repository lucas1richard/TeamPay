import React from 'react';
import { shallow } from 'enzyme';
import ToggleCompleted from './ToggleCompleted';

describe('ToggleCompleted', () => {
  it('renders without crashing', () => {
    shallow(<ToggleCompleted />);
  })
})
