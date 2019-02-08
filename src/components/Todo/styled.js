import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

export const TextWrapper = styled.div`
  width: 75%;
  margin-left: 5%;
`;

export const Text = styled.div`
  padding: 1rem 0rem;
  border-bottom: 1px solid gray;
  text-decoration: ${(props) => props.completed ? 'line-through' : 'none'};
  color: ${(props) => props.completed ? 'gray' : 'black'};
`;

export const EmptyBoxWrapper = styled.div`
`;

export const CheckBoxWrapper = styled(EmptyBoxWrapper)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function dueDateColor(props) {
  let color = 'black';
  if (props.completed) {
    color = 'gray';
  } else if (props.pastDue) {
    color = 'red';
  } else if (props.dueToday) {
    color = 'orange';
  }
  return color;
}

export const DueDateWrapper = styled(EmptyBoxWrapper)`
  width: 25%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid gray;
  position: relative;
  color: ${dueDateColor};
`;
