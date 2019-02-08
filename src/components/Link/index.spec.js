import React from 'react';
import { shallow } from 'enzyme';
import Link from './index';


describe('Link', () => {
  const props = {
    active: false,
    onClick: jest.fn(),
    children: 'Link'
  };
  it('renders without crashing', () => {
    shallow(<Link {...props} />);
  })
})
