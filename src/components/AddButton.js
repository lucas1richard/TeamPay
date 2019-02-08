import styled from 'styled-components';

const AddButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-weight: bold;
  height: 30px;
  color: ${(props) => props.theme.indigo};
  width: 20%;
  @media (min-width: 1200px) {
    width: 10%;
  }
`;

export default AddButton;
