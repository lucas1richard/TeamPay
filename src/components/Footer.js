import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <FilterLink showCompleted={false}>
      Hide Completed Tasks
    </FilterLink>
    <FilterLink showCompleted>
      Show Completed Tasks
    </FilterLink>
  </div>
)

export default Footer
