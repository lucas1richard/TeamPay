import React from 'react'
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker';
import {
  Wrapper,
  CheckBoxWrapper,
  TextWrapper,
  Text,
  DueDateWrapper
} from './styled';


class Todo extends React.Component {
  state = {
    showDateSetter: false
  }

  toggleDateSetter = () => {
    this.setState((state) => ({
      showDateSetter: !state.showDateSetter
    }));
  }

  changeDate = (date) => {
    this.props.changeDueDate(this.props.id, date);
    this.setState({
      showDateSetter: false
    });
  }

  render() {
    const {
      onClick,
      completed,
      text,
      dateString,
      pastDue,
      dueToday
    } = this.props;

    return (
      <Wrapper>
        <CheckBoxWrapper onClick={onClick}>
          <FontAwesome
            name={completed ? 'check-square-o' : 'square-o'}
            style={{ color: completed ? 'green' : 'black' }}
          />
        </CheckBoxWrapper>
        <TextWrapper>
          <Text completed={completed}>
            {text}
          </Text>
        </TextWrapper>
        <DueDateWrapper pastDue={pastDue} dueToday={dueToday} completed={completed} onClick={this.toggleDateSetter}>
          <div style={{ fontSize: '0.8rem' }}>{dateString}</div>
          <FontAwesome
            name="calendar"
            style={{ marginLeft: '1rem' }}
          />
        </DueDateWrapper>
        {this.state.showDateSetter &&
          <DatePicker
            onChange={this.changeDate}
            withPortal
            inline
          />
        }
      </Wrapper>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  dateString: PropTypes.string,
  pastDue: PropTypes.bool,
  dueToday: PropTypes.bool
}

export default Todo
