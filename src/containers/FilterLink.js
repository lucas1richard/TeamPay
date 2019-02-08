import { connect } from 'react-redux'
import { toggleCompleted } from '../actions'
import Link from '../components/Link'

export const mapStateToProps = (state, ownProps) => ({
  active: ownProps.showCompleted === state.visibilityFilter.showCompleted
})

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleCompleted(ownProps.showCompleted))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
