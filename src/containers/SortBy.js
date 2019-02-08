import { connect } from 'react-redux'
import { updateSortBy } from '../actions'
import SortBy from '../components/SortBy'

export const mapStateToProps = state => ({
  sortBy: state.todos.sortBy
})

export const mapDispatchToProps = dispatch => ({
  updateSortBy: (sortBy) => dispatch(updateSortBy(sortBy))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortBy)
