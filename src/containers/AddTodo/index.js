import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import AddButton from '../../components/AddButton';
import Container from '../../components/Container';
import {
  Wrapper,
  H1,
  H2,
  Input,
  Form
} from './styled';

export const AddTodo = ({ dispatch }) => {
  let input

  return (
    <Wrapper>
      <H1>LISTICLES</H1>
      <div>
        <H2>Marketing Content</H2>
        <Container>
          <Form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }}>
            <Input
              ref={node => input = node}
              placeholder="Add a to-do"
            />
            <AddButton type="submit">
              ADD
            </AddButton>
          </Form>
        </Container>
      </div>
    </Wrapper>
  )
}

export default connect()(AddTodo)
