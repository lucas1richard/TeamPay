import { mapStateToProps, mapDispatchToProps } from './FilterLink';

describe('FilterLink container', () => {
  it('maps state to props', () => {
    expect(mapStateToProps({
      visibilityFilter: { showCompleted: true }
    }, {
      showCompleted: true
    })).toEqual({
      active: true
    })
    expect(mapStateToProps({
      visibilityFilter: { showCompleted: false }
    }, {
      showCompleted: true
    })).toEqual({
      active: false
    })
  })
  it('maps dispatch to props', () => {
    const dispatch = jest.fn()
    const toProps = mapDispatchToProps(dispatch, { showCompleted: true });
    toProps.onClick();
    expect(dispatch).toHaveBeenCalledTimes(1);
  })
})