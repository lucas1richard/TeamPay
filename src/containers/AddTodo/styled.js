import styled from 'styled-components';
import InputBase from '../../components/Input';

export const Input = styled(InputBase)`
  width: 80%;
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.indigo};
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0rem;
`;

export const Form = styled.form`
  background-color: #fff;
  width: 100%;
  margin: auto;
`;

export const H1 = styled.h1`
  color: #fff;
  margin: 0px;
  text-align: center;
`;

export const H2 = styled.h2`
  color: #fff;
  margin: 0px;
  text-align: center;
`;