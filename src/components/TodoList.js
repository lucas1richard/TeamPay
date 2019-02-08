import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Todo from './Todo'
import ToggleCompleted from './ToggleCompleted';
import SortBy from '../containers/SortBy';
import Container from './Container';

const NewTasksHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h3`
  color: ${props => props.theme.indigo};
`;

const TodoList = ({ toggleTodo, incompleteTodos, completedTodos, showCompleted, newTodos, changeDueDate }) => (
  <Container>
    {newTodos.length > 0 && <Header>NEW TASKS</Header>}
    {newTodos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        changeDueDate={changeDueDate}
      />
    )}
    {incompleteTodos.length > 0 && 
    <NewTasksHeaderWrapper>
      <Header>ALL TASKS</Header>
      <SortBy />
    </NewTasksHeaderWrapper>}
    {incompleteTodos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        changeDueDate={changeDueDate}
      />
    )}
    {completedTodos.length > 0 && (
      <ToggleCompleted />
    )}
    {showCompleted && completedTodos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        changeDueDate={changeDueDate}
      />
    )}
  </Container>
)

const makeTodoProptype = () => PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}).isRequired).isRequired;

TodoList.propTypes = {
  completedTodos: makeTodoProptype(),
  incompleteTodos: makeTodoProptype(),
  toggleTodo: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool
}

export default TodoList
