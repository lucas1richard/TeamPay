import visibilityFilter from './visibilityFilter'

describe('visibilityFilter reducer', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual({
      showCompleted: false
    })
  })
  it('should handle SHOW_COMPLETED', () => {
    expect(
      visibilityFilter({
        showCompleted: false
      }, {
        type: 'SHOW_COMPLETED',
        showCompleted: true
      })
    ).toEqual({
      showCompleted: true
    })
  })
})
