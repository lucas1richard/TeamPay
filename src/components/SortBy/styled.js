import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Text = styled.div`
  color: ${props => props.theme.indigo};
  cursor: pointer;
  font-size: 0.8rem;
`;

export const Option = styled.div`
  border-bottom: 1px solid ${props => props.theme.indigo};
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0px;
  border-bottom: 1px solid #fff;
  background-color: ${props => props.theme.indigo};
  color: #fff;
  z-index: 5;
`;