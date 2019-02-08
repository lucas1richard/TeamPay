export const initialState = {
  showCompleted: false
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_COMPLETED':
      return {
        ...state,
        showCompleted: action.showCompleted
      };
    default:
      return state;
  }
}

export default visibilityFilter
