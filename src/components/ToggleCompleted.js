import React from 'react'
import styled from 'styled-components';
import FilterLink from '../containers/FilterLink'

const Wrapper = styled.div`
  margin: 1rem 0rem;
`;

const ToggleCompleted = () => (
  <Wrapper>
    <FilterLink showCompleted={false}>
      Hide Completed Tasks
    </FilterLink>
    <FilterLink showCompleted>
      Show Completed Tasks
    </FilterLink>
  </Wrapper>
);

export default ToggleCompleted;
