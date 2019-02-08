import React from 'react';
import {
  Wrapper,
  Text,
  Option,
  OptionsWrapper
} from './styled';

class SortBy extends React.Component {
  state = {
    showOptions: false
  }

  toggleOptions = () => {
    this.setState((state) => ({ showOptions: !state.showOptions }));
  }

  updateSortBy = (val) => {
    this.props.updateSortBy(val);
    this.toggleOptions();
  }
  
  render() {
    const { sortBy } = this.props;
    return (
      <Wrapper>
        <Text onClick={this.toggleOptions}>
          Sort by: {sortBy === 'dueDate' ? 'Due Date' : (sortBy === 'text' ? 'Text' : '')}
        </Text>
        {this.state.showOptions && (
          <OptionsWrapper>
            <Option onClick={() => this.updateSortBy('id')}>
              &nbsp;
            </Option>
            <Option onClick={() => this.updateSortBy('dueDate')}>
              Due&nbsp;Date
            </Option>
            <Option onClick={() => this.updateSortBy('text')}>
              Text
            </Option>
          </OptionsWrapper>
        )}
      </Wrapper>
    );
  }
}

export default SortBy;
