import styled from 'styled-components';

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.span`
  color: gray;
  margin-left: auto;
  margin-right: auto;
  display: ${(props) => props.disabled ? 'none' : 'block'};
  text-decoration: underline;
  cursor: pointer;
`;
