import React from 'react'
import PropTypes from 'prop-types'
import { OuterWrapper, Wrapper } from './styled';

const Link = ({ active, children, onClick }) => {
  return (
    <OuterWrapper>
      <Wrapper onClick={onClick} disabled={active}>
        {children}
      </Wrapper>
    </OuterWrapper>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
