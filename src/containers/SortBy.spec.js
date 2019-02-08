import { mapStateToProps, mapDispatchToProps } from './SortBy';

describe('SortBy container', () => {
  it('maps state to props', () => {
    expect(mapStateToProps({
      todos: { sortBy: 'dueDate' }
    })).toEqual({
      sortBy: 'dueDate'
    })
  })
  it('maps dispatch to props', () => {
    const dispatch = jest.fn()
    const toProps = mapDispatchToProps(dispatch);
    toProps.updateSortBy();
    expect(dispatch).toHaveBeenCalledTimes(1);
  })
})